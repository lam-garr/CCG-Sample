import React, { useState, useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Input from "../components/Input";
import "../styles/Signup.css";

function Signup(){
    
    //username input handling
    const [ usernameInput, setUsernameInput ] = useState('');

    const handleUsernameChange = (e:any) => {
        setUsernameInput(e.target.value);
    }

    //username error handling
    const[ usernameErrorMessage, setusernameErrorMessage ]= useState('');

    const handleUsernameError = (message:string) => {
        setusernameErrorMessage(message)
    }

    //first and last name input handling
    const [ firstnameInput, setFirstnameInput ] = useState('');

    const handleFirstnameChange = (e:any) => {
        setFirstnameInput(e.target.value);
    }

    const [ lastnameInput, setLastnameInput ] = useState('');

    const handleLastnameChange = (e:any) => {
        setLastnameInput(e.target.value);
    }

    //first name error handling
    const[ firstNameErrorMessage, setfirstNameErrorMessage ]= useState('');

    const handleFirstNameError = (message:string) => {
        setfirstNameErrorMessage(message)
    }

    //last name error handling
    const[ lastNameErrorMessage, setLastNameErrorMessage ]= useState('');

    const handleLastNameError = (message:string) => {
        setLastNameErrorMessage(message)
    }

    //password input handling
    const [ passwordInput, setPasswordInput ] = useState('');

    const handlePasswordChange = (e:any) => {
        setPasswordInput(e.target.value);
    }

     //password error handling
     const[ pwErrorMessage, setPwErrorMessage ]= useState('');

     const handlePwError = (message:string) => {
         setPwErrorMessage(message)
     }

    //password re-enter input handling
    const [ rePasswordInput, setRePasswordInput ] = useState('');

    const handleRePasswordChange = (e:any) => {
        setRePasswordInput(e.target.value);
    }

    //password re-enter error handling
    const[ rePwErrorMessage, setRePwErrorMessage ]= useState('');

    const handleRePwError = (message:string) => {
        setRePwErrorMessage(message)
    }

    //terms & conditions checkbox input handling
    const [ checked, setChecked ] = useState(false);

    const handleCheckBox = (e:any) => {
        setChecked(!checked);
        setCheckErr(false);
    }

    //terms & conditions handling after sumbit
    const  [ checkErr, setCheckErr ] = useState(false);

    //sign up error handling
    const [ signUpErr, setSignUpErr ] = useState(false);

    const navigate = useNavigate();

    //disable signup button during api call
    const [ fetching, setFetching ] = useState(false);

    //onsubmit form handling
    const handleSubmit = async (e:any) => {
        e.preventDefault();

        //check if input is valid
        if(usernameInput.length <= 3){
            handleUsernameError("username not valid");
            return;
        }

        handleUsernameError("");

        //check if input is valid
        if(firstnameInput.length <= 1){
            handleFirstNameError("first name not valid");
            return;
        }

        handleFirstNameError("");

        //check if input is valid
        if(lastnameInput.length <= 1){
            handleLastNameError("last name not valid");
            return;
        }

        handleLastNameError("");

        //check to see if pw is at least 5 characters
        if(passwordInput.length < 5){
            handlePwError("password not strong enough");
            return;
        }

        handlePwError("");

        //check to see if pw matches
        if(rePasswordInput !== passwordInput){
            handleRePwError("password does not match");
            return;
        }

        handleRePwError("");

        //alert user if checkbox is not checked
        if(!checked){
            setCheckErr(true);
            return;
        }

        setFetching(true);

        //call api
        /* const signupData = await fetch("/api/sign-up", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: usernameInput,
                                firstname: firstnameInput,
                                lastname: lastnameInput,
                                password: passwordInput})
        })

        if(!signupData.ok){
            setSignUpErr(true);
        }else{
            setSignUpErr(false);
            setFetching(false);
            //navigate to log in page
            navigate('/log-in');
        } */
    }

    const handleFetching = () => {
        if(fetching){
            return "Loading";
        }else{
            return "Sign Up";
        }
    }

    return(
        <main>
            <div className="sign-up-content">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <Input changeHandler={handleUsernameChange} value={usernameInput} type='text' placeholder='Username' errorMessage={usernameErrorMessage} required={true}/>
                    <Input changeHandler={handleFirstnameChange} value={firstnameInput} type='text' placeholder='First Name' errorMessage={firstNameErrorMessage} required={true}/>
                    <Input changeHandler={handleLastnameChange} value={lastnameInput} type='text' placeholder='Last Name' errorMessage={lastNameErrorMessage} required={true}/>
                    <Input changeHandler={handlePasswordChange} value={passwordInput} type='password' placeholder='Password' errorMessage={pwErrorMessage} required={true}/>
                    <Input changeHandler={handleRePasswordChange} value={rePasswordInput} type='password' placeholder='Re-Enter Password' errorMessage={rePwErrorMessage} required={true}/>
                    {checkErr && <span className="checkErr">Terms and conditions needs to be checked</span>}
                    <div className="sign-up-terms">
                    <label><input type="checkbox" id="checkbox" onChange={handleCheckBox}/>I agree to the </label><span className="term-serv-click">terms and conditions</span><span className="term-serv-end">.</span>
                    </div>
                    <div className="sign-up-btn-handler">
                    {signUpErr && <span className="sign-up-err">Error logging in, please try again</span>}
                        <button className="signupBtn" type="submit" disabled={fetching}>{handleFetching()}</button>
                    </div>
                </form>
                <div className="sign-up-members">
                    <p>Already a member?<Link to="/log-in">Login Here</Link></p>
                </div>
            </div>
        </main>
    )
}

export default Signup;