// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Style
import "./HappeningNow.css";
import { Button, Typography } from 'antd';
// Twitter Logo
import Twitter from "../TwitterLogo";
// Import
import SignIn from "./SignIn/SignIn";

const { Title } = Typography;

function HappeningNow() {
    const [PopUp, setPopUp] = useState(false);
    // let history = useHistory();

    const onClickSignUp = () => {
        // history.push("/signup");
        setPopUp(true);
    };

    const onClickBack = () => {
        // history.push("/signup");
        setPopUp(false);
    };

    return (
        <div className="happening-now-box">
            <div className="happening-now-flexbox">
                {/* Left */}
                <div className="happening-now-left">
                    <Twitter />
                </div>
                {/* Right */}
                <div className="happening-now-right">
                    <div className="happening-now-icon">
                        <Twitter />
                    </div>
                    <div className="happening-now-text">
                        <Title className="happening-now-text-one" level={1}>Happening now</Title>
                        <Title className="happening-now-text-two" level={2}>Sign in to Twitter.</Title>
                    </div>
                    <div className="happening-now-buttons">
                        <Button className="happening-now-google">Sign up with Google</Button>
                        <Button className="happening-now-apple">Sign up with Apple</Button>
                        <Button className="happening-now-signup" onClick={onClickSignUp}>Sign up with phone or email</Button>
                    </div>
                    <div className="happening-now-signin">
                        Don't have an account? <a href="/">Sign up</a>
                    </div>
                </div>
            </div>
            { PopUp && <div className="signup-flexbox">
                <SignIn />
                <div className="signup-background" onClick={onClickBack} />
            </div> }
        </div>
    );
}

export default HappeningNow;