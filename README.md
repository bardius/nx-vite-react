## [![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=bardius_nx-vite-react&metric=coverage)](https://sonarcloud.io/summary/new_code?id=bardius_nx-vite-react)

# Nx monorepo for Vite & ReactJs

This is of a monorepo that contains library and application examples based on
[Nx][nx_link], [Typescript][ts_link], [ReactJs][react_link] and [Vite][vite_link].

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

## Repo structure

Monorepo source code is broken down into libraries (under libs folder) and applications (under apps folder).
Each package has its source code under src folder.

There is a library package for common presentational components "common-ui" ([libs/common-ui][common_ui_link]).

There is a package for the Data Table application "data-table" ([apps/data-table][data_table_link]).

### Data Table application

This simple react application is using [React router][react_router_link] to serve a home page and handle and 404 urls.
[Salt Design System][salt_ds_link] by JP. Morgan is being used to provide a consistent layout and branding.
[Ramda][ramda_link] is used as lightweight utility library.

The home page contains a data table with sorting feature and dummy data.

The data table is reusing the [presentational components][pc_link] from the "common-ui" package, [extends/overrides][renderers] for default row/cell renderers
via configuration and uses headless component for [multiple sorting feature][sorting_link] with preloaded sortBy values.

[Screenshot][app_ss_link]

#### Sorting feature

Sorting can be applied in all columns with default or [custom sort comparator functions][comparator_link] pr columns.
Based on configuration it can be turned on/off and pre-populate a sort by state.

Multiple sorting rules can apply simultaneously.

#### Custom renderers

Table component allows [extends/overrides][renderers] for default row & cell renderers that are provided by the "common-ui" package.

### Common UI library

This is a collection of presentational components required to compose a table within a simple page layout.

[Salt Design System][salt_ds_link] by JP. Morgan is being used to provide a consistent layout and branding.
Additional styling has been done with [Sass][sass_link].

Storybook has been configured and a story for Table component has been created as sample.

[Storybook Screenshot][storybook_ss_link]

## DX tooling

Few tools have been configured and being used to improve the development experience in this project:

- [SonarQube][sonar_link], digests the reports from unit test and linting tools
- Jest to execute unit tests
- Husky, pre-commit hooks in place
- Commitizen & Commit Lint for conventional commits, use "npm run commit" to get a Cli wizard
- Github Actions, actions run on pul requests to verify quality and stability
- Dependabot to get notified for dependency version updates
- Jscpd to check on code duplications
- StyleLint sor Sass linting
- EsLint for JS TS linting
- Prettier for formatting consistency
- Lint Staged
- Storybook, also a couple of samples of interactive tests
- Cypress
- Browserslist to define build target compatibility

<!----variables---->

[nvm_link]: https://github.com/nvm-sh/nvm
[react_router_link]: https://reactrouter.com/en/main
[salt_ds_link]: https://www.saltdesignsystem.com/salt/index
[app_ss_link]: https://github.com/bardius/nx-vite-react/tree/main/screenshots/data-table-app-home.png
[storybook_ss_link]: https://github.com/bardius/nx-vite-react/tree/main/screenshots/common-ui-storybook.png
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
