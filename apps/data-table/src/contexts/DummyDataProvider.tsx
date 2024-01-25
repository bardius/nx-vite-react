import { FC, PropsWithChildren, useReducer } from 'react';
import { DummyDataContext, DummyDataDispatchContext } from './DummyDataContext';
import { DummyDataReducer } from './DummyDataReducer';
import { defaultDataState } from './defautDataState';

export interface DummyDataProviderProps {}

const DummyDataProvider: FC<PropsWithChildren<DummyDataProviderProps>> = ({ children }) => {
  // Get initial state values
  const [state, dispatch] = useReducer(DummyDataReducer, defaultDataState);

  return (
    <DummyDataContext.Provider value={state}>
      <DummyDataDispatchContext.Provider value={dispatch}>
        {children}
      </DummyDataDispatchContext.Provider>
    </DummyDataContext.Provider>
  );
};

export { DummyDataProvider };
