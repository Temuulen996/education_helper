"use client";

import * as React from "react";
import { ConfigProvider, theme } from "antd";
import AntdStyledComponentsRegistry from "../utils/AntdComponentsRegistry";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntdStyledComponentsRegistry>
      <AntdRegistry>
        <ConfigProvider>{children}</ConfigProvider>
      </AntdRegistry>
    </AntdStyledComponentsRegistry>
  );
}
