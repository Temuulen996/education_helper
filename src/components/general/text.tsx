"use client";

import { useAppSelector } from "@/src/store";
import React from "react";

const BText = ({ en, mn }: BTextProps) => {
  const lang = useAppSelector((state) => state.global.lang);
  return lang === "mn" ? mn : en;
};

export default BText;
