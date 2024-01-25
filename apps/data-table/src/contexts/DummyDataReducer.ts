import { PayloadAction } from 'typesafe-actions';
import { dummyData, DummyDataState } from './defautDataState';
import { clone } from 'ramda';

export enum DummyDataContextActionTypes {
  GetData = '@@DummyData/GET_DATA',
}

const DummyDataReducer = (
  state: DummyDataState,
  action: PayloadAction<DummyDataContextActionTypes, any>,
): DummyDataState => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case DummyDataContextActionTypes.GetData:
      return {
        ...state,
        dummyData: clone(dummyData),
      };

    default: {
      return state;
    }
  }
};

export { DummyDataReducer };
