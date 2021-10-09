// React
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Style
import "./Register.css";
import { Button, Form, Input, TimePicker, Typography } from 'antd';
// Twitter Logo
import Twitter from "../../TwitterLogo";
// Import
import { signupUser } from "../../../_actions/user_actions";
import { Formik } from 'formik';

const { Title } = Typography;

function SignUp(props) {
    const [EmailPhone, setEmailPhone] = useState(true);

    const dispatch = useDispatch();

    // Change Email/Phone status
    const onClickEmailPhone = () => {
        setEmailPhone(!EmailPhone);
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    let dataToSubmit = {
                        name: values.name,
                        email: values.email,
                        phone: values.phone
                    };
                    dispatch(signupUser(dataToSubmit)).then(response => {
                        if (response.payload.success) {
                            props.history.push("/signin");
                        } else {
                            alert(response.payload.err.errmsg)
                        }
                    });
                    setSubmitting(false);
                }, 500);
            }}
        >
            {props => {
                const {
                    values,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <div className="signup-box">
                        <div className="signup-container">
                            <div className="signup-form-logo">
                                <Twitter />
                            </div>
                            <div className="signup-form-title">
                                <Title level={2}>Create your account</Title>
                            </div>
                            <div className="signup-form-one-form">
                                <Form onSubmit={handleSubmit} >
                                    <div className="signup-form">
                                        <Input
                                            id="name"
                                            placeholder="Name"
                                            type="text"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        { EmailPhone && <Input
                                            id="email"
                                            placeholder="Email"
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        /> }
                                        { !EmailPhone && <Input
                                            id="phone"
                                            placeholder="Phone"
                                            type="phone"
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        /> }
                                    </div>
                                    <div className="signup-form-email-phone">
                                        { EmailPhone && <div onClick={onClickEmailPhone}>Use phone instead</div> }
                                        { !EmailPhone && <div onClick={onClickEmailPhone}>Use email instead</div> }
                                    </div>
                                    <div className="signup-form-subtitle">
                                        <Title level={4}>Date of birth</Title>
                                    </div>
                                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                                    <p>Month</p>
                                    <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                                        Next
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Formik>
    );
};

export default SignUp;