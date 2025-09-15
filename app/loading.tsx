import { Spin } from "antd";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
}
