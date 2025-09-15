import { ExperimentOutlined, FileDoneOutlined } from "@ant-design/icons";
import Image from "next/image";
import global from "../../../..//public/globe.svg";

const Index = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center gap-5 p-5">
      <div className="w-2/4 flex items-start pt-10">
        <div className="w-1/2 flex flex-col border-gray-300 border rounded-2xl p-5 gap-5">
          <Image src={global} alt="global" width={72} height={16} priority />
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

        <div className="w-1/2 flex flex-col items-center bg-white">
          {/* Level Header */}
          <div className="border-2 border-blue-400 rounded-2xl px-10 py-4 mb-16 flex flex-col items-center shadow-sm">
            <span className="text-blue-500 font-semibold text-sm tracking-widest mb-1">
              LEVEL 1
            </span>
            <span className="text-xl font-semibold">Visualize Fractions</span>
          </div>

          {/* Steps */}
          <div className="flex flex-col items-center gap-20">
            {/* Active Step */}
            <div className="flex flex-col items-center">
              {/* Animated Icon */}
              <div className="relative mb-2 w-32 h-32 flex items-center justify-center">
                {/* Ripple Animation */}
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute w-28 h-28 rounded-full border-4 border-blue-300 opacity-60 animate-ripple"></span>
                  <span className="absolute w-20 h-20 rounded-full border-4 border-blue-400 opacity-80 animate-ripple2"></span>
                  <span className="absolute w-12 h-12 rounded-full border-2 border-blue-200 opacity-80"></span>
                </span>
                {/* Center Square */}
                <span className="absolute w-3 h-3 bg-blue-400 rounded-sm z-10"></span>
                {/* Green Shape */}
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  className="z-20"
                >
                  <g>
                    <path
                      d="M28 6 Q38 6 44 16 Q50 28 44 40 Q38 50 28 50 Q18 50 12 40 Q6 28 12 16 Q18 6 28 6Z"
                      fill="#4ADE80"
                    />
                    <rect
                      x="32"
                      y="12"
                      width="10"
                      height="10"
                      rx="2"
                      fill="white"
                    />
                    <rect
                      x="32"
                      y="12"
                      width="5"
                      height="5"
                      rx="1"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
              <span className="text-lg font-medium">Finding Half</span>
            </div>

            {/* Disabled Step */}
            <div className="flex flex-col items-center opacity-40">
              {/* Gray icon */}
              <div className="relative mb-2">
                <div className="w-10 h-10 bg-gray-300 rotate-45 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gray-500 rotate-[-45deg]"></div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="w-16 h-16 rounded-full border-4 border-gray-300"></div>
                </div>
              </div>
              <span className="text-lg font-medium text-gray-400">
                Combining Parts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
