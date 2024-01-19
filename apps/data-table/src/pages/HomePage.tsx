import { Text } from '@salt-ds/core';
import { AssetClassData, useDummyData } from '../hooks/useDummyData';
import { AssetClassTable } from '../components/assetClassTable/assetClassTable';

const HomePage = () => {
  const data: AssetClassData[] = useDummyData();

  return (
    <div data-testid={'home-page'}>
      <Text styleAs={'h2'}>Asset Class Breakdown</Text>
      <AssetClassTable data={data} />
    </div>
  );
};

export { HomePage };
