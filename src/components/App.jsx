import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import {Layout} from './Layout';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const WellcomeView = lazy(() => import('../views/WellcomeView'));
const PhonebookView = lazy(() => import('../views/PhonebookView'));
const SignUpView = lazy(() => import('../views/SignUpView'));
const LogInView = lazy(() => import('../views/LogInView'))

export const App=()=> {
 
  const dispatch = useDispatch()

 useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
 }, [dispatch]);
  
    return (
      <>
        <Suspense fallback="loading">
          <Routes>
            <Route exact path="/" element={<Layout />}>
              <Route index element={<PublicRoute ><WellcomeView /></PublicRoute>} />
                <Route path="/contacts" element={ <PrivateRoute redirectTo="/login"><PhonebookView /></PrivateRoute>} />
                <Route path="/signup" element={<PublicRoute redirectTo="/contacts" restricted><SignUpView /></PublicRoute> } />
                <Route path="/login" element={<PublicRoute redirectTo="/contacts" restricted><LogInView /></PublicRoute>} />
                <Route path="*" element={<Navigate to="/" />} /> 
            </Route>
          </Routes>
        </Suspense>        
      </>
    )
}


