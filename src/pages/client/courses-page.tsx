"use client";
import { Divider } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const data = [
  {
    name: "Математикийн үндсэн суурь",
    description: "Математикт асуудал шийдвэрлэх үндсэн арга барилыг эзэмших",
    imgUrl:
      "https://ds055uzetaobb.cloudfront.net/category-images/Foundational_Math-Q1aarP.png",
    lessons: [
      {
        name: "Математикийн Сэтгэхүй",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mathematical_Thinking-er3iB2.png",
      },
      {
        name: "Шугаман Алгебр",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/systems-of-equations-S5jb0M.png",
      },
      {
        name: "Магадлал ба Санамсаргүй байдлын Тооцоо",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Probability_And_Chance-XNs97j.png",
      },
    ],
  },
  {
    name: "Програмчлал & Код",
    description: "Программын анхан шатны мэдлэг сурах",
    imgUrl:
      "https://ds055uzetaobb.cloudfront.net/category-images/Computer_Science-JEbqeF.png",
    lessons: [
      {
        name: "Кодоор Сэтгэх",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/thinking-in-code-OuLVag.png",
      },
      {
        name: "Програмчлалын хувьсагчид ба өгөгдлийн бүтэц",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/creative-coding-dsGE0e.png",
      },
      {
        name: "Python Хэлээр Програмчлал хийх",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/programming-python-aovd6L.png",
      },
    ],
  },
  {
    name: "Дата Анализ",
    description: "Магадлал ба дата анализын талаар мэдлэгтэй болох",
    imgUrl:
      "https://ds055uzetaobb.cloudfront.net/category-images/Data-QPQ8Ve.png",
    lessons: [
      {
        name: "Мэдээллийг Визуалчлах",
        isNew: true,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/visual-exploration-p3MLwI.png",
      },
      {
        name: "Магадлалын Дата",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/probability-fundamentals-nsVvo6.png",
      },
      {
        name: "Бүлэглэлт ба Ангилах",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/Clustering-tNA7ag.png",
      },
      {
        name: "Регрессийн Анализ",
        isNew: false,
        img: "https://ds055uzetaobb.cloudfront.net/brioche/chapter/explaining-variation-QDWLIX.png",
      },
      {
        name: "Магадлал ашиглан Урьдчилан Төсөөлөх",
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
        <div className="text-2xl font-bold">Суралцах замууд</div>
        <div className="text-gray-400 font-semibold">
          Хоцрогдлыг арилгах, алхам алхмаар мэдлэг олгох
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
                <div
                  key={idx}
                  className="flex flex-col items-center gap-4 h-52 w-64"
                >
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
