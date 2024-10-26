import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from './slice/authSlice';
import { Provider } from 'react-redux';
import store from './store/createStore';
import AuthPage from './Components/AuthPage';
import ResponsePage from './Components/ResponsePage';
import HelpRequestDetails from './Components/HelpRequestDetails';
import ContributionSidebar from './Components/ContributionSidebar';
import FavoriteButton from './Components/FavoriteButton';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material';

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
        <Route
          path="/request/:requestId"
          element={<ProtectedRoute element={<ResponsePageWrapper />} />}
        />
        <Route
          path="/"
          element={<ProtectedRoute element={<Navigate to="/request/request-id-1" replace />} />}
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </Provider>
);

export default App;

const ResponsePageWrapper: React.FC = () => {
  const { requestId } = useParams<{ requestId: string }>();

  return requestId ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 2,
        padding: 2,
      }}
    >
      <HelpRequestDetails id={requestId} />
      <ContributionSidebar requestId={requestId} />
      <FavoriteButton isFavourite={false} />
    </Box>
  ) : (
    <p>Request ID not found</p>
  );
};