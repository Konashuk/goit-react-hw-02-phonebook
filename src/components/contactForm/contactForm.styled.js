import styled from 'styled-components';
import { Field as FieldStyled, Form as FormStyled, ErrorMessage } from 'formik';

export const Form = styled(FormStyled)`
  display: flex;
  flex-direction: column;
  max-width: 430px;
  gap: 12px;
`;

export const Field = styled(FieldStyled)`
  padding: 8px;
  font: inherit;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ErrorMas = styled(ErrorMessage)`
  font-size: 8px;
  color: red;
`;
