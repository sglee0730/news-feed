import { NewsMembership, Page, School, User } from '../models/index.js';

export const getSubscribedPages = async (limit, userId) => {
  const newsMemberships = await NewsMembership.find({ user: userId })
    .limit(limit)
    .lean();

  const schoolIds = newsMemberships.map((e) => e.school);
  const pages = await School.find({ id: { $in: schoolIds } }).limit(limit);

  return pages;
};

export const getPage = async (schoolId) => {
  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    throw { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const page = await Page.findOne({ school: schoolId }).lean();
  if (!page) {
    throw { status: 404, message: '학교 페이지가 존재하지 않습니다.' };
  }

  return page;
};

export const createPage = async (body, schoolId, userId) => {
  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    throw { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const isPageExist = await Page.exists({ school: schoolId }).lean();
  if (isPageExist) {
    throw { status: 409, message: '학교 페이지가 이미 존재합니다.' };
  }

  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    throw { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const page = await Page.create({
    createdBy: userId,
    updatedBy: userId,
    school: schoolId,
    ...body,
  });

  return page;
};

export const updatePage = async (body, schoolId, userId) => {
  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    throw { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    throw { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const isPageExist = await Page.exists({ school: schoolId }).lean();
  if (!isPageExist) {
    throw { status: 404, message: '학교 페이지를 찾을 수 없습니다.' };
  }

  const page = await Page.updateOne(
    { school: schoolId },
    {
      updatedBy: userId,
      ...body,
    },
  );

  return page;
};

export const deletePage = async (schoolId, userId) => {
  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    throw { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    throw { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const isPageExist = await Page.exists({ school: schoolId }).lean();
  if (!isPageExist) {
    throw { status: 404, message: '학교 페이지를 찾을 수 없습니다.' };
  }

  await Page.deleteOne({ school: schoolId });
};
