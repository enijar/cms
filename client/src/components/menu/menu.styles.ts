import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuItemWrapper = styled(Link)`
  text-decoration: none;
  display: block;
  background-color: #414141;
  padding: 0.5em;
  margin-block-end: 1px;

  &[data-active="true"] {
    background-color: #595959;
  }

  :hover {
    background-color: #595959;
  }

  :last-child {
    margin-block-end: 0;
  }
`;

export const MenuWrapper = styled.div`
  width: 12em;
  height: 100vh;
  background-color: #272727;
  border-right: 1px solid #595959;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  position: sticky;
  top: 0;
  left: 0;
`;
