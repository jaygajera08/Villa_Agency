import StyledInput from './style';

const Input = (props) => {
  const { id, type, placeholder, className, value, onChange } = props; 

  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      className={className} 
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
