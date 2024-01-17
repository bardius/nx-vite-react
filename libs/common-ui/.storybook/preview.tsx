import type { ArgTypes, Parameters } from '@storybook/react';
import type { GlobalTypes } from '@storybook/csf';
import '@salt-ds/theme/index.css';
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/300-italic.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/400-italic.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/500-italic.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/600-italic.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/700-italic.css';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/800-italic.css';
import './styles.css';

import { ComponentProps } from 'react';
import { withTheme } from './decorators/withTheme';
import { SaltProvider } from '@salt-ds/core';
import { DocsContainer } from '@storybook/addon-docs';

const densities = ['touch', 'low', 'medium', 'high'];
const DEFAULT_DENSITY = 'medium';
const DEFAULT_MODE = 'light';

export const globalTypes: GlobalTypes = {
  mode: {
    name: 'Mode',
    description: 'Set the theme mode',
    defaultValue: DEFAULT_MODE,
    toolbar: {
      title: 'Mode',
      // show the mode name once selected in the toolbar
      dynamicTitle: true,
      items: [
        { value: 'light', right: '⚪', title: 'Light' },
        { value: 'dark', right: '⚫', title: 'Dark' },
        {
          value: 'side-by-side',
          icon: 'sidebaralt',
          title: 'Side by side',
        },
        { value: 'stacked', icon: 'bottombar', title: 'Stacked' },
      ],
    },
  },
  density: {
    name: 'Density',
    description: 'Global density for components',
    defaultValue: DEFAULT_DENSITY,
    toolbar: {
      // Storybook built in icons here - https://www.chromatic.com/component?appId=5a375b97f4b14f0020b0cda3&name=Basics%2FIcon&buildNumber=20654
      icon: 'graphbar',
      // array of plain string values or MenuItem shape (see below)
      items: densities,
    },
  },
  styleInjection: {
    name: 'Component Style Injection',
    description: 'Turn on/off component style injection',
    defaultValue: 'enable',
    toolbar: {
      items: ['disable', 'enable'],
      title: 'Component Style Injection',
    },
  },
};

export const argTypes: ArgTypes = {
  ref: { control: { type: null } },
};

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  // Show props description in Controls panel
  controls: { expanded: true, sort: 'requiredFirst' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Documentation',
        ['Core', 'Icons', 'Lab'],
        'Theme',
        ['About the Salt Theme', 'Foundations', 'Palettes', ['*', 'Opacities'], 'Characteristics'],
        'Core',
        'Icons',
        'Lab',
      ],
    },
  },
  docs: {
    container: ({ children, context, ...rest }: ComponentProps<typeof DocsContainer>) => (
      <DocsContainer context={context} {...rest}>
        <SaltProvider
          /* @ts-expect-error Waiting for https://github.com/storybookjs/storybook/issues/12982 */
          mode={context.store.globals.globals?.mode}
          enableStyleInjection={
            /* @ts-expect-error Waiting for https://github.com/storybookjs/storybook/issues/12982 */
            context.store.globals.globals?.styleInjection === 'enable'
          }>
          {children}
        </SaltProvider>
      </DocsContainer>
    ),
  },
  // disables snapshotting on a global level
  chromatic: { disableSnapshot: true },
};

// Bottom most is outermost
export const decorators = [withTheme];
