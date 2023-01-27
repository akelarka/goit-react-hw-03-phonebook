import styled from '@emotion/styled';
import { Form } from 'formik';

export const Title = styled.h1`
    margin: 20px;
`;

export const FormAdd = styled(Form)`
    float:left;
    margin-right: 20px;
    margin-left: 20px;
`;

export const Label = styled.label`
    display: block;
`;

export const ErrorsMessage = styled.div`
    margin-top: 5px;
    color: red;
`;