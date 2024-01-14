const custom = require('@digitalroute/cz-conventional-changelog-for-jira/configurable');

module.exports = custom({
  jiraMode: false,
  jiraOptional: true,
  skipScope: false,
  defaultType: 'chore',
  defaultScope: 'monorepo',
  jiraPrefix: 'TID',
  jiraAppend: '',
  scopes: ['release', 'monorepo', 'data-table', 'common-ui'],
});
