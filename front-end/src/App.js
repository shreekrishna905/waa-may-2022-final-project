import './App.css';
import { Login } from './pages/Login';
import Signup from './pages/Signup';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import LandLordList from './pages/landlord/LandLordList';
import PropertyList from './pages/property/PropertyList';
import AddProperty from './pages/property/AddProperty';

import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Report from './pages/Report';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />}>
        </Route>

        <Route path="/report" element={<Report />}>
        </Route>

        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Home></Home>
            </PrivateRoute>
          }>
          <Route path='' element={<Dashboard />}>
          </Route>
          <Route path='landlords' element={<LandLordList />}></Route>
          <Route path='property' element={<PropertyList />}></Route>

          <Route path='add' element={<AddProperty />}></Route>
        </Route>

        <Route path='/login' element={<Login />}>
        </Route>

        <Route path='/signup' element={<Signup />}>
        </Route>
        <Route path='/forgot-password' element={<ForgotPassword />}>
        </Route>
        <Route path='/reset-password' element={<ResetPassword />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
