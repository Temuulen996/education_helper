"use client";

import { Button } from "antd";
import React from "react";
import BText from "./text";

const BButton = ({ label, onClick, className }: BButtonProps) => {
  return (
    <Button onClick={onClick} className={`${className}`} type="primary">
      {label}
    </Button>
  );
};

export default BButton;
