import { FieldTimeOutlined } from "@ant-design/icons";

const lessons = [
  {
    number: 1,
    title: "Lesson 1",
    lenth: 18,
  },
  {
    number: 2,
    title: "Lesson 2",
    lenth: 25,
  },
  {
    number: 3,
    title: "Lesson 3",
    lenth: 30,
  },
  {
    number: 4,
    title: "Lesson 4",
    lenth: 15,
  },
  {
    number: 5,
    title: "Lesson 5",
    lenth: 20,
  },
  {
    number: 6,
    title: "Lesson 6",
    lenth: 22,
  },
  {
    number: 7,
    title: "Lesson 7",
    lenth: 28,
  },
];
const VideoCoursePage = () => {
  return (
    <div className="flex flex-row gap-10">
      <div className="w-9/12 flex flex-col gap-4">
        <iframe
          className="rounded-md"
          width="1000"
          height="500"
          src="https://www.youtube.com/embed/G0Di8DP9f8w" // Replace with your video ID
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
        <div>
          <div className="text-2xl font-bold">
            Жимс хүнсний ногооны ашиг шим 1
          </div>
        </div>
      </div>
      <div className="border-[1px] border-gray-200 w-3/12 p-2 rounded-md">
        {lessons.map((lesson) => (
          <div
            key={lesson.number}
            className="hover:bg-gray-400 cursor-pointer rounded-md p-1"
          >
            <div className="text-xl font-semibold">
              {lesson.number}. {lesson.title}
            </div>
            <div className="flex flex-row items-center gap-2 ml-4">
              <div>
                <FieldTimeOutlined />
              </div>
              <div>{lesson.lenth} mins</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCoursePage;
