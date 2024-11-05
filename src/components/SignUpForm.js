import React from 'react';
import './App.css';

const SignUpForm = () => {
    return (
        <div className="form-section">
            <h2>Welcome to <span className="highlight">KatiPOS</span></h2>
            <p>Already Have an account? <a href="/login">Login</a></p>

            <button className="google-signup">
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Google icon" />
                Sign up with Google
            </button>

            <div className="divider">
                <span>OR</span>
            </div>

            <form className="signup-form">
                <label>Full Name</label>
                <input type="text" placeholder="Full Name" />

                <label>Email</label>
                <input type="email" placeholder="Email" />

                <label>Password</label>
                <input type="password" placeholder="Password" />

                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password" />

                <button type="submit" className="signup-button">Sign Up</button>
            </form>

            <p className="terms">
                By clicking on sign up, you agree to KatiPOS
                <br />
                <a href="/terms">Terms of Service and Privacy Policy</a>
            </p>
        </div>
    );
};

export default SignUpForm;
