import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ResponsepPage from './Components/ResponsePage';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from './slice/authSlice';
import { Provider } from 'react-redux';
import store from './store/createStore';
import AuthPage from './Components/AuthPage';

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
          <Route path="/login" element={<AuthPage />} />
          <Route path="/" element={<ProtectedRoute element={<ResponsepPage />} />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
);

export default App;
