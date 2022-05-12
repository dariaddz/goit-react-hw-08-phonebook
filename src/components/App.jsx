import { Route, Routes, Navigate } from 'react-router-dom';
import {Layout} from './Layout';
import PhonebookView from "../views/PhonebookView";
import WellcomeView from '../views/WellcomeView';
import SignUpView from '../views/SignUpView';
import LogInView from 'views/LogInView';
// import NotFoundView from 'views/NotFoundView'

export const App=()=> {
 
   
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


