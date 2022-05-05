import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Container';
import AppBar from './AppBar';
import Scroll from './Scroll';
import { styles } from './App.styled';

import PrivateRoute from './PrivateRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const CharacterDetailsView = lazy(() =>
  import('../views/CharacterDetailsView')
);
const SearchPage = lazy(() => import('../views/SearchPage'));
const FavoriteView = lazy(() => import('../views/FavoriteView'));
const AllCharactersView = lazy(() => import('../views/AllCharactersView'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<ClipLoader size={150} css={styles} />}>
        <Routes>
          <Route path="/" exact element={<HomeView />}></Route>

          <Route
            path="/characters"
            element={
              <PrivateRoute>
                <AllCharactersView />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="character/:characterId/*"
            element={
              <PrivateRoute>
                <CharacterDetailsView />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/findCharacter"
            element={
              <PrivateRoute>
                <SearchPage />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/favorite"
            element={
              <PrivateRoute>
                <FavoriteView />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </Suspense>
      <ToastContainer />
      <Scroll />
    </Container>
  );
}
