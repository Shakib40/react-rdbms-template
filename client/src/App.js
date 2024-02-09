import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

const ProtectedRoute = ({ element: Component, allowedRoles, ...rest }) => {
  const USER_DATA = JSON.parse(sessionStorage.getItem('user'));
  if (
    USER_DATA?.role &&
    USER_DATA?.role?.some((role) => allowedRoles?.includes(role))
  ) {
    return (
      <div>
        <Component {...rest} />
      </div>
    );
  } else {
    return <Navigate to="/" />;
  }
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute
                element={Dashboard}
                allowedRoles={['USERS', 'ADMIN']}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;