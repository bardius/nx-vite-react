import { FC, HTMLAttributes, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  FlexItem,
  FlexLayout,
  Link,
  StackLayout,
  useResponsiveProp,
  Text,
} from '@salt-ds/core';
import { CloseIcon, MenuIcon } from '@salt-ds/icons';
import { Drawer, Logo, LogoSeparator, NavigationItem } from '@salt-ds/lab';

import styles from './appHeader.module.scss';

export interface NavigationItem {
  id: string;
  to: string;
  label: string;
  reloadDocument: boolean;
}

export interface AppHeaderProps extends HTMLAttributes<HTMLElement> {
  items?: NavigationItem[];
}

const AppHeader: FC<AppHeaderProps> = ({ items }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useResponsiveProp({ xs: true, sm: false }, false);

  return (
    <header className={styles['header-app']} data-testid={'header-app'}>
      {isMobile ? (
        // Mobile Header
        <>
          <StackLayout
            direction='row'
            style={{
              width: '100%',
              backgroundColor: 'var(--salt-container-primary-background)',
              zIndex: 'calc(var(--salt-zIndex-drawer) + 1)',
              position: 'fixed',
              inset: '0 0 auto 0',
              paddingRight: '1em',
              borderBottom:
                'var(--salt-size-border) var(--salt-container-borderStyle) var(--salt-container-secondary-borderColor)',
            }}>
            <FlexItem
              style={{
                justifyContent: 'center',
                display: 'flex',
                height: 'calc(var(--salt-size-base) + var(--salt-spacing-200))',
                width: 'calc(var(--salt-size-base) + var(--salt-spacing-200))',
                borderRight:
                  'var(--salt-size-border) var(--salt-container-borderStyle) var(--salt-container-secondary-borderColor)',
              }}>
              {!drawerOpen && (
                <Button
                  onClick={() => setDrawerOpen(true)}
                  style={{
                    alignSelf: 'center',
                  }}
                  variant='secondary'>
                  <MenuIcon />
                </Button>
              )}

              {drawerOpen && (
                <Button
                  onClick={() => setDrawerOpen(false)}
                  style={{
                    alignSelf: 'center',
                  }}
                  variant='secondary'>
                  <CloseIcon />
                </Button>
              )}
            </FlexItem>
            <FlexItem align='center'>
              <Link href=''>
                <Logo>
                  LOGO
                  <LogoSeparator />
                  <Text>App title</Text>
                </Logo>
              </Link>
            </FlexItem>
          </StackLayout>
          <Drawer
            style={{
              paddingTop: 'calc(var(--salt-size-base) + var(--salt-spacing-200))',
              paddingLeft: '0',
            }}
            open={drawerOpen}
            onOpenChange={() => {
              if (drawerOpen) {
                setDrawerOpen(false);
              }
            }}>
            <nav>
              <ul className={styles['vertical']}>
                {items?.map(item => (
                  <li key={item.id}>
                    <div className={styles['saltNavigationItem']}>
                      <NavLink
                        to={item.to}
                        reloadDocument={item.reloadDocument}
                        className={({ isActive }) =>
                          `${styles['saltText']} ${styles['saltText-primary']} ${
                            styles['saltLink']
                          } ${styles['saltNavigationItem-wrapper']} ${
                            styles['saltNavigationItem-rootItem']
                          } ${styles['saltNavigationItem-vertical']} ${
                            isActive ? styles['saltNavigationItem-active'] : ''
                          }`
                        }>
                        <span className={styles['saltNavigationItem-label']}>{item.label}</span>
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </Drawer>
        </>
      ) : (
        // Desktop Header
        <FlexLayout
          style={{
            height: 'calc(var(--salt-size-base) + var(--salt-spacing-200))',
            paddingLeft: '1em',
            paddingRight: '1em',
            backgroundColor: 'var(--salt-container-primary-background)',
            position: 'fixed',
            inset: '0 0 auto 0',
            borderBottom:
              'var(--salt-size-border) var(--salt-container-borderStyle) var(--salt-container-secondary-borderColor)',
          }}
          justify='space-between'
          gap={3}>
          <FlexItem align='center'>
            <Link href=''>
              <Logo>
                LOGO
                <LogoSeparator />
                <Text>App title</Text>
              </Logo>
            </Link>
          </FlexItem>
          {items && (
            <nav data-testid={'desktop-navigation'}>
              <ul className={styles['horizontal']}>
                {items.map(item => (
                  <li key={item.id}>
                    <div className={styles['saltNavigationItem']}>
                      <NavLink
                        to={item.to}
                        reloadDocument={item.reloadDocument}
                        className={({ isActive }) =>
                          `${styles['saltText']} ${styles['saltText-primary']} ${
                            styles['saltLink']
                          } ${styles['saltNavigationItem-wrapper']} ${
                            styles['saltNavigationItem-rootItem']
                          } ${styles['saltNavigationItem-horizontal']} ${
                            isActive ? styles['saltNavigationItem-active'] : ''
                          }`
                        }>
                        <span className={styles['saltNavigationItem-label']}>{item.label}</span>
                      </NavLink>
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div></div>
        </FlexLayout>
      )}
    </header>
  );
};

export { AppHeader };
