"use client";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import Image from "next/image";

import Logo from "../../assets/logo/education_logo.png";
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const SignInPage = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen flex">
      <div className="w-8/12">
        <Image
          width={100000}
          height={100000}
          alt="sign up"
          className="h-screen w-auto object-cover"
          src="https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-4/12 px-4 gap-8">
        <Image
          src={Logo}
          className="h-36 w-36"
          width={5000}
          height={5000}
          alt="logo"
          objectFit="contain"
        />

        <div className="flex justify-start w-full">
          <Form
            className="w-full"
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Нэвтрэх нэр"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Нууц үг"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              label={null}
            >
              <Checkbox>Сануулах</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Нэвтрэх
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
