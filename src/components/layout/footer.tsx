import {
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

import BText from "../general/text";
import { Avatar } from "antd";

const BFooter = () => {
  return (
    <div className="border-t-[1px] h-full border-gray-400 flex items-center w-full border-dashed py-4 md:px-0 ">
      <div className=" flex flex-col md:flex-row justify-between w-full items-center gap-y-3 md:gap-y-0 px-[15%]">
        <section className="flex flex-col items-start text-sm font-bold">
          <p className=" text-center">
            <BText
              mn="Copyright © 2025 Homo deus. Бүх эрх хуулиар хамгаалагдсан"
              en="Copyright © 2025 Homo deus. All rights reserved"
            />
          </p>
        </section>
        <section className="flex flex-row gap-4  items-center justify-center md:justify-start">
          <Avatar>
            <FacebookOutlined />
          </Avatar>
          <Avatar>
            <InstagramOutlined />
          </Avatar>
          <Avatar>
            <GithubOutlined />
          </Avatar>
        </section>
      </div>
    </div>
  );
};

export default BFooter;
