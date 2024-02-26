import { Feed } from '../models/index.js';

export const getFeedsByUser = async (limit, userId) => {
  const feeds = await Feed.find({ createdBy: userId })
    .limit(limit)
    .sort({ createdAt: -1 });

  return feeds;
};
