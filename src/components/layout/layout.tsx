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
    { label: "Сургалтууд", key: "/courses" },
    { label: "Сурах бичиг", key: "/books" },
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
    <Layout className=" gap-4 h-screen text-foreground">
      <Content className="flex flex-col h-full">
        <div className="h-auto ">
          <BNavbar
            showSideBar={showSideBar}
            closeSideBar={closeSideBar}
            menuItems={menuItems}
          />
        </div>
        <div className="overflow-auto h-10/12 px-[15%] py-4 ">
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
