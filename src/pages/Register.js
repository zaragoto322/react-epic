import { Button, Form, Input } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useStores } from '../stores';
import { useNavigate } from 'react-router-dom';


const Wraper = styled.div`
    max-width: 600px;
    margin: 30px auto;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 20px;
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
`

const Component = () => {
    const navigate = useNavigate();
    const { AuthStore } = useStores();

    const onFinish = (values) => {
        console.log('Success:', values);
        AuthStore.setUsername(values.username);
        AuthStore.setPassword(values.password);
        AuthStore.register()
            .then(() => {
                console.log('注册成功，跳转首页')
                navigate('/')
            }).catch(() => {
                console.log('注册失败，无响应')
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const Validators = {
        username(rule, value) {
            console.log(rule, value)
            if (!/\w/.test(value)) return Promise.reject('不能出现字母数字下划线以外的字符');
            if (value.length < 3) return Promise.reject('用户名长度不得小于3');
            if (value.length > 10) return Promise.reject('用户名长度不得大于10');
            return Promise.resolve();
        }
    };

    const confirmPassword = ({ getFieldValue }) => ({
        validator(rule, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject('两次输入的密码不一致');
        }
    });

    return (
        <Wraper>
            <Title>注册</Title>
            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: '输入用户名',
                        },
                        {
                            validator: Validators.username,
                        }
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: '请输入密码',
                        },
                        {
                            min: 4,
                            message: '密码不得小于4个字符',
                        },
                        {
                            max: 10,
                            message: '密码不得多于10个字符',
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    label="确认密码"
                    name="confirmpassword"
                    rules={[
                        {
                            required: true,
                            message: '请再次输入密码',
                        }, confirmPassword
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </ Wraper>
    );
};




export default Component;