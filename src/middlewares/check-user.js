import { AccessToken } from '../models/index.js';

export default async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('토큰 값이 입력되지 않았습니다.');
  }

  const accessToken = await AccessToken.findOne({ token });
  if (!accessToken) {
    return res.status(401).send('해당 토큰 값을 찾을 수 없습니다.');
  }

  res.locals.userId = accessToken.createdBy;

  return next();
};
