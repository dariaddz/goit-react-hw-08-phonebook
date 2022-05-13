import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {Layout} from './Layout';
import PhonebookView from "../views/PhonebookView";
import WellcomeView from '../views/WellcomeView';
import SignUpView from '../views/SignUpView';
import LogInView from 'views/LogInView';
import authOperations from '../redux/auth/auth-operations';
// import NotFoundView from 'views/NotFoundView'

export const App=()=> {
 
  const dispatch = useDispatch()

 useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
 }, [dispatch]);
  
    return (
      <>
                <Routes>
          <Route exact path="/" element={<Layout />}>
            
             <Route index element={<WellcomeView />} />
          <Route path="/contacts" element={  <PhonebookView />} />
          <Route path="/signup" element={ <SignUpView />} />
            <Route path="/login" element={<LogInView />} />
            {/* <Route path="*" element={<NotFoundView />} /> */}
           <Route path="*" element={<Navigate to="/" />} /> 
                </Route>
       
        </Routes>
                           
      </>
    )
}


