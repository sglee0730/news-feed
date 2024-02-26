import { News, NewsMembership, School, User } from '../models/index.js';

export const createNewsMembership = async (schoolId, userId) => {
  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    return { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    return { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const newsMembership = await NewsMembership.create({
    createdBy: userId,
    user: userId,
    school: schoolId,
  });

  return newsMembership;
};

export const deleteNewsMembership = async (
  schoolId,
  newsMembershipId,
  userId,
) => {
  const user = await User.findOne({ id: userId, role: 'Admin' }).lean();
  if (!user) {
    return { status: 403, message: '해당 작업을 수행할 권한이 없습니다.' };
  }

  const isSchoolExist = await School.exists({ id: schoolId });
  if (!isSchoolExist) {
    return { status: 404, message: '학교를 찾을 수 없습니다.' };
  }

  const deletedNewsMembership = await NewsMembership.deleteOne({
    school: schoolId,
    news: newsId,
    id: newsMembershipId,
  });
  if (deletedNewsMembership.deletedCount === 0) {
    return { status: 404, message: '구독된 소식이 아닙니다.' };
  }
};
