import {StyledButton} from '../Button/style'
 

const Button = (props) => {
  const { id, className, onClick, type, children } = props;
  return (
    <StyledButton
      id={id}
      className={className}
      onClick={onClick}
      type={type}
    >{children}</StyledButton>
  );
};

export default Button; 