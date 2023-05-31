import styled from "styled-components";

const MenuButton = ({ value }) => {
  return (
    <Container>
      <button>{value}</button>
    </Container>
  );
};

const Container = styled.div`
  button {
    width: 100px;
    height: 100px;
    margin: 0 30px 0 30px;
    transition: 500ms;
  }
  button:hover {
    background-color: red;
  }
`;

export default MenuButton;
