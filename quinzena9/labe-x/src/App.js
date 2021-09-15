import React, {useState,useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage/HomePage'
import { Global } from './styles/global';
import {ListTripsPage} from './pages/ListTripsPage/ListTripsPage'
import {ApplicationFormPage} from './pages/ApplicationFormPage/ApplicationFormPage'
import {LoginPage} from './pages/LoginPage/LoginPage'
import { AdminHomePage } from './pages/AdminHomePage/AdminHomePage';
import {CreateTripPage} from  './pages/CreateTripPage/CreateTripPage'
import {TripDetailsPage} from './pages/TripDetailsPage/TripDetailsPage'
import axios from 'axios'




function App() {
  const [trips, setTrips] = useState([])
  const [idTrips, setIdTrips] = useState('')
  
const getTrips = () =>{
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-veras-johnson/trips').then((response) =>{
    setTrips(response.data.trips)
  }).catch((err) =>{
  })
}

const pegaId = (id) =>{
  setIdTrips(id)
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
      <ListTripsPage trips={trips}/>
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
      <AdminHomePage getTrips={getTrips} trips={trips} pegaId={pegaId}/>
      </Route>
      
      <Route exact path={'/admin/trips/create'}>
      <Global/>
      <CreateTripPage/>
      </Route>
      
      <Route exact path={'/trips/:id'}>
      <Global/>
      <TripDetailsPage idTrips={idTrips}/>
      </Route>
      
    </Switch>
  
    
   

  </BrowserRouter>
  );
}

export default App;
