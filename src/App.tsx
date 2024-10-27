import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from './slice/authSlice';
import { Provider } from 'react-redux';
import store from './store/createStore';
import AuthPage from './Components/AuthPage';
import Layout from './Components/Layout';
import Profile from './Components/Profile/Profile';
import RequestsPage from "./Components/RequestsPage/RequestsPage";
import 'react-toastify/dist/ReactToastify.css';
import {HelpRequestPage} from "./Components/HelpRequestPage/HelpRequestPage";

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthorized = useSelector(selectIsAuthorized);

  return isAuthorized ? element : <Navigate to="/login" replace />;
};

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<AuthPage />} />
          <Route path="/profile" element={<Profile />}/>
          <Route
            path="/request/:requestId"
            element={<ProtectedRoute element={<HelpRequestPage />} />}
          />
          <Route path="/" element={<ProtectedRoute element={<RequestsPage />} />} />
        </Route>
      </Routes>
      <ToastContainer position="bottom-right" theme="colored"/>
    </BrowserRouter>
  </Provider>
);

export default App;
