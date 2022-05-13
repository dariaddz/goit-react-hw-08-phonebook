import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import {Layout} from './Layout';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from 'redux/auth/auth-selector';
import Loader from 'react-spinners/BeatLoader';

const WellcomeView = lazy(() => import('../views/WellcomeView'));
const PhonebookView = lazy(() => import('../views/PhonebookView'));
const SignUpView = lazy(() => import('../views/SignUpView'));
const LogInView = lazy(() => import('../views/LogInView'))

export const App=()=> {
 
  const dispatch = useDispatch()

 useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
 }, [dispatch]);
  
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser)
  
  
    return (
      <>
        <Suspense fallback="loading">
          <Routes>
            <Route exact path="/" element={<Layout />}>
              <Route index element={<PublicRoute ><WellcomeView /></PublicRoute>} />
            {isFetchingCurrentUser ? <Loader/> : 
            <>
                <Route path="/contacts" element={ <PrivateRoute redirectTo="/login"><PhonebookView /></PrivateRoute>} />
                <Route path="/signup" element={<PublicRoute redirectTo="/contacts" restricted><SignUpView /></PublicRoute> } />
                <Route path="/login" element={<PublicRoute redirectTo="/contacts" restricted><LogInView /></PublicRoute>} />
                <Route path="*" element={<Navigate to="/" />} /> 
            </>}
            </Route>
          </Routes>
        </Suspense>        
      </>
    )
}


