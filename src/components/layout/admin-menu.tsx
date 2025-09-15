import { useRouter } from "@/src/i18n/navigation";
import { adminPageJson } from "@/src/json/page-json";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

type MenuItem = Required<MenuProps>["items"][number];
const AdminMenu = () => {
  const router = useRouter();
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`/admin/${e.key}`);
  };
  const items: MenuItem[] = adminPageJson.map((json) => json);

  return (
    <Sider collapsible defaultCollapsed>
      <Menu
        className="h-full"
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default AdminMenu;
