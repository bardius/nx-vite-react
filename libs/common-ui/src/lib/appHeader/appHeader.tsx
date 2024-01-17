import { FC, HTMLAttributes, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, FlexItem, FlexLayout, StackLayout, useResponsiveProp } from '@salt-ds/core';
import { CloseIcon, MenuIcon } from '@salt-ds/icons';
import { Drawer, NavigationItem } from '@salt-ds/lab';

import styles from './appHeader.module.scss';
import { AppLogo } from '../appLogo/appLogo';

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
          <StackLayout className={styles['header-app-container']} direction='row'>
            <FlexItem className={styles['header-app-mobile-content']}>
              {!drawerOpen && (
                <Button
                  onClick={() => setDrawerOpen(true)}
                  className={styles['header-app-mobile-menu-btn']}
                  variant='secondary'>
                  <MenuIcon />
                </Button>
              )}

              {drawerOpen && (
                <Button
                  onClick={() => setDrawerOpen(false)}
                  className={styles['header-app-mobile-menu-btn']}
                  variant='secondary'>
                  <CloseIcon />
                </Button>
              )}
            </FlexItem>
            <FlexItem align='center'>
              <AppLogo />
            </FlexItem>
          </StackLayout>
          <Drawer
            className={styles['app-mobile-menu-drawer']}
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
        <FlexLayout className={styles['header-app-content']} justify='space-between' gap={3}>
          <FlexItem align='center'>
            <AppLogo />
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
