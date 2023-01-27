import PropTypes from 'prop-types';
import InputName from '../../../shared/components/InputName/InputName';
import { FilterWrapper } from './Filter.styled';

const Filter = ({ findContact }) => {
    return (
        <FilterWrapper>
            <h2>Contacts</h2>
            <label>
                <InputName text={"Find contacts by name"}/>
                <input type="text" onChange={findContact} />
            </label>
        </FilterWrapper>
    );
};

export default Filter;

Filter.propType = {
    findContact: PropTypes.func.isRequired,
};