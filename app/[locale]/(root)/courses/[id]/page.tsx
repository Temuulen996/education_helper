"use client";
import { ExperimentOutlined, FileDoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import global from "../../../../../public/globe.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, Lock, Unlock } from "lucide-react";
const Index = () => {
  const [active, setActive] = useState("Finding Half");

  const levels = [
    { name: "Finding Half", status: "done" },
    { name: "Combining Parts", status: "unlock" },
    { name: "Splitting Parts", status: "locked" },
  ];
  return (
    <div className="w-full  flex flex-col items-center gap-5 p-5">
      <div className="w-2/4 flex items-start pt-10 gap-10">
        <div className="w-1/2 flex flex-col border-gray-300 border rounded-2xl p-5 gap-5">
          <img
            alt=""
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mathematical_Thinking-er3iB2.png"
            loading="lazy"
            className="w-28 h-28"
          />
          <div className="flex flex-col gap-3">
            <span className="text-xl font-semibold ">
              Математикийн Сэтгэхүй
            </span>
            <span className="text-sm text-gray-500">
              Тоо бодох, тэгшитгэл шийдэх болон олон төрлийн тоон асуудал шийдэх
              чадварыг сурах.
            </span>
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <FileDoneOutlined />
              <span className="text-sm text-gray-500">5 Сэдэв</span>
            </div>
            <div className="flex items-center gap-2">
              <ExperimentOutlined />
              <span className="text-sm text-gray-500">10 даалгавар</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="flex flex-col items-center gap-8 p-8">
            <h1 className="text-2xl font-bold mb-6">Visualize Fractions</h1>

            <div className="flex flex-col items-center gap-10">
              {levels.map((level, idx) => (
                <motion.div
                  key={idx}
                  whileHover={level.status === "done" ? { scale: 1.05 } : {}}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() =>
                    level.status === "done" && setActive(level.name)
                  }
                >
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-full shadow-xl border-2 transition-all duration-200
${
  level.status === "done"
    ? "border-green-500 bg-green-100"
    : level.status === "unlock"
    ? "border-blue-500 bg-blue-100"
    : "border-gray-300 bg-gray-100 opacity-50"
}`}
                  >
                    {level.status === "done" ? (
                      <CheckCircle className="text-green-700" size={40} />
                    ) : level.status === "unlock" ? (
                      <Unlock className="text-gray-400" size={30} />
                    ) : (
                      <Lock className="text-gray-400" size={30} />
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm font-medium ${
                      level.status === "done" ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {level.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
