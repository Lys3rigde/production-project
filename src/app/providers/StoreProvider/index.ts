import { StoreProvider } from './ui/StoreProvider';
import type {
  ReduxStoreWithManager, StateSchema, ThunkConfig,
} from './config/StateSchema';
import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkConfig,
};
