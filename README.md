# news-feed

## Specification

- Node: 16.15
- Database: MongoDB
- Framework: Express

## API Implementation

| API Path                                                    | Ref                                                                                                      | Description                                                           |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| POST /schools/:schoolId/page                                | [link](https://github.com/sglee0730/news-feed/blob/master/src/routers/schools/pages/index.js)            | 학교 관리자는 지역, 학교명으로 학교 페이지를 생성할 수 있다.          |
| POST /schools/:schoolId/news                                | [link](https://github.com/sglee0730/news-feed/blob/master/src/routers/schools/news/index.js#L8)          | 학교 관리자는 학교 페이지 내에 소식을 작성할 수 있다.                 |
| POST /schools/:schoolId/news/:newsId                        | [link](https://github.com/sglee0730/news-feed/blob/master/src/routers/schools/news/index.js#L37)         | 학교 관리자는 작성된 소식을 삭제할 수 있다.                           |
| PUT /schools/:schoolId/news/:newsId                         | [link](https://github.com/sglee0730/news-feed/blob/master/src/routers/schools/news/index.js#L22)         | 학교 관리자는 작성된 소식을 수정할 수 있다.                           |
| POST /schools/:schoolId/newsMemberships/:newsMembershipId   |                                                                                                          | 학생은 학교 페이지를 구독할 수 있다.                                  |
| POST /schools/:schoolId/newsMemberships/:newsMembershipId   |                                                                                                          | 학생은 구독 중인 학교 페이지 목록을 확인할 수 있다. (잘못만듬)        |
| DELETE /schools/:schoolId/newsMemberships/:newsMembershipId |                                                                                                          | 학생은 구독 중인 학교 페이지를 구독 취소할 수 있다.                   |
|                                                             |                                                                                                          | 학생은 구독 중인 학교 페이지별 소식을 볼 수 있다.                     |
| GET /users/:userId/feeds                                    | [link](https://github.com/sglee0730/news-feed/blob/master/src/routers/users/feeds/index.js)              | 학교별 소식은 최신순으로 노출해야 함.                                 |
| GET /users/:userId/feeds                                    | 위와 같음                                                                                                | 구독중인 모든 학교의 소식을 모아볼 수 있어야 함                       |
|                                                             |                                                                                                          | 학교 소식이 노출되는 뉴스피드는 최신순으로 소식을 노출                |
|                                                             | [link](https://github.com/sglee0730/news-feed/blob/master/src/services/news.js#L22) 에서 구현            | 학교 페이지를 구독하는 시점 이후 소식부터 뉴스피드를 받음             |
|                                                             | [link](https://github.com/sglee0730/news-feed/blob/master/src/services/news-membership.js#L49) 에서 구현 | 학교 페이지 구독을 취소해도 기존 뉴스피드에 나타난 소식은 유지해야 함 |
