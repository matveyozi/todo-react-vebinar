import React from 'react'
import cssModlue from './ContactList.module.css'
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';


export default function ContactList() {

	const defaultText = 'Not have a contacts'

	const filteredList = useSelector(selectFilteredContacts)

	return (
		<>
			{filteredList.length > 0 && (
				<ul className={cssModlue.list}>
					{
						filteredList ? filteredList.map((item) => {
							return <ContactItem key={item.id} contact={item} />
						}) : defaultText
					}
				</ul>
			)}

		</>

	)
}
