import { Outlet } from 'react-router-dom';
import { AppTheme } from './AppTheme';
import { MyAppBar } from './../blocks/MyAppBar';
import { MyBottomNavigation } from './../blocks/MyBottomNavigation';

// MyAppBarとMyBottomNavigationを表示する
export const Layout = () => (
  <AppTheme>
    <Outlet />
  </AppTheme>
);
