import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  max-height: 180px;
  border-radius: 22px;
  background-color: #f6f6f6;
  border: none;
  margin-bottom: 40px;
  font-size: 14px;
  padding: 15px 15px;
  resize: vertical;

  /* Styles for the placeholder text */
  &::placeholder {
    /* You can add specific placeholder styles here if needed */
    color: #999; /* Example: Gray placeholder text */ 
  }
`;

export default StyledTextarea;