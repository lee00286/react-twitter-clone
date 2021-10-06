import React from 'react';
import "./HappeningNow.css";
import { Button, Typography } from 'antd';

const { Title } = Typography;

function HappeningNow() {
    return (
        <div className="happening-now-flexbox">
            <div className="happening-now-left" />
            <div className="happening-now-right">
                <Title className="happening-now-text" level={1}>Happening now</Title>
                <Title className="happening-now-text" level={2}>Join Twitter today.</Title>
                <div className="happening-now-buttons">
                    <Button className="happening-now-google">Sign up with Google</Button>
                    <Button className="happening-now-apple">Sign up with Apple</Button>
                    <Button className="happening-now-signup">Sign up with phone or email</Button>
                </div>
                <div className="happening-now-text-small">
                    <p>By signing up, you agree to the Terms of Service and Privacy Policy,</p>
                    <p>including Cookie Use.</p>
                </div>
                <div className="happening-now-signin">
                    Already have an account? Sign in
                </div>
            </div>
        </div>
    );
}

export default HappeningNow;