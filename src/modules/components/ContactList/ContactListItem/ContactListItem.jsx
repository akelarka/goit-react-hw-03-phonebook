import PropTypes from 'prop-types';
import Button from '../../../../shared/components/Button/Button';
import { ContactName, ContactNumber } from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, deleteContact }) => {
    return (
        <li>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <Button
                type={"button"}
                onClick={() => deleteContact(id)}
                text={"Delete"}
            />
        </li>
    )
};

export default ContactListItem;

ContactListItem.propType = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};