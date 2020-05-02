import React, { useState } from 'react';
import { Alert } from 'reactstrap';


function AlertComponent(props) {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    return (
        <Alert color={props.type} isOpen={visible} toggle={onDismiss}>
            {props.message}
        </Alert>
    );
}

export default AlertComponent;
