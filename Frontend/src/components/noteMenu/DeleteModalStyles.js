import styled from "styled-components";

export const ModalOverlay = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background: rgba(0,0,0,0.5);
 z-index: 1000;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
`;

export const ModalContent = styled.div`
  p {
    margin: 0 0 20px;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const CancelButton = styled.div`
  padding: 5px 15px;
  cursor: pointer;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:hover {
    background: #e0e0e0;
  }
`;

export const DeleteButton = styled.div`
  padding: 5px 15px;
  cursor: pointer;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:hover {
    background: #cc0000;
  }
`;

// export const ModalOverlay = styled.div``;

