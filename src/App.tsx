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
import ProfilePage from './Components/ProfilePage/ProfilePage'
import Layout from './Components/Layout';
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
          <Route path="/profile" element={<ProfilePage />}/>
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

const ResponsePageWrapper: React.FC = () => {
  const { requestId } = useParams<{ requestId: string }>();

  const favourites = useSelector((state: RootState) => state.favourites.favourites);

  const isFavourite = requestId ? favourites.includes(requestId) : false;

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
      <HelpRequestDetails />
      <ContributionSidebar requestId={requestId} />
      <FavoriteButton requestId={requestId} isFavourite={isFavourite} />
          </Box>
  ) : (
    <p>Request ID not found</p>
  );
};