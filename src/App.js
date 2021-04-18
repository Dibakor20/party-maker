import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from './Pages/Home/Dashboard/Dashboard';
import Booking from './Component/Booking/Booking';
import { createContext, useEffect, useState } from 'react';
import Login from './Pages/Login/Login';
import AddService from './Component/Admin/AddService';
import ManageService from './Component/Admin/ManageService';
import OrderList from './Component/Admin/OrderList';
import BookingList from './Component/Booking/BookingList';
import AddReview from './Component/Review/AddReview';
import AddAdmin from './Component/Admin/AddAdmin';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [isAdmin, setIsAdmin] = useState(false);



  const [user, setUser] = useState({
    userName: '',
    email: '',
    desc: '',
    task: '',
    date: ''
})

  return (
    <UserContext.Provider value={[user, setUser,isAdmin, setIsAdmin]}> 
     <Router>
       <Switch>
         <Route path="/home">
           <Home/>
         </Route>
         {/* <PrivateRoute path = "/dashboard">
           <Dashboard/>
         </PrivateRoute> */}
         <PrivateRoute path="/booking/:title">
           <Booking/>
         </PrivateRoute>
         <Route path="/login">
           <Login/>
         </Route>
         <PrivateRoute path = "/addService">
           <AddService/>
         </PrivateRoute>
         <Route path="/manageService">
           <ManageService/>
         </Route>
         <PrivateRoute path="/bookingList">
           <BookingList/>
         </PrivateRoute>
         <PrivateRoute path="/orderList">
           <OrderList/>
         </PrivateRoute>
         <PrivateRoute path="/addReview">
           <AddReview/>
         </PrivateRoute>
         <PrivateRoute path="/addAdmin">
           <AddAdmin/>
         </PrivateRoute>
         <Route path="/">
           <Home/>
         </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
  );
}

export default App;
