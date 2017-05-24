import React from 'react';
import theme from './theme.css';

const Header = () => (
  <header className={theme.header}>
    <div className={theme.headerInner}>
      <h1 className={theme.title}>Holly</h1>
    </div>
  </header>
);

export default Header;
