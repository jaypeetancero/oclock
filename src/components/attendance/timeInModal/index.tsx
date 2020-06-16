import React, { FC } from "react";
import Modal from "../../customComponents/modal";

interface Props {
  id: string;
  title: string;
}

const TimeInModal: FC<Props> = ({ id, title }) => {
  return (
    <Modal id={id} title={title}>
      <p>Time in Success!</p>
      <p>
        Employee ID: <span>216417</span>
      </p>
      <p>
        Employee: <span>Jaypee Santos Tan</span>
      </p>
      <p>
        Time Out: <span>{new Date().toLocaleTimeString()}</span>
      </p>
    </Modal>
  );
};

export default TimeInModal;
