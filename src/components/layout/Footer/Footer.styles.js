import styled from "styled-components";

const StyledFooter = styled.footer`
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7f7f7;
  .bottom_logo {
    margin: 100px auto;
    width: 150px;
  }
`;
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
`;

export { StyledFooter, SocialIcons };
