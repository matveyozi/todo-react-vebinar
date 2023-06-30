import React from 'react'
import Button from '@mui/material/Button';

import cssModlue from './ContactItem.module.css'
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export default function ContactItem({ contact }) {
	const dispatch = useDispatch();
 

	const deleteContacts = () => dispatch(deleteContact(contact.id))
  return (
	  <li className={cssModlue.item}>

		  <p className="name">
			  {contact.name}
		  </p>
		  <p className="number">
			  {contact.number}
		  </p>
		  <Button onClick={deleteContacts} variant="contained">DELETE</Button>
	  </li>
  )
}
