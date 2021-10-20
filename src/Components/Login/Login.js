import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from '@firebase/auth';
import initAuthentication from '../../Firebase/init.firebase';
import useAuth from '../../Hook/useAuth';
import { useHistory, useLocation } from 'react-router';

initAuthentication();
const Login = () => {
    // all state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistered, setIsregistered] = useState(false);
    const { user, signInUsingGoogle, handleSignOut } = useAuth();
    const location = useLocation();
    const ridirect_uri = location.state?.from || '/services';
    const history = useHistory();

    // get firebase auth
    const auth = getAuth();
    // register btn handler
    const handleRegistration = (e) => {
        e.preventDefault();
        // password validation
        if (password.length < 6) {
            setError('Password should be at least 6 characters long.');
            return;
        } else {
            setError('');
        }

        isRegistered ? logUserWithEmailPass(email, password) : regUserWithEmailPass(email, password);
    }
    // get name
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    // get email
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    // get pass
    const handlePassWordChange = (e) => {
        setPassword(e.target.value);
    }

    // check box toggl handler
    const toggleRegLog = (e) => {
        setIsregistered(e.target.checked);
        setError('');
    }

    // register user with email & password
    const regUserWithEmailPass = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(ridirect_uri);
                // send verification email
                veryfyEmail();
                // set user name
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // login user with email & password
    const logUserWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                history.push(ridirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // google sign in and rideirt
    const handleSignInWithgoogle = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(ridirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    // set user info into firebase
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then(result => { })
    }

    // verify email address
    const veryfyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
                setError('Please verify your email and login to our website.');
            })
    }
    // password reset email
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
    }

    return (
        <div className="py-5">
            <div className="container">
                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }}>
                            <form onSubmit={handleRegistration}>
                                <h1>Please {isRegistered ? 'Login' : 'Register'}</h1>
                                {!isRegistered && <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input onBlur={handleNameChange} type="text" className="form-control" id="name" aria-describedby="emailHelp" required />
                                </div>
                                }
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input onBlur={handlePassWordChange} type="password" className="form-control" id="exampleInputPassword1" required />
                                </div>

                                <div className="mb-3 form-check">
                                    <input onChange={toggleRegLog} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Already Registered?</label>
                                </div>
                                <button id="submit-btn" type="submit" className="btn btn-primary me-2">{isRegistered ? 'Login' : 'Register'}</button>
                                <button onClick={handleResetPassword} type="button" className="btn btn-primary">Reset Password</button>
                            </form>
                            <p className="text-danger">{error}</p>
                            <div className="pb-2 d-flex justify-content-center">
                                <span> -------------- or --------------</span>
                            </div>
                            <div className="text-center">
                                {!user.email ?
                                    <div>
                                        <button onClick={handleSignInWithgoogle} className="btn btn-primary">Google SignIn</button>
                                    </div> :
                                    <button onClick={handleSignOut} className="btn btn-primary" >Logout</button>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    );
};

export default Login;