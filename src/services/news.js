import { News, NewsMembership, School, Feed, User } from '../models/index.js';

export const createNews = async (body, schoolId, userId) => {
  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    return { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    return { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const news = await News.create({
    createdBy: userId,
    updatedBy: userId,
    school: schoolId,
    ...body,
  });

  const newsMemberships = await NewsMembership.find({ school: schoolId });
  await Feed.create(
    newsMemberships.map((e) => ({
      news: news.id,
      school: schoolId,
      createdBy: e.user,
    })),
  );

  return news;
};

export const updateNews = async (body, schoolId, newsId, userId) => {
  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    return { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    return { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const isNewsExist = await News.exists({ school: schoolId, news: newsId });
  if (!isNewsExist) {
    return { status: 404, message: '학교 소식을 찾을 수 없습니다.' };
  }

  const news = await News.updateOne(
    { school: schoolId, news: newsId },
    {
      updatedBy: userId,
      ...body,
    },
  );

  return news;
};

export const deleteNews = async (schoolId, newsId, userId) => {
  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    return { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    return { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const isNewsExist = await News.exists({ school: schoolId, news: newsId });
  if (!isNewsExist) {
    return { status: 404, message: '학교 소식을 찾을 수 없습니다.' };
  }

  await News.deleteOne({ school: schoolId, news: newsId });
  await Feed.deleteMany({ school: schoolId, news: newsId });
};
