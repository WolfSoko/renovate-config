module.exports = {
  branchPrefix: 'renovate-github/',
  dryRun: false,
  gitAuthor: 'Renovate Bot GitHub <bot@renovateapp.com>',
  platform: 'github',
  repositories: ['ng-easy/platform', 'ng-easy/renovate-config', 'ng-easy/npm-setup'],
  includeForks: false,
  dependencyDashboard: true,
  onboarding: false,
  autodiscover: false,
  trustLevel: 'high',
  allowPostUpgradeCommandTemplating: true,
  allowedPostUpgradeCommands: [
    '^npm ci --ignore-scripts$',
    '^npx --no-install ng update',
    '^npx --no-install nx migrate',
    '^rm -f migrations.json || true$',
    '^npx --no-install nx workspace-lint$',
    '^npx --no-install nx run-many --target=lint --all --parallel --fix --skip-nx-cache$',
  ],
};
