import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
};

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps extends PropsWithChildren {
	reducers: ReducersList
	removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([reducerName, reducer]) => {
      const mounted = mountedReducers[reducerName as StateSchemaKey];
      if (mounted) return;
      store.reducerManager.add(reducerName as StateSchemaKey, reducer);
      dispatch({ type: `@@INIT ${reducerName.toUpperCase()} REDUCER` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName, reducer]) => {
          store.reducerManager.remove(reducerName as StateSchemaKey);
          dispatch({ type: `@@DESTROY ${reducerName.toUpperCase()} REDUCER` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
