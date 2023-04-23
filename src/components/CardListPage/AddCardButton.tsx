import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AddCardButton = () => {
  return (
    <Link to={'/register'}>
      <AddCardButtonBox>+</AddCardButtonBox>
    </Link>
  );
};

const AddCardButtonBox = styled.button`
  width: 213px;
  height: 133px;

  border: none;

  background: #e5e5e5;
  border-radius: 5px;

  font-size: 30px;

  cursor: pointer;
`;

export default AddCardButton;
