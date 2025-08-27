import styled from 'styled-components'; 

const StyledInput = styled.input` 
  width: 100%;
  height: 44px;
  border-radius: 22px;
  background-color: #f6f6f6;
  border: none;
  margin-bottom: 20px;
  font-size: 14px;
  padding: 0px 15px;

  &::placeholder {
    font-size: 14px;  
  }
`;

export default StyledInput;