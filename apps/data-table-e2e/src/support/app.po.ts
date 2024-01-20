export const getHeading = () => cy.get('.saltText-h2');
export const getTable = () => cy.get('[data-testid="table"]');
export const getRows = () => cy.get('[data-testid="table"] tbody tr');
export const getColumns = () => cy.get('[data-testid="table"] tbody td');
export const getAssetClassSortBtn = () => cy.get('[data-testid="assetClass_action_sort_btn"]');
