import React, { useState } from 'react';
import './passwordreset.css';

const PasswordReset = () => {
    const [email, setEmail] = useState('');

    const handleReset = async () => {
        console.log('Reset link sent to:', email);
    };

    const styles = {
        container: {
            width: 'auto',
            height: 'auto',
            margin: '0 auto',
        },
        containerrow: {
            width: '100vh',
            height: '70vh',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            textAlign: 'center',
            display: 'flex',       // Enables flexbox
            flexDirection: 'column', // Stack children vertically
            justifyContent: 'center', // Center content vertically in the container
            alignItems: 'center',
            marginLeft: '350px',
        },
        input: {
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            fontSize: '16px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            height: '50px',
        },
        button: {
            width: '40%',
            padding: '10px 20px',
            fontSize: '16px',
            color: 'white',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            height: '50px',
            fontSize: '1.3rem',
        },
        
    };

    return (
        <div style={styles.container}>
            <div style = {styles.containerrow}>
            <h1>Reset Your Password</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                style={styles.input}
            />
            <button onClick={handleReset} style={styles.button}>Send Reset Link</button>
        </div>
        </div>
    );
};

export default PasswordReset;
