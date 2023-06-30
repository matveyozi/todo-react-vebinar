import React, { Suspense, useEffect, useState } from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Modal from '../Modal/Modal'
import FormLogin from '../FormLogin/FormLogin'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, setToken } from '../../api/auth'
import { profileThunk } from '../../store/auth/thunk'

const Layout = () => {

	const { access_token, profile } = useSelector(state=> state.auth)
	const dispatch = useDispatch()
	const [isShowModal, setIsShowModal] = useState(false)

	const openModal = () => setIsShowModal(true)

	const closeModal = () => setIsShowModal(false)

	const createUser = (data) => {
		const newUser = {
			...data,
			id: Date.now(),
			role: 'customer',
		}
		console.log(newUser)
	}

	useEffect(() => {
		if (access_token && !profile) {
			setToken(access_token);
			dispatch(profileThunk());
		}   
	}, [access_token, dispatch, profile])

	return (
		<div className='container'>
			<Header open={openModal} />
			<Suspense>
				<Outlet />
			</Suspense>
			{isShowModal && (
				<Modal close={closeModal}>
					<FormLogin close={closeModal} createUser={createUser} />
				</Modal>
			)}
		</div>
	)
}

export default Layout
