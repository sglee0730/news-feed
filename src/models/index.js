import { model } from 'mongoose';

export const AccessToken = model('AccessToken', import('./access-token.js'));
export const Feed = model('Feed', import('./feed.js'));
export const NewsMembership = model(
  'NewsMembership',
  import('./news-membership.js'),
);
export const News = model('News', import('./news.js'));
export const Page = model('Page', import('./page.js'));
export const School = model('School', import('./school.js'));
export const User = model('User', import('./user.js'));
