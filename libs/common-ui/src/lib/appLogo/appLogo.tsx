import { FC } from 'react';
import { Link, Text } from '@salt-ds/core';
import { Logo, LogoSeparator } from '@salt-ds/lab';

/* eslint-disable-next-line */
export interface AppLogoProps {}

const AppLogo: FC<AppLogoProps> = () => {
  return (
    <Link href='' data-testid={'app-logo'}>
      <Logo>
        LOGO
        <LogoSeparator />
        <Text>App title</Text>
      </Logo>
    </Link>
  );
};

export { AppLogo };
