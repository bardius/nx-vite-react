import { Text } from '@salt-ds/core';
import { FinancialInstrumentsData } from '../hooks/useDummyData';
import { FinancialInstrumentsTable } from '../components/financialInstrumentsTable/financialInstrumentsTable';
import { useDummyDataDispatch, useDummyDataState } from '../contexts/hooks';
import { useCallback } from 'react';
import { action } from 'typesafe-actions';
import { DummyDataContextActionTypes } from '../contexts/DummyDataReducer';

const FinancialInstrumentsPage = () => {
  const data: FinancialInstrumentsData[] = useDummyDataState().dummyData ?? [];
  const dataDispatch = useDummyDataDispatch();

  const onGetData = useCallback(() => {
    dataDispatch(action(DummyDataContextActionTypes.GetData, undefined));
  }, [dataDispatch]);

  return (
    <div data-testid={'home-page'}>
      <Text styleAs={'h2'} onClick={onGetData}>
        Financial Instruments
      </Text>
      <FinancialInstrumentsTable data={data} />
    </div>
  );
};

export { FinancialInstrumentsPage };
