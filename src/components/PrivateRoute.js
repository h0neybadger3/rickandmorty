import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import favContext from '../contexts/context';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useContext(favContext);
  return isLoggedIn ? children : <Navigate to="/" />;
}
