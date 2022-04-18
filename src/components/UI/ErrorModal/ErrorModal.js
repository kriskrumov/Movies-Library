import React from "react";
import Alert from "react-bootstrap/Alert";
import { useState } from "react";

const ErrorModal = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div className="error-modal">
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.error}</Alert.Heading>
      </Alert>
    </div>
  );
};

export default ErrorModal;
