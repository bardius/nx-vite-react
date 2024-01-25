import { useContext } from 'react';
import { DummyDataContext, DummyDataDispatchContext } from './DummyDataContext';

const useDummyDataState = () => {
  const context = useContext(DummyDataContext);

  if (context === undefined) {
    throw new Error('useDummyDataState must be used within DummyDataProvider');
  }

  return context;
};

const useDummyDataDispatch = () => {
  const dispatch = useContext(DummyDataDispatchContext);

  if (dispatch === undefined) {
    throw new Error('useDummyDataDispatch must be used within DummyDataProvider');
  }

  return dispatch;
};

export { useDummyDataState, useDummyDataDispatch };
