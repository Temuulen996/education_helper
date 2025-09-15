import { Tabs } from "antd";

import { OrderedListOutlined, ProfileFilled } from "@ant-design/icons";
import BText from "../../components/general/text";
import ProfileForm from "../../components/client/ProfileForm";
import ProfileOrderList from "../../components/client/ProfileOrderList";

const ProfilePage = () => {
  const tabs = [
    {
      label: (
        <span>
          <BText mn="Хувийн мэдээлэл" en="Personal information" />
        </span>
      ),
      key: "1",
      icon: <ProfileFilled />,
      children: <ProfileForm />,
    },
    {
      label: (
        <span>
          <BText mn="Захиалгын түүх" en="Order history" />
        </span>
      ),
      key: "2",
      children: <ProfileOrderList />,
      icon: <OrderedListOutlined />,
    },
  ];
  return (
    <div className="mx-[15%]  py-4 grid grid-cols-12">
      <Tabs
        rootClassName=" flex"
        popupClassName=" flex"
        className="col-span-12 h-auto flex"
        defaultActiveKey="1"
        tabPosition="top"
        items={tabs.map((tab, i) => tab)}
      />
    </div>
  );
};

export default ProfilePage;
