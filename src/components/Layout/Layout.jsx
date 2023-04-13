import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <header className={css.layoutLine}>
        <ul className={css.layoutList}>
          <li className={css.layoutLi}>
            <NavLink className={css.layoutLink} to="/">
              Home Page
            </NavLink>
          </li>
          <li className={css.layoutLi}>
            <NavLink className={css.layoutLink} to="/movies">
              Movies
            </NavLink>
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
