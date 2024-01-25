import { Dispatch, createContext } from 'react';
import { PayloadAction } from 'typesafe-actions';
import { defaultDataState, DummyDataState } from './defautDataState';
import { DummyDataContextActionTypes } from './DummyDataReducer';

const DummyDataContext = createContext<Partial<DummyDataState>>(defaultDataState);
const DummyDataDispatchContext = createContext<
  Dispatch<PayloadAction<DummyDataContextActionTypes, any>> | undefined
>(undefined);

export { DummyDataContext, DummyDataDispatchContext };
