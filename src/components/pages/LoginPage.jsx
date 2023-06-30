import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../store/auth/thunk';

const LoginPage = () => {

	// const isAuth = useSelector(state=> state.auth.access_token)

	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const handleChange = ({ target: { name, value } }) => {
		name === 'email' ? setEmail(value) : setPassword(value)
	};

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			 dispatch(loginThunk({
			email,
			password
			}))
				.unwrap()
			// navigate('/')
		} catch (error) {
			toast.error(error)
		}
		
	};
	// const handleSubmit = e => {
	// 	e.preventDefault();

	// 	dispatch(loginThunk({
	// 		email,
	// 		password
	// 	})).unwrap()
	// 		.then(() => navigate('/'))
	// 	.catch(error=> 	toast.error(error))
		
	// };




  return (
	  <div className="container mt-3">
		  <button
					type='submit'
					className='btn btn-primary me-3'
					onClick={()=> navigate('/')}
				>
					Home
      </button>
      <form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						onChange={handleChange}
						value={email}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						onChange={handleChange}
						disabled={!email}
						value={password}
					/>
				</div>
				
				<button
					type='submit'
					className='btn btn-primary me-3'
					disabled={
						!email ||
						!password 
					}
				>
					Login
      </button>
      <Link to={'/signUp'}>SignUp</Link>
			</form>
      </div>
		)
}

export default LoginPage