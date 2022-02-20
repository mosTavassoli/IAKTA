import styled from "styled-components";

export const UserListsMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 50%;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

export const UserListContainer = styled.section`
  box-shadow: 1px 2px 3px rgba(255, 255, 255, 0.8);
  background-color: darkcyan;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const UserListContent = styled.section`
  padding: 2rem;
`;

export const UserListContentItems = styled.section`
  padding: 0.5rem;
`;

export const UserBtn = styled.button`
  padding: 0.2rem 0.5rem;
  font-size: 1rem;
  display: block;
  width: 100%;
  margin: 0;
`;

export const UserListSpan = styled.span`
  font-size: 1.5rem;
  text-align: center;
  display: block;
`;
