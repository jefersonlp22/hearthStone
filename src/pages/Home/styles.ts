import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  flex-direction: column;
  h3 {
    margin-top: 24px;
    margin-bottom: 16px;
  }
  svg {
    margin-left: 20px;
    cursor: pointer;
  }
  .search {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 16px;
    .MuiTextField-root {
      margin-top: 14px;
    }
  }
`;

export const ModalContent = styled.div`
  display: flex;
  width: 50%;
  height: 80%;
  border-radius: 10px;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  overflow-y: auto;
  margin: auto;
  transform: translate(50%, 20%);
  flex-direction: column;
  .header {
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    padding-right: 24px;
    svg {
    cursor: pointer;
  }
  }
`;