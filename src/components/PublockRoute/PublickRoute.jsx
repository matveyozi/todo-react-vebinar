import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PublickRoute = ({ children }) => {

	const location = useLocation();
	console.log(location);

	const isAuth = useSelector(state=>state.auth.access_token)
  return !isAuth ? children : <Navigate to={location.state ?? '/'}	/>
}

export default PublickRoute