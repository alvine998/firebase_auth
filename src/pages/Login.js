import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = (props) => {
    const [user, setuser] = useState(null);
    const provider = new GoogleAuthProvider();
    const navigation = useNavigate();

    const onGoogle = () => {
        signInWithPopup(auth, provider).then(
            result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log({ credential, token, user });
                const dataUserLogin = {
                    name: user.displayName,
                    email: user.email,
                    phone: user.phoneNumber,
                    password: "00000000",
                    token: token
                }
                console.log(dataUserLogin)
                axios.post(`http://localhost:8080/users/create`, dataUserLogin).then(
                    res => {
                        const result = res.data;
                        console.log(result, "Berhasil registrasi");
                        if (user && token) {
                            navigation("/home")
                        }
                    }
                )
            }
        ).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({ errorCode, errorMessage, email, credential });
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log({ uid });
            } else {
                console.log("no user");
            }
        });
    }, [])

    console.log(user)
    return (
        <div>
            <div style={{ paddingLeft: 200, paddingRight: 200 }}>
                <input className='form-control' type={"email"} />
                <button className='btn btn-primary' onClick={onGoogle}>Login</button>
            </div>
        </div>
    )
}