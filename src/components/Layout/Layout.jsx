import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  &.active {
    color: steelblue;
  }
`;

export default function Layout() {
  return (
    <div className={css.layoutDiv}>
      <header className={css.layoutLine}>
        <ul className={css.layoutList}>
          <li className={css.layoutLi}>
            <StyledLink className={css.layoutLink} to="/">
              Home Page
            </StyledLink>
          </li>
          <li className={css.layoutLi}>
            <StyledLink className={css.layoutLink} to="/movies">
              Movies
            </StyledLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
