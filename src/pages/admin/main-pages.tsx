"use client";

import { TabTypesEnum } from "@/src/types/enums";
import { AdminPageJsonType, AdminPageTabType } from "@/src/types/type";
import { AndroidOutlined } from "@ant-design/icons";
import { Table, Tabs } from "antd";
import { useEffect, useState } from "react";

interface MainPagesProps {
  pageJson: AdminPageJsonType | undefined;
}

const ChildrenRenderer = (tab: AdminPageTabType, key: string) => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    fetch(tab.table.GET)
      .then((response: any) => response.json())
      .then((data) => setData(data));
  }, [tab]);
  if (tab.type === TabTypesEnum.Table) {
    return (
      <Table
        key={key}
        className="h-auto"
        dataSource={data}
        columns={tab.table.columns}
      />
    );
  }
  if (tab.type === TabTypesEnum.Form) {
    return <div>form</div>;
  }
};
const MainPages = ({ pageJson }: MainPagesProps) => {
  return (
    <div className="h-full">
      <Tabs
        tabBarStyle={{ marginBottom: 0, paddingLeft: 4 }}
        defaultActiveKey="2"
        items={pageJson?.tabs?.map((tab: AdminPageTabType, i: number) => {
          return {
            key: tab.title + i,
            label: tab.title,
            children: ChildrenRenderer(tab, tab.title + i),
            icon: <AndroidOutlined />,
          };
        })}
      />
    </div>
  );
};

export default MainPages;
