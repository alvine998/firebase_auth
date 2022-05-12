import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebase';
import { Pagination } from '@mui/material';

const Home = (props, { user }) => {
    const navigate = useNavigate();
    const signOut = () => {
        auth.signOut();
        sessionStorage.removeItem("Auth Token")
        console.log("signout")
        navigate("/login")
    }

    const [users, setUsers] = useState([]);
    const [arr, setArr] = useState([]);
    const [pagination, setPagination] = useState(0);
    const [current_page, setCurrent_page] = useState(0);

    const getData = () => {
        axios.get(`http://localhost:8080/users/single`, )
    }
    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [])
    return (
        <div className='home'>
            <h1>Hello, {users.displayName}</h1>
            <img src={`${users.photoURL}`} />

            {
                arr.map((e, i) => (
                    <div key={i}>
                        <p>{e.id} and {e.student_npm}</p>
                    </div>
                ))
            }
            <Pagination count={pagination} />
            <button className='btn btn-primary' onClick={signOut}>Sign out</button>
        </div>
    )
}

export default Home;