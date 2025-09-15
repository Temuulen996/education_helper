"use client";

import { login, useAppDispatch, useAppSelector } from "@/src/store";
import { toggleLoginModal } from "@/src/store/slices/globalSlice";
import { Button, Form, Input, Modal } from "antd";

import BText from "../general/text";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import Logo from "../../assets/logo/logo.png";
import { useThunk } from "@/src/hooks/useThunks";
import { useRouter } from "@/src/i18n/navigation";

interface LoginModalProps {
  open: boolean;
  toggleModal: (state: boolean) => void;
}
const LoginModal = () => {
  const [doLogin] = useThunk(login);
  const [form] = Form.useForm();
  const router = useRouter();
  const visibleLoginModal = useAppSelector((state) => state.global.loginModal);

  const { lang } = useAppSelector((state) => state.global);
  const { userInfo } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const handleLogin = async () => {
    const values = form.getFieldsValue();
    if (typeof doLogin === "function") {
      doLogin(values);
    }
  };
  const onSuccessfulLogin = () => {
    if (userInfo?.role === "admin") {
      router.push("/admin");
    }
  };
  const placeHolderText = (en: string, mn: string): string => {
    return lang === "en" ? en : mn;
  };
  return (
    <Modal
      className=""
      footer={false}
      onCancel={() => {
        dispatch(toggleLoginModal(false));
      }}
      open={visibleLoginModal}
    >
      <Form className="pt-7" form={form} onFinish={handleLogin}>
        <div className="flex justify-center md:mb-5">
          <Image src={Logo} alt="logo" width={300} height={200} />
        </div>
        <Form.Item
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
          name="username"
        >
          <Input
            placeholder={placeHolderText("Username", "Нэвтрэх нэр")}
            prefix={<UserOutlined />}
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please enter your password!" }]}
          name="password"
        >
          <Input
            placeholder={placeHolderText("Password", "Нууц үг")}
            type="password"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item className="flex justify-end md:justify-center mt-5">
          <Button type="primary" htmlType="submit">
            <BText mn="Нэвтрэх" en="Login" />
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LoginModal;
