import {
  FETCH_ARTICLES_STARTED,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
  FETCH_USER_ARTICLES,
  NEW_FEED,
  NEW_USER_ARTICLES,
} from '../actionTypes/fetchArticles';

const articles = {
  newFeed: [],
  newUserArticles: [],
};

/**
 * Fetch articles reducer
 * @param {*} [state=articles]
 * @param {*} { type, payload }
 * @returns {object} updated state
 */
const fetchReducer = (state = articles, { type, payload }) => {
  switch (type) {
    case FETCH_ARTICLES_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: false,
      };
    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case FETCH_USER_ARTICLES:
      return {
        ...state,
        loading: false,
        userArticles: payload,
      };
    case NEW_FEED:
      return {
        ...state,
        loading: false,
        hasMore: !!payload.length,
        newFeed: [...state.newFeed, ...payload],
      };
    case NEW_USER_ARTICLES:
      return {
        ...state,
        loading: false,
        hasMore: !!payload.length,
        newUserArticles: [...state.newUserArticles, ...payload],
      };
    default:
      return state;
  }
};

export default fetchReducer;
