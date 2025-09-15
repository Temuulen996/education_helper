"use client";

import * as React from "react";
import { ConfigProvider, theme } from "antd";
import AntdStyledComponentsRegistry from "../utils/AntdComponentsRegistry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { useAppSelector } from "../store";
import { themeValues } from "../utils/theme";
import { App as AntdApp } from "antd";
export function RootProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme: darkTheme } = useAppSelector((state) => state.global);
  return (
    <AntdStyledComponentsRegistry>
      <AntdRegistry>
        <ConfigProvider
          theme={{
            algorithm:
              darkTheme === "dark"
                ? theme.darkAlgorithm
                : theme.defaultAlgorithm,
            token:
              darkTheme === "dark"
                ? themeValues.darkToken
                : themeValues.lightToken,
          }}
        >
          <AntdApp>{children} </AntdApp>
        </ConfigProvider>
      </AntdRegistry>
    </AntdStyledComponentsRegistry>
  );
}
