"use client";
import { Button, Divider, Drawer, Layout } from "antd";
import React, { useEffect, useState } from "react";
import BNavbar from "./navbar";
import BFooter from "./footer";
import LoginModal from "../client/LoginModal";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/src/store";
import { toggleCartDrawer } from "@/src/store/slices/globalSlice";
import BText from "../general/text";
import {
  CheckCircleOutlined,
  DeleteFilled,
  HomeFilled,
  HomeOutlined,
  ShopFilled,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, usePathname, useRouter } from "@/src/i18n/navigation";

const { Content } = Layout;
const BLayout: React.FC<BLayoutProps> = ({ children }: BLayoutProps) => {
  const [isClient, setIsClient] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const visibleCartDrawer = useAppSelector(
    (state) => state.global.visibleCartDrawer
  );

  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const showSideBar = () => setSideBar(true);
  const closeSideBar = () => setSideBar(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const menuItems = [
    { label: "Нүүр", key: "/" },
    { label: "Сургалтууд", key: "/courses" },
    { label: "Холбоо барих", key: "/contact" },
  ];
  const mobileBottomTabs = [
    {
      label: "Нүүр",
      key: "/",
      icon: <HomeOutlined className="" />,
      iconPressed: <HomeFilled className="text-blue-500" />,
    },
    {
      label: "Сургалтууд",
      key: "/shop",
      icon: <ShopOutlined />,
      iconPressed: <ShopFilled />,
    },
    {
      label: "Нүүр хуудас",
      key: "/profile",
      icon: <UserOutlined />,
      iconPressed: <UserOutlined className="text-blue-500" />,
    },
  ];
  const handleClickCheckOut = () => {
    router.push("/checkout");
    handleCloseCardDrawer();
  };
  const handleCloseCardDrawer = () => {
    dispatch(toggleCartDrawer(false));
  };
  return (
    <Layout className="mx-0 gap-4 h-screen text-foreground">
      <Content className="flex flex-col h-full">
        <div className="h-auto">
          <BNavbar
            showSideBar={showSideBar}
            closeSideBar={closeSideBar}
            menuItems={menuItems}
          />
        </div>
        <div className="overflow-auto h-10/12 px-[5%] py-4">
          <div>{children}</div>
        </div>
        <div className="h-1/12 hidden md:block">
          <BFooter />
        </div>
        <div className="h-1/12 md:hidden block">
          <div className="bg-yellow-300 w-full h-full flex justify-around">
            {mobileBottomTabs.map((item, index) => (
              <Link href={item.key} key={item.key + index}>
                <div
                  key={item.key + index}
                  className="h-full w-1/3 flex justify-center items-center"
                >
                  {new RegExp(item.key).exec(pathname)
                    ? item.iconPressed
                    : item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Drawer
          title={<BText mn="Сагс" en="Cart" />}
          onClose={handleCloseCardDrawer}
          open={visibleCartDrawer}
        >
          <div className="">
            <div className=" flex h-24">
              <div className="w-1/3 ">
                <Image
                  className="h-full w-full"
                  src="https://plus.unsplash.com/premium_photo-1679064287823-fbd549bf47dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={10000}
                  height={10000}
                  alt="Cart item"
                  objectFit="contain"
                />
              </div>
              <div className="flex justify-between w-2/3">
                <div className="w-full flex flex-col pl-2 justify-between">
                  <p className="text-xl font-semibold ">Bread</p>
                  <p className="text-md font-bold ">2400$</p>
                </div>
                <div>
                  <Button onClick={() => {}} danger icon={<DeleteFilled />}>
                    Хасах
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Divider />

          <div className="absolute bottom-4 w-full flex flex-col items-center">
            <Divider />
            <Button
              onClick={handleClickCheckOut}
              type="primary"
              className="w-1/3"
              icon={<CheckCircleOutlined />}
            >
              <BText en="Checkout" mn="Төлбөр төлөх" />
            </Button>
          </div>
        </Drawer>
        <Drawer placement="left" onClose={closeSideBar} open={sideBar}>
          <div className="flex flex-col space-y-4 ">
            {menuItems.map((item, index) => (
              <Link href={item.key} key={item.key + index}>
                <div
                  key={item.key}
                  className={`text-md pb-1 border-blue-400 w-[50%] ${
                    pathname === item.key ? "border-b-[1px]" : ""
                  }`}
                >
                  <BText en={item.label} mn={item.label} />
                </div>
              </Link>
            ))}
          </div>
        </Drawer>
      </Content>
    </Layout>
  );
};

export default BLayout;
