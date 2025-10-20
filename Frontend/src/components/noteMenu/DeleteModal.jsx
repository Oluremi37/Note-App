import React from "react";
import * as Styles from "./DeleteModalStyles";

const DeleteModal = ({ noteId, onCancel, onConfirm }) => {
  return (
    <Styles.ModalOverlay>
      <Styles.ModalContainer>
        <Styles.ModalContent>
          <p>Are you sure you want to delete this note?</p>
          <Styles.ButtonContainer>
            <Styles.CancelButton onClick={onCancel}>Cancel</Styles.CancelButton>
            <Styles.DeleteButton onClick={onConfirm}>
              {" "}
              Delete
            </Styles.DeleteButton>
          </Styles.ButtonContainer>
        </Styles.ModalContent>
      </Styles.ModalContainer>
    </Styles.ModalOverlay>
  );
};

export default DeleteModal;
