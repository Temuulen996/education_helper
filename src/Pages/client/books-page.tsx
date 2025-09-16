"use client";

import Image from "next/image";
import { useState } from "react";
import { books, grades } from "../../assets/data/books-page-data";
import { ReactReader } from "react-reader";
const BooksPage = () => {
  const [selectedGrade, setSelectedGrade] = useState<number | null>(1);
  const [location, setLocation] = useState<string | number>(0);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between w-full">
        {grades.map((grade) => (
          <button
            type="button"
            onClick={() => {
              setSelectedGrade(grade.value);
            }}
            key={grade.value}
            className={`text-center font-semibold p-2 border-[1px] rounded-full shadow-md border-green-400 hover:scale-105 cursor-pointer duration-200 ${
              selectedGrade === grade.value
                ? "bg-green-400 text-white"
                : "bg-white text-black"
            }`}
          >
            {grade.label}
          </button>
        ))}
      </div>
      <div className="bg-gray-300 p-4  font-semibold rounded-full">
        Нүүр / 1-р анги
      </div>
      <div className="flex flex-row flex-wrap">
        {books.map((book) => {
          if (book.grade !== selectedGrade) return null;
          return (
            <div
              key={book.name + book.grade}
              className="flex flex-col p-4 border-gray-300 w-48 h-56"
            >
              <Image
                src={book.img}
                alt={book.name}
                className="w-38 h-46 object-cover mb-2 hover:scale-110 duration-200 cursor-pointer"
                width={152}
                height={184}
              />
              <div
                className="font-semibold text-wrap
              "
              >
                {book.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BooksPage;
