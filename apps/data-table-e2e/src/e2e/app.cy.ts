import { getAssetClassSortBtn, getColumns, getHeading, getRows, getTable } from '../support/app.po';

describe('Financial Instrument Table Page', () => {
  beforeEach(() => cy.visit('/'));

  it('should display page title', () => {
    getHeading()
      .contains(/Financial Instruments/)
      .should('exist');
  });

  it('should display financial instruments table', () => {
    getTable().should('exist');
  });

  it('should display all rows', () => {
    getRows().should('have.length', 25);
  });

  it('should sort data by asset class', () => {
    getColumns().first().invoke('data', 'testid').should('eq', 'DELTA2_cell_assetClass');
    getAssetClassSortBtn().click();
    getColumns().first().invoke('data', 'testid').should('eq', 'ALPHA_cell_assetClass');
    getAssetClassSortBtn().click();
    getColumns().first().invoke('data', 'testid').should('eq', 'BETA_cell_assetClass');
  });
});
