// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Style
import "./HappeningNow.css";
import { Button, Typography } from 'antd';
// Twitter Logo
import Twitter from "../TwitterLogo";
// Import
import SignUp from "./SignUp/SignUp";

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
                        <Title className="happening-now-text-two" level={2}>Join Twitter today.</Title>
                    </div>
                    <div className="happening-now-buttons">
                        <Button className="happening-now-google">Sign up with Google</Button>
                        <Button className="happening-now-apple">Sign up with Apple</Button>
                        <Button className="happening-now-signup" onClick={onClickSignUp}>Sign up with phone or email</Button>
                    </div>
                    <div className="happening-now-text-small">
                        <p>By signing up, you agree to the <a href="https://twitter.com/ko/tos">Terms of Service</a> and <a href="https://twitter.com/ko/privacy">Privacy</a></p>
                        <p><a href="https://twitter.com/ko/privacy">Policy</a>, including <a href="https://help.twitter.com/ko/rules-and-policies/twitter-cookies">Cookie Use</a>.</p>
                    </div>
                    <div className="happening-now-signin">
                        Already have an account? <a href="/signin">Sign in</a>
                    </div>
                </div>
            </div>
            { PopUp && <div className="signup-flexbox">
                <SignUp />
                <div className="signup-background" onClick={onClickBack} />
            </div> }
        </div>
    );
}

export default HappeningNow;