import PropTypes from 'prop-types';
import Filter from '../Filter/Filter';
import ContactListItem from './ContactListItem/ContactListItem';
import {  PhoneBookList, Contact } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact, findContact }) => {
    return (
        <>
            <Filter findContact={findContact}></Filter>
            <PhoneBookList>
                {contacts.map(({ id, name, number }) => {
                return (
                    <Contact key={id}>
                        <ContactListItem id={id} name={name} number={number} deleteContact={deleteContact} />
                    </Contact>
                    
                );
                })}
            </PhoneBookList>
        </>
        );
}

export default ContactList;

ContactList.propType = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        }).isRequired
    ),
    deleteContact: PropTypes.func.isRequired,
};