"use client";

import { Avatar, List } from "antd";
import { useEffect, useState } from "react";
import BText from "../general/text";
import { OrderedListOutlined } from "@ant-design/icons";
interface DataType {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
const ProfileOrderList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div className="flex flex-col">
      <p className="flex justify-center mb-4 text-2xl font-semibold">
        <BText mn="Захиалгын түүх" en="Order history" />
      </p>
      <List
        className="h-[400px] overflow-y-scroll text-white"
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.email} className="mr-4 ">
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<div>{item.name.last}</div>}
              description={<div>{item.email}</div>}
            />

            <OrderedListOutlined />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProfileOrderList;
