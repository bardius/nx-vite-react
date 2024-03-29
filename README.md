## [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=coverage)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) 

## ![Nx](https://img.shields.io/badge/Nx-143055.svg?style=for-the-badge&logo=Nx&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white) ![ReactJs](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) ![Typescript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white) ![Jest](https://img.shields.io/badge/Jest-C21325.svg?style=for-the-badge&logo=Jest&logoColor=white) ![Stprybook](https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=Storybook&logoColor=white) ![Cypress](https://img.shields.io/badge/Cypress-69D3A7.svg?style=for-the-badge&logo=Cypress&logoColor=white)

## ![SonarCloud](https://img.shields.io/badge/SonarCloud-F3702A.svg?style=for-the-badge&logo=SonarCloud&logoColor=white) ![Snyk](https://img.shields.io/badge/Snyk-4C4A73.svg?style=for-the-badge&logo=Snyk&logoColor=white) ![Dependabot](https://img.shields.io/badge/dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-FE5196.svg?style=for-the-badge&logo=Conventional-Commits&logoColor=white)

# Nx monorepo for Vite & ReactJs

This is of a monorepo that contains library and application examples based on
[Nx][nx_link], [Typescript][ts_link], [ReactJs][react_link] and [Vite][vite_link].

<img alt="Data Table" width="512" src="https://raw.githubusercontent.com/bardius/nx-vite-react/main/screenshots/intro.png">

## Required NodeJs version

Ideally, you will have [nvm][nvm_link]. In that case you will get the required version automatically if you execute:

```bash
nvm use
```

Else wise please use [NodeJs][node_link] 20.11.0.

## Installing the tooling

Setting up the project is pretty straight forward. You can execute:

```bash
npm run setup
```

This will install all dependencies and allow you to build the application.

## Start the Data Table sample app

Starting the app locally can be done with a single command:

```bash
npm run start:data-table
```

or Nx command directly:

```bash
nx serve data-table
```

Open your browser and navigate to http://localhost:4200/.

## Start Storybook

Starting the app locally can be done with a single command:

```bash
npm run storybook
```

or Nx command directly:

```bash
nx run common-ui:storybook
```

Open your browser and navigate to http://localhost:4400/.

## Execute Unit tests

A single command will execute unit tests for all packages and report coverage:

```bash
npm run test
```

or Nx command directly:

```bash
nx run-many -t test --verbose
```

## Execute E2E tests

A single command will execute Cypress E2E tests for data-table package:

```bash
npm run e2e
```

or to run in headed mode:

```bash
npm run e2e:headed
```

or Nx command directly:

```bash
nx run data-table-e2e:e2e
```

## Repo structure

Monorepo source code is broken down into libraries (under libs folder) and applications (under apps folder).
Each package has its source code under src folder.

There is a library package for common presentational components, called "common-ui" ([libs/common-ui][common_ui_link]).

There is a package for the Data Table application, called "data-table" ([apps/data-table][data_table_link]).

### Data Table application

This simple react application is using [React router][react_router_link] to serve a home page and handle errors or 404 urls.
[Salt Design System][salt_ds_link] by JP. Morgan is being used to provide a consistent layout and branding.
[Ramda][ramda_link] is used as lightweight utility library.

The home page contains a data table with sorting feature, preloaded sorting for all columns, and dummy data ([FinancialInstrumentsTable][table_component_link]).

The data table is reusing the [presentational components][pc_link] from the "common-ui" package, [extends/overrides][renderers] for default row/cell renderers
via configuration and uses headless component for [multiple sorting feature][sorting_link] with preloaded sortBy values.

- [Screenshot][app_ss_link]
- [Source code graph][app_graph_link]

#### Sorting feature

Sorting can be applied in all columns with default or [custom sort comparator functions][comparator_link] per column.
Based on configuration it can be turned on/off, have custom comparator and pre-populate a sort by state.

Multiple sorting rules can apply simultaneously with a priority order.

#### Custom renderers

Table component allows [extends/overrides][renderers] for default row & cell renderers that are provided by the "common-ui" package.

### Common UI library

This is a collection of presentational components required to compose a table within a simple page layout.

[Salt Design System][salt_ds_link] by JP. Morgan is being used to provide a consistent layout and branding.
Additional styling has been done with [Sass][sass_link].

Storybook has been configured and a story for Table component has been created as sample.

- [Storybook Screenshot][storybook_ss_link]
- [Source code graph][common_ui_graph_link]

## DX tooling

