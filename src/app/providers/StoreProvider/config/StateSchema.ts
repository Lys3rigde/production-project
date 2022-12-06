import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { AddCommentFormSchema } from 'features/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSaveSchema } from 'features/ScrollSave';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/editableProfileCard';

export interface StateSchema {
	user: UserSchema
	scrollSave: ScrollSaveSchema
		[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

	// async reducers
	login?: LoginSchema
	profile?: ProfileSchema
	articleDetails?: ArticleDetailsSchema
	addCommentForm?: AddCommentFormSchema
	articlesPage?: ArticlesPageSchema
	articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager:ReducerManager
}

export interface ThunkExtraArgs {
	api: AxiosInstance
}

export interface ThunkConfig<T> {
	rejectValue: T
	extra: ThunkExtraArgs
	state: StateSchema
}
