// src/components/Profile.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user profile data
        const fetchProfile = async () => {
            const response = await axios.get('http://localhost:3000/api/profile');
            setUser(response.data);
        };

        fetchProfile();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;
