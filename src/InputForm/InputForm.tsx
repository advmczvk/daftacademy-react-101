import {useState} from 'react';
import {TextField} from '@mui/material';

export const InputForm = () => {
    const [usernameError, setUsernameError] = useState<boolean>(false);
    const [usernameInputValue, setUsernameInputValue] = useState<string>("");

    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [passwordInputValue, setPasswordInputValue] = useState<string>("");

    const handleUsernameInput = (event: any) => {
        setUsernameInputValue(event.target.value);
        if(event.target.value.length < 3 || event.target.value.length > 20)
            setUsernameError(true);
        else
            setUsernameError(false);
    }

    const handlePasswordInput = (event: any) => {
        setPasswordInputValue(event.target.value);
        if(event.target.value.length < 3 || event.target.value.length > 20)
            setUsernameError(true);
        else
            setUsernameError(false);
    }

    return <>
        <div style={{display: "flex", flexDirection: "column"}}>
            <h3>Login</h3>
            <TextField 
                id="username"
                label="Username"
                variant="outlined"
                error={usernameError}
                required
                onInput={handleUsernameInput}
                value={usernameInputValue}
                type="text"
                margin="normal"/>
            <TextField 
                id="password"
                label="Password"
                variant="outlined"
                error={passwordError}
                required
                onInput={handlePasswordInput}
                value={passwordInputValue}
                type="text"
                margin="normal"/>
        </div>
    </>
}