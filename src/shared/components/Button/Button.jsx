import PropTypes from 'prop-types';
import { ButtonDefault } from './Button.styled';

const Button = ({ type, onClick, text }) => {
    return (
        <ButtonDefault
        type={type}
        onClick={onClick}
        >
            {text}
        </ButtonDefault>
    )
};

export default Button;


Button.propType = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};