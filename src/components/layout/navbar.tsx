import Image from "next/image";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/src/store";

import { Link, usePathname, useRouter } from "@/src/i18n/navigation";
import { Avatar, Badge, Button, Dropdown, MenuProps, Switch } from "antd";

import {
  KeyOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  changeLanguage,
  changeTheme,
  logOut,
  toggleCartDrawer,
  toggleLoginModal,
} from "@/src/store/slices/globalSlice";

import Logo from "../../assets/logo/education_logo.png";

import BText from "../general/text";

const BNavbar: React.FC<BNavbarProps> = ({
  showSideBar,
  closeSideBar,
  menuItems,
}: BNavbarProps) => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const { lang, cartCount, theme, userInfo } = useAppSelector(
    (state) => state.global
  );
  const { categories } = useAppSelector((state) => state.category);

  const handleLogout = () => {
    dispatch(logOut(null));
  };

  const handleSwitchLang = (checked: boolean) => {
    console.log("pathname", pathname);
    const locale = checked ? "en" : "mn";
    router.replace(pathname, { locale });
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
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    closeSideBar();
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
  const DropDownProps = {
    dropDownItems,
    onClick: handleMenuClick,
  };
  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <Link
        href={item.key}
        key={item.key + index}
        className="group relative inline-block"
      >
        <span className="relative text-sm ">
          <BText en={item.label} mn={item.label} />
        </span>
        <span
          className={`absolute bottom-0 left-0 h-[1px] dark:bg-white bg-black  w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 ${
            pathname === item.key ? "scale-x-100" : ""
          }`}
        />
      </Link>
    ));

  const renderCategoryItems = () =>
    categories.map((category, index) => (
      <Link
        key={category.id + index}
        href={`/shop?category=${category.id}`}
        className="no-underline duration-200 flex flex-row items-center gap-1"
      >
        <Image
          objectFit="contain"
          alt="drink"
          src={category.icon}
          height={20}
          width={20}
        />
        <BText en={category.nameEn} mn={category.nameMn} />
      </Link>
    ));

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
    <div className="shadow-md w-full h-full ">
      <section className="border-b-[1px] text-lg font-bold flex flex-row justify-end py-1 px-[15%] ">
        <div className="flex flex-row gap-2 items-center">
          <Switch
            checked={theme === "dark"}
            value={theme === "dark"}
            onChange={handleSwitchTheme}
            checkedChildren="🌙"
            unCheckedChildren="🌞"
          />
        </div>
      </section>

      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center px-[15%] p-2">
        <div className="flex items-center">
          <Link href="/">
            <div className="logo flex items-center gap-2 h mr-12 cursor-pointer">
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="logo"
                objectFit="contain"
              />
              <p className="font-semibold text-xl">Education</p>
            </div>
          </Link>
          <section className="flex flex-row gap-3">{renderMenuItems()}</section>
        </div>

        <div className="flex flex-row justify-between gap-4 items-center ">
          <div className="flex flex-row items-center gap-2">
            <div className="py-1 px-4 border-2 flex items-center justify-between gap-3 border-gray-300 rounded-full  font-bold  cursor-pointer  duration-200">
              <div className="text-lg ">0</div>
              <ThunderboltOutlined style={{ fontSize: "20px" }} />
            </div>
            <div className="py-1 px-4 border-2 flex items-center justify-between gap-3 border-gray-300 rounded-full  font-bold  cursor-pointer  duration-200">
              <div className="text-lg ">0</div>
              <KeyOutlined style={{ fontSize: "20px" }} />
            </div>
            {renderUserMenu()}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center px-5 md:hidden">
        <Link href="/">
          <div className="logo flex items-center gap-2 hover:bg-gray-300 duration-200 p-2 mr-12 rounded-full cursor-pointer">
            <Image
              src={Logo}
              width={50}
              height={50}
              alt="logo"
              objectFit="contain"
            />
            <p className="font-semibold text-xl">Bakery</p>
          </div>
        </Link>
        <div className="flex flex-row justify-between gap-4 items-center">
          <div className="flex flex-row items-center gap-2">
            <Badge count={cartCount}>
              <Avatar
                onClick={() => {
                  dispatch(toggleCartDrawer(true));
                }}
                className="cursor-pointer "
                icon={<ShoppingCartOutlined />}
              />
            </Badge>
            {renderUserMenu()}
          </div>

          <Button
            className="md:hidden text-2xl "
            type="text"
            icon={<MenuOutlined />}
            onClick={showSideBar}
          />
        </div>
      </div>
    </div>
  );
};

export default BNavbar;
