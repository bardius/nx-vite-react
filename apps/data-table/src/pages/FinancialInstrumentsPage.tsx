import { Text } from '@salt-ds/core';
import { FinancialInstrumentsData, useDummyData } from '../hooks/useDummyData';
import { FinancialInstrumentsTable } from '../components/financialInstrumentsTable/financialInstrumentsTable';

const FinancialInstrumentsPage = () => {
  //
  const data: FinancialInstrumentsData[] = useDummyData();

  return (
    <div data-testid={'home-page'}>
      <Text styleAs={'h2'}>Financial Instruments</Text>
      <FinancialInstrumentsTable data={data} />
    </div>
  );
};

export { FinancialInstrumentsPage };
