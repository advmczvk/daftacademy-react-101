import {useCallback, useState, useEffect} from 'react';
import {TextField, Button} from '@mui/material';

export const InputForm = () => {
    const [usernameError, setUsernameError] = useState<boolean>(false);
    const [usernameInputValue, setUsernameInputValue] = useState<string>("");
    const [usernameHelperText, setUsernameHelperText] = useState<string>("");

    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [passwordInputValue, setPasswordInputValue] = useState<string>("");
    const [passwordHelperText, setPasswordHelperText] = useState<string>("");

    const readyToSubmit = !(usernameError || passwordError || !usernameInputValue || !passwordInputValue);

    const handleUsernameInput = (event: any) => {
        setUsernameInputValue(event.target.value);
        if(event.target.value.length < 3){
            setUsernameError(true);
            setUsernameHelperText("Username too short");
        }
        else if(event.target.value.length > 20){
            setUsernameError(true);
            setUsernameHelperText("Username too long");
        }
        else{
            setUsernameError(false);
            setUsernameHelperText("");
        }
    }

    const handlePasswordInput = (event: any) => {
        const password = event.target.value;
        setPasswordInputValue(password);
        if(password.length < 3){
            setPasswordError(true);
            setPasswordHelperText("Password too short!")
        }
        else if(password.match(/[$@#&!]+/)){
            setPasswordError(true);
            setPasswordHelperText("Password too weak!")
        }
        else{
            setPasswordError(false);
            setPasswordHelperText("")
        }
    }
    
    const handleSubmit = useCallback(() => {
        if(readyToSubmit){
            localStorage.setItem('username', usernameInputValue);
            localStorage.setItem('password', passwordInputValue);
        }
    }, [usernameInputValue, passwordInputValue]);

    useEffect(() => {
        const lsData = {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
        }

        if (!!lsData.username) {
            setUsernameInputValue(lsData.username);
        }
    }, [])

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
                margin="normal"
                helperText={usernameHelperText}/>
            <TextField 
                id="password"
                label="Password"
                variant="outlined"
                error={passwordError}
                required
                onInput={handlePasswordInput}
                value={passwordInputValue}
                type="password"
                margin="normal"
                helperText={passwordHelperText}/>
            <Button variant="contained" disabled={!readyToSubmit} onClick={handleSubmit} >Log in</Button>
        </div>
    </>
}