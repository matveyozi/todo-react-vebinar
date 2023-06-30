import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../api/auth';
import { toast } from 'react-hot-toast';

const SignUpPage = () => {
const [name, setName] = useState('')
 const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
     name ==='email' ?  setEmail(value): name==='name' ? setName(value) : setPassword(value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log({email, password, name})
    signUp({ email, password, name, avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867" })
      .then(() => {
        toast.success('Good job! Sign Up successfully!')
        navigate('/login')
      })
      .catch(er => console.log(er))
  }

 

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
            Name
          </label>
					<input
						name='name'
						type='name'
						className='form-control'
						id='exampleInputname1'
						aria-describedby='nameHelp'
						onChange={handleChange}
						value={name}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
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
            !name ||
						!email ||
						!password 
					}
				>
					Sign Up
      </button>
      <Link to={'/login'}>Login</Link>
			</form>
      </div>
		)
}

export default SignUpPage



// {data: {…}, status: 201, statusText: 'Created', headers: AxiosHeaders, config: {…}, …}
// config
// : 
// {transitional: {…}, adapter: Array(2), transformRequest: Array(1), transformResponse: Array(1), timeout: 0, …}
// data
// : 
// {email: 'dsa@dsa.com', password: '11112345', name: 'test', avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867', role: 'customer', …}
// headers
// : 
// AxiosHeaders {content-length: '228', content-type: 'application/json; charset=utf-8'}
// request
// : 
// XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status
// : 
// 201
// statusText
// : 
// "Created"
// [[Prototype]]
// : 
// Object