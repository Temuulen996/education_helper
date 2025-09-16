"use client";
import { Divider } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const data = [
  {
    name: "Foundational Math",
    description: "Master problem solving essentials in math",
    imgUrl:
      "https://ds055uzetaobb.cloudfront.net/category-images/Foundational_Math-Q1aarP.png",
    lessons: [
      {
        name: "Mathematical Thinking",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mathematical_Thinking-er3iB2.png",
      },
      {
        name: "Visual Algebra",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/systems-of-equations-S5jb0M.png",
      },
      {
        name: "Probability and Chance",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Probability_And_Chance-XNs97j.png",
      },
    ],
  },
  {
    name: "Programming & CS",
    description: "Speak the language of computers",
    imgUrl:
      "https://ds055uzetaobb.cloudfront.net/category-images/Computer_Science-JEbqeF.png",
    lessons: [
      {
        name: "Thinking in Code",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/thinking-in-code-OuLVag.png",
      },
      {
        name: "Programming with Variables",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/creative-coding-dsGE0e.png",
      },
      {
        name: "Programming with Python",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/programming-python-aovd6L.png",
      },
    ],
  },
  {
    name: "Data Analysis",
    description: "Know your stuff in probability and data analysis",
    imgUrl:
      "https://ds055uzetaobb.cloudfront.net/category-images/Data-QPQ8Ve.png",
    lessons: [
      {
        name: "Exploring Data Visually",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/visual-exploration-p3MLwI.png",
      },
      {
        name: "Probability in Data",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/probability-fundamentals-nsVvo6.png",
      },
      {
        name: "Clustering & Classification",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Clustering-tNA7ag.png",
      },
      {
        name: "Regression",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/explaining-variation-QDWLIX.png",
      },
      {
        name: "Predicting with Probability",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/probabilistic-prediction-V4s0rR.png",
      },
    ],
  },
];
const CoursesPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="my-4">
        <div className="text-2xl font-bold">Learning Paths</div>
        <div className="text-gray-400 font-semibold">
          Step-by-step paths to mastery
        </div>
      </div>
      <section className="flex flex-col gap-6">
        {data.map((course, index) => (
          <div key={index} className="flex-col gap-4">
            <div className="flex items-center gap-6 ">
              <div>
                <Image
                  className="h-24 w-24"
                  width={500}
                  height={500}
                  src={course.imgUrl}
                  alt={course.description}
                />
              </div>
              <div className="font-bold text-xl">{course.name}</div>
              <div className="text-gray-400 text-lg">{course.description}</div>
            </div>
            <div className="flex flex-row item-center my-4 gap-4">
              {course.lessons.map((lesson, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <div className="border-[2px] border-gray-300 p-6 shadow-lg hover:scale-110 duration-200 cursor-pointer rounded-lg relative">
                    {lesson.isNew && (
                      <div className="bg-green-500 text-center text-white  rounded-full text-sm absolute top-0.5 right-0.5 px-1">
                        New
                      </div>
                    )}
                    <Image
                      onClick={() => {
                        router.push("/courses/1");
                      }}
                      className="h-24 w-24"
                      width={500}
                      height={500}
                      src={lesson.img}
                      alt={lesson.name}
                    />
                  </div>
                  <div className="font-semibold text-lg">{lesson.name}</div>
                </div>
              ))}
            </div>
            <Divider />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CoursesPage;
