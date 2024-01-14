import { Outlet, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div id='app' data-testId='app'>
      <div>Header</div>
      <div id='sidebar'>
        <nav>
          <ul>
            <li>
              <NavLink
                to={`home`}
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={`error`}>Error</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export { App };