Few tools have been configured and being used to improve the development experience in this project:

- [SonarQube][sonar_link], code quality & SAST, additionally digests the reports from unit test and linting tools
- [Snyk][snyk_link] vulnerability scans, [report][snyk_report_link]
- [Jest][jest_link] & [RTL][rtl_link] to execute unit tests
- [Husky][husky_link], pre-commit hooks in place
- [Commitizen][cz_link] & [Commit Lint][commit_lint_link] for [conventional commits][conventional_commits_link], use "npm run commit" to get a cli wizard
- [Github Actions][ga_link], actions run on pull requests to verify quality and stability
- [Dependabot][dependabot_link] to get notified for dependency version updates
- [Jscpd][jspd_link] to check on code duplications
- [StyleLint][stylelint_link] sor Sass linting
- [EsLint][eslint_link] for JS & TS linting
- [Prettier][prettier_link] for formatting consistency
- [Lint Staged][lint_staged_link], run linters on staged files
- [Storybook][storybook_link], also a couple of samples of interactive tests
- [Cypress][cypress_link] with a sample of E2E tests
- [Browserslist][browserlist_link] to define build target compatibility
- [WDYR][wdyr_link] (why did you render), to debug excessive re-renders
- [Typescript][ts_link] for type safe coding
- [Madge][madge_link] to check for circular dependencies and generate code graphs

<!----variables---->

[nvm_link]: https://github.com/nvm-sh/nvm
[react_router_link]: https://reactrouter.com/en/main
[salt_ds_link]: https://www.saltdesignsystem.com/salt/index
[app_ss_link]: https://github.com/bardius/nx-vite-react/tree/main/screenshots/data-table-app-home.png
[storybook_ss_link]: https://github.com/bardius/nx-vite-react/tree/main/screenshots/common-ui-storybook.png
[app_graph_link]: https://github.com/bardius/nx-vite-react/tree/main/screenshots/data-table-app-graph.svg
[common_ui_graph_link]: https://github.com/bardius/nx-vite-react/tree/main/screenshots/common-ui-graph.svg
[common_ui_link]: https://github.com/bardius/nx-vite-react/tree/main/libs/common-ui
[data_table_link]: https://github.com/bardius/nx-vite-react/tree/main/apps/data-table
[sass_link]: https://sass-lang.com/
[nx_link]: https://nx.dev/
[ts_link]: https://www.typescriptlang.org/
[react_link]: https://react.dev/
[vite_link]: https://vitejs.dev/
[node_link]: https://nodejs.org/en
[pc_link]: https://github.com/bardius/nx-vite-react/tree/main/libs/common-ui/src/lib
[renderers]: https://github.com/bardius/nx-vite-react/tree/main/apps/data-table/src/components/table
[sorting_link]: https://github.com/bardius/nx-vite-react/tree/main/apps/data-table/src/hooks/useDataSorting.ts
[sonar_link]: https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react
[comparator_link]: https://github.com/bardius/nx-vite-react/tree/main/apps/data-table/src/components/table/comparators
[ramda_link]: https://ramdajs.com/
[table_component_link]: https://github.com/bardius/nx-vite-react/tree/main/apps/data-table/components/financialInstrumentsTable
[wdyr_link]: https://www.npmjs.com/package/@welldone-software/why-did-you-render
[browserlist_link]: https://browsersl.ist/
[cypress_link]: https://www.cypress.io/
[storybook_link]: https://storybook.js.org/
[prettier_link]: https://prettier.io/
[eslint_link]: https://eslint.org/
[stylelint_link]: https://stylelint.io/
[jspd_link]: https://www.npmjs.com/package/jscpd
[dependabot_link]: https://github.com/dependabot
[lint_staged_link]: https://www.npmjs.com/package/lint-staged
[ga_link]: https://docs.github.com/en/actions
[cz_link]: https://www.npmjs.com/package/commitizen
[husky_link]: https://typicode.github.io/husky/
[jest_link]: https://jestjs.io/
[rtl_link]: https://testing-library.com/docs/react-testing-library/intro/
[madge_link]: https://www.npmjs.com/package/madge
[commit_lint_link]: https://commitlint.js.org
[conventional_commits_link]: https://www.conventionalcommits.org/en/v1.0.0/
[snyk_link]: https://snyk.io/
[snyk_report_link]: https://app.snyk.io/org/bardius/projects?groupBy=targets&searchQuery=&sortBy=highest+severity&filters[Show]=&filters[Integrations]=&filters[CollectionIds]=&before&after
