import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage/HomePage'
import { Global } from './styles/global';
import {ListTripsPage} from './pages/ListTripsPage/ListTripsPage'
import {ApplicationFormPage} from './pages/ApplicationFormPage/ApplicationFormPage'
import {LoginPage} from './pages/LoginPage/LoginPage'
import { AdminHomePage } from './pages/AdminHomePage/AdminHomePage';
import {CreateTripPage} from  './pages/CreateTripPage/CreateTripPage'
import {TripDetailsPage} from './pages/TripDetailsPage/TripDetailsPage'



function App() {
  return (
    
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'}> 
       <Global/>
       <HomePage/>
      </Route>

      <Route exact path={'/trips/list'}>
      <Global/>
      <ListTripsPage/>
      </Route>

      <Route exact path={'/trips/application'}>
      <Global/>
      <ApplicationFormPage/>
      </Route>
       
      <Route exact path={'/login'}>
      <Global/>
      <LoginPage/>
      </Route>
      
      <Route exact path={'/admin/trips/list'}>
      <Global/>
      <AdminHomePage/>
      </Route>
      
      <Route exact path={'/admin/trips/create'}>
      <Global/>
      <CreateTripPage/>
      </Route>
      
      <Route exact path={'/trips/:id'}>
      <Global/>
      <TripDetailsPage/>
      </Route>
      
    </Switch>
  
    
   

  </BrowserRouter>
  );
}

export default App;
