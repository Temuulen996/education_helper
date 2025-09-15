"use client";
import {
  Avatar,
  Drawer,
  Dropdown,
  FloatButton,
  Form,
  InputNumber,
  Layout,
  MenuProps,
  Switch,
} from "antd";

import BFooter from "./footer";

import AdminMenu from "./admin-menu";
import { useAppDispatch, useAppSelector } from "@/src/store";
import {
  changeLanguage,
  changeTheme,
  logOut,
  toggleLoginModal,
} from "@/src/store/slices/globalSlice";
import { useRouter } from "@/src/i18n/navigation";
import {
  LoginOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Logo from "../../assets/logo/logo.png";
import { useState } from "react";

const BAdminLayout = ({ children }: BAdminLayoutProps) => {
  const [settingDrawerOpen, setSettingDrawerOpen] = useState<boolean>(false);
  const { lang, theme, userInfo } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSwitchLang = (checked: boolean) => {
    const locale = checked ? "en" : "mn";
    router.replace("/", { locale });
    dispatch(changeLanguage(locale));
  };
  const handleSwitchTheme = (checked: boolean) => {
    const switchToDarkTheme = () => {
      document.documentElement.classList.add("dark");
      dispatch(changeTheme("dark"));
    };

    const switchToLightTheme = () => {
      document.documentElement.classList.remove("dark");
      dispatch(changeTheme("light"));
    };
    checked ? switchToDarkTheme() : switchToLightTheme();
  };
  const handleLogout = () => {
    dispatch(logOut(null));
  };
  const showDrawer = () => {
    setSettingDrawerOpen(true);
  };

  const onClose = () => {
    setSettingDrawerOpen(false);
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "1":
        router.push("/profile");
        break;

      case "2":
        handleLogout();
        break;
      case "3":
        // {
        //   console.log("auth");
        //   router.push("/auth");
        // }
        dispatch(toggleLoginModal(true));
        break;
      default:
        break;
    }
  };
  const dropDownItemsWhileLoggedOut: MenuProps["items"] = [
    { label: "Нэвтрэх", key: "3", icon: <LoginOutlined /> },
  ];
  const dropDownItems: MenuProps["items"] = [
    { label: "Миний хаяг", key: "1", icon: <UserOutlined /> },
    { label: "Гарах", key: "2", icon: <LogoutOutlined /> },
  ];
  const renderUserMenu = () => (
    <Dropdown
      menu={{
        items: userInfo ? dropDownItems : dropDownItemsWhileLoggedOut,
        onClick: handleMenuClick,
      }}
    >
      <Avatar className="cursor-pointer  duration-200 ">
        {userInfo ? userInfo.firstname.slice(0, 1) : <LoginOutlined />}
      </Avatar>
    </Dropdown>
  );
  return (
    <Layout>
      <Layout.Content className="flex flex-col h-screen">
        <Layout className="h-1/12 border-b-[1px] border-gray-400 border-dashed flex items-center w-full">
          <section className="flex flex-row w-full text-lg font-bold  justify-between  px-5 py-1">
            <div className="logo flex items-center gap-2 h p-2 mr-12">
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="logo"
                objectFit="contain"
              />
              <p className="font-semibold text-xl">Admin</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              {renderUserMenu()}
              <Avatar onClick={showDrawer} className="cursor-pointer">
                <SettingOutlined />
              </Avatar>
            </div>
          </section>
        </Layout>
        <Layout className="h-11/12 flex">
          <AdminMenu />
          <Layout className="flex flex-col w-full">
            <Layout className="flex flex-col w-full h-11/12 overflow-y-auto">
              <Layout.Content className="w-full pb-[330px] md:pb-[230px]">
                {children}
              </Layout.Content>
            </Layout>
            <Layout className="h-1/12">
              <BFooter />
            </Layout>
          </Layout>
        </Layout>
      </Layout.Content>
      <Drawer
        title="Settings"
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={settingDrawerOpen}
        key={"left"}
      >
        <section className="flex flex-col gap-4">
          <section className="flex justify-between">
            <p className="">Хэл:</p>
            <Switch
              title="adasd"
              checked={lang === "en"}
              onChange={handleSwitchLang}
              checkedChildren="EN"
              unCheckedChildren="MN"
            />
          </section>
          <section className="flex justify-between">
            <p className="">Theme:</p>
            <Switch
              checked={theme === "dark"}
              value={theme === "dark"}
              onChange={handleSwitchTheme}
              checkedChildren="🌙"
              unCheckedChildren="🌞"
            />
          </section>
          <section className="flex justify-between">
            <p>Font size:</p>
            <Form.Item name="fontSize">
              <InputNumber />
            </Form.Item>
          </section>
        </section>
      </Drawer>
    </Layout>
  );
};

export default BAdminLayout;
