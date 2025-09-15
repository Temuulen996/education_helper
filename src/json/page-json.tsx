import {
  DashboardFilled,
  ProductFilled,
  UserOutlined,
} from "@ant-design/icons";

import { customTable, customTable2 } from "./tables-json";
import { AdminPageJsonType } from "../types/type";
import { TabTypesEnum } from "../types/enums";

export const adminPageJson: AdminPageJsonType[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <DashboardFilled />,
    tabs: [
      { title: "User", table: customTable, type: TabTypesEnum.Table },
      { title: "tab2", table: customTable2, type: TabTypesEnum.Table },
    ],
  },
  {
    key: "1",
    label: "User",
    icon: <UserOutlined />,
    tabs: [
      { title: "User", table: customTable, type: TabTypesEnum.Table },
      { title: "tab2", table: customTable2, type: TabTypesEnum.Table },
    ],
  },

  {
    key: "2",
    label: "Product",
    icon: <ProductFilled />,
    tabs: [
      { title: "tab1", table: customTable, type: TabTypesEnum.Table },
      { title: "tab2", table: customTable2, type: TabTypesEnum.Table },
    ],
  },
];
