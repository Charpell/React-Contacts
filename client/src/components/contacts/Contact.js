import React, { useContext, Fragment } from 'react'
import ContactContext from '../../contex/contact/contactContext';
import ContactItem from './ContactItem';

export default function Contact() {
  const contactContext = useContext(ContactContext)

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  )
}
