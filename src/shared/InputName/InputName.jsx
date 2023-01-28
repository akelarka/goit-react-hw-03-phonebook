import PropTypes from 'prop-types';
import { InputNameComponent } from './InputName.styled';

const InputName = ({ text }) => {
    return (
        <InputNameComponent>{text}</InputNameComponent>
    )
};

export default InputName;

InputName.propType = {
    text: PropTypes.string.isRequired,
};