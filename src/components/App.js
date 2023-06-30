import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList'
import Title from './Title/Title';
import Section from './Section/Section';
import Container from './Container/Container';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';




export default function App() {


  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (

    <Section>
      <Container>
        <Title title={'Phonebook'}></Title>
        <ContactForm />
        <Filter />
        <Title title={'Contacts'} />
      </Container>
      <ContactList />
      {isLoading && <h3>Do you need contacts? Wait... </h3>}
      {error && <h3>{error}</h3>}
    </Section>
  )
}

