import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

function ErrorMessage({ error }) {
    const [open, setOpen] = useState(true);

    return (
        <Collapse >
            <Alert severity="error" >
                <AlertTitle>ERROR</AlertTitle>
                {error || "Something went wrong. Please try again!"}
            </Alert>
        </Collapse>
    );
}

export default ErrorMessage;
