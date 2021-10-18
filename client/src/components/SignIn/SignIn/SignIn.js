// React
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Style
import "./SignIn.css";
import { Button, Form, Input, Select, Typography } from 'antd';
// Twitter Logo
import Twitter from "../../TwitterLogo";
// Import
import { signupUser } from "../../../_actions/user_actions";
import { Formik } from 'formik';

const { Option } = Select;
const { Title } = Typography;

const month = [
    <Option key="January">January</Option>,
    <Option key="February">February</Option>,
    <Option key="March">March</Option>,
    <Option key="April">April</Option>,
    <Option key="May">May</Option>,
    <Option key="June">June</Option>,
    <Option key="July">July</Option>,
    <Option key="August">August</Option>,
    <Option key="September">September</Option>,
    <Option key="October">October</Option>,
    <Option key="November">November</Option>,
    <Option key="December">December</Option>
];

const day = [];
for (let i = 1; i < 32; i++) {
    day.push(<Option key={i}>{i}</Option>);
}

const year = [];
for (let i = 1901; i < 2022; i++) {
    year.push(<Option key={i}>{i}</Option>);
}

function SignIn(props) {
    const [EmailPhone, setEmailPhone] = useState(true);
    const [Month, setMonth] = useState("January");
    const [Day, setDay] = useState(1);
    const [Year, setYear] = useState(2021);

    const dispatch = useDispatch();

    // Change Email/Phone status
    const onClickEmailPhone = () => {
        setEmailPhone(!EmailPhone);
    };

    const onClickBirthMonth = (value) => {
        setMonth(value);
    };

    const onClickBirthDay = (value) => {
        setDay(value);
    };

    const onClickBirthYear = (value) => {
        setYear(value);
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
                                    <div className="signup-form">
                                        <div className="signup-form-date">
                                            <Select className="signup-form-dropdown" onChange={onClickBirthMonth} allowClear>
                                                {month}
                                            </Select>
                                            <Select className="signup-form-dropdown" onChange={onClickBirthDay} allowClear>
                                                {day}
                                            </Select>
                                            <Select className="signup-form-dropdown" onChange={onClickBirthYear} allowClear>
                                                {year}
                                            </Select>
                                        </div>
                                    </div>
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

export default SignIn;