export const selectContacts = state => state.contacts.contacts;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;


export const selectFilter = state => state.filter;


export const selectFilteredContacts = state => {

	const contacts = selectContacts(state);
	const filter = selectFilter(state);

	return contacts.filter(item =>
		item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim())
	);
};