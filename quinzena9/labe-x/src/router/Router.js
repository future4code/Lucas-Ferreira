import React, {useState,useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from '../pages/HomePage/HomePage'
import { Global } from '../styles/global';
import {ListTripsPage} from '../pages/ListTripsPage/ListTripsPage'
import {ApplicationFormPage} from '../pages/ApplicationFormPage/ApplicationFormPage'
import {LoginPage} from '../pages/LoginPage/LoginPage'
import { AdminHomePage } from '../pages/AdminHomePage/AdminHomePage';
import {CreateTripPage} from  '../pages/CreateTripPage/CreateTripPage'
import {TripDetailsPage} from '../pages/TripDetailsPage/TripDetailsPage'
import axios from 'axios'



function Router() {
  const [trips, setTrips] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
const getTrips = () =>{
  setLoading(true)
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips').then((response) =>{
    setLoading(false)
    setTrips(response.data.trips)
  }).catch((err) =>{
    setLoading(false)
    setError(err)
  })
}


useEffect(() => {
  getTrips()
 
}, []);

  return (
    
  <BrowserRouter>
    <Switch>
      <Route exact path={'/'}> 
       <Global/>
       <HomePage/>
      </Route>

      <Route exact path={'/trips/list'}>
      <Global/>
      <ListTripsPage trips={trips} isLoading={isLoading} error={error}/>
      </Route>

      <Route exact path={'/trips/application'}>
      <Global/>
      <ApplicationFormPage trips={trips}/>
      </Route>
       
      <Route exact path={'/login'}>
      <Global/>
      <LoginPage/>
      </Route>
      
      <Route exact path={'/admin/trips/list'}>
      <Global/>
      <AdminHomePage getTrips={getTrips} trips={trips} isLoading={isLoading} error={error}/>
      </Route>
      
      <Route exact path={'/admin/trips/create'}>
      <Global/>
      <CreateTripPage/>
      </Route>
      
      <Route exact path={'/trips/:id'}>
      <Global/>
      <TripDetailsPage trips={trips}/>
      </Route>
      
    </Switch>

  </BrowserRouter>
  );
}

export default Router;
