import { combineReducers } from '@reduxjs/toolkit';
import {
  articleDetailsPageRecommendationReducer,
} from './articleDetailsPageRecommendationsSlice';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationReducer,
  comment: articleDetailsCommentsReducer,
});
