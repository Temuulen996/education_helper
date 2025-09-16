"use client";
import { ExperimentOutlined, FileDoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import global from "../../../../../public/globe.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle, Lock, Unlock } from "lucide-react";
import {useRouter} from "next/navigation";
const Index = () => {
  const [active, setActive] = useState("Finding Half");
  const router = useRouter();
  const levels1 = [
    { name: "Аравтын ба энгийн бутархай", status: "done" },
    { name: "Тоон олонлог язгуур", status: "unlock" },
    { name: "Илэрхийлэл тэгшитгэл", status: "locked" },
    { name: "Өнцөг дүрс байгуулалт", status: "locked" },
    { name: "Илэрхийлэл тэгшитгэл", status: "locked" },
  ];

  const levels2 = [
    { name: "Тоон ба үсэгт илэрхийлэл", status: "done" },
    { name: "Алгебрийн илэрхийлэл", status: "unlock" },
    { name: "Талбай эзлэхүүн", status: "locked" },
    { name: "Дараалал функц", status: "locked" },
    { name: "Хэмжигдэхүүн", status: "locked" },
  ];

  const levels3 = [
    { name: "Хэмжигдэхүүн", status: "locked" },
    { name: "Цэгэн диаграмм", status: "locked" },
    { name: "Хурл хугацааны график", status: "locked" },
    { name: "Шугаман функцын урвуу функц", status: "locked" },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-10 p-5">
      <div className="w-full sm:w-3/4 flex flex-wrap items-start pt-10 gap-10">
        <div className="w-full sm:w-1/3 flex flex-col border-gray-300 border rounded-2xl p-5 gap-5">
          <img
            alt=""
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mathematical_Thinking-er3iB2.png"
            loading="lazy"
            className="w-28 h-28 mx-auto"
          />
          <div className="flex flex-col gap-3 text-center">
            <span className="text-xl font-semibold">Математикийн Сэтгэхүй</span>
            <span className="text-sm text-gray-500">
              Тоо бодох, тэгшитгэл шийдэх болон олон төрлийн тоон асуудал шийдэх
              чадварыг сурах.
            </span>
          </div>
          <div className="flex gap-3 justify-center">
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
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-2xl font-bold mb-6">Дасгал ажлууд</h1>

            <div className="mb-4">
              <span className="text-blue-500 font-semibold text-xl">
                Анхан шат
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {levels1.map((level, idx) => (
                <motion.div
                  key={idx}
                  whileHover={level.status === "done" ? { scale: 1.05 } : {}}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() =>{
                    level.status === "done" && setActive(level.name)
                    router.push(`/courses/1/math-task`)
                  }}
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
            <div className="my-4">
              <span className="text-blue-500 font-semibold text-xl">
                Дунд шат
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {levels2.map((level, idx) => (
                <motion.div
                  key={idx}
                  whileHover={level.status === "done" ? { scale: 1.05 } : {}}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() =>
                    level.status === "unlock" && setActive(level.name)
                  }
                >
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-full shadow-xl border-2 transition-all duration-200
                      ${"border-gray-300 bg-gray-100 opacity-50"}`}
                  >
                    <Lock className="text-gray-400" size={30} />
                  </div>
                  <p className={`mt-2 text-sm font-medium ${"text-gray-400"}`}>
                    {level.name}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="my-4">
              <span className="text-blue-500 font-semibold text-xl">
                Ахисан шат
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {levels3.map((level, idx) => (
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
                      ${"border-gray-300 bg-gray-100 opacity-50"}`}
                  >
                    <Lock className="text-gray-400" size={30} />
                  </div>
                  <p className={`mt-2 text-sm font-medium ${"text-gray-400"}`}>
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
