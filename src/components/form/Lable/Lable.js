import StyledLabel from "./style";

const Label = ({ htmlFor, children }) => {
  return <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>;
};

export default Label;
