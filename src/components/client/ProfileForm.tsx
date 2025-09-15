"use client";
import { Button, Form, Input } from "antd";
import BText from "../general/text";
import { useAppSelector } from "@/src/store";
import Image from "next/image";

const ProfileForm = () => {
  const { lang } = useAppSelector((state) => state.global);
  const placeHolderText = (en: string, mn: string): string => {
    return lang === "en" ? en : mn;
  };
  return (
    <div className="flex flex-col ">
      <p className="flex justify-center mb-4 text-2xl font-semibold">
        <BText mn="Хувийн мэдээлэл" en="Personal information" />
      </p>
      <Form className="grid grid-cols-6 gap-2">
        <div className="col-span-6  flex justify-center mb-4">
          <Image
            className="w-36 h-36 border-[4px] border-blue-500 rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={2000}
            height={1000}
            alt="profile"
            objectFit="cover"
          />
        </div>
        <Form.Item className="col-span-3">
          <Input placeholder={placeHolderText("First name", "Нэр")} />
        </Form.Item>
        <Form.Item className="col-span-3">
          <Input placeholder={placeHolderText("Last name", "Овог")} />
        </Form.Item>
        <Form.Item className="col-span-5 ">
          <Input disabled placeholder={placeHolderText("Email", "Email")} />
        </Form.Item>
        <Form.Item className="col-span-1">
          <Button type="default" className="w-full">
            <BText en="Change email" mn="Email солих" />
          </Button>
        </Form.Item>
        <Form.Item className="col-span-2">
          <Input placeholder={placeHolderText("City province", "Аймаг/хот")} />
        </Form.Item>
        <Form.Item className="col-span-2">
          <Input placeholder={placeHolderText("District", "Дүүрэг/сум")} />
        </Form.Item>
        <Form.Item className="col-span-2">
          <Input placeholder={placeHolderText("Subdistrict", "Баг/Хороо")} />
        </Form.Item>
        <Form.Item className="col-span-2">
          <Input placeholder={placeHolderText("Town", "Хотхон (заавал биш)")} />
        </Form.Item>
        <Form.Item className="col-span-2">
          <Input placeholder={placeHolderText("Apart", "Байр (заавал биш)")} />
        </Form.Item>
        <Form.Item className="col-span-2">
          <Input
            placeholder={placeHolderText("Door number", "Тоот (заавал биш)")}
          />
        </Form.Item>
        <Form.Item className="col-span-6">
          <Input
            placeholder={placeHolderText(
              "Detailed address",
              "Нарийвчилсан хаяг"
            )}
          />
        </Form.Item>
        <Form.Item className="col-span-1">
          <Button htmlType="submit" type="primary" className="w-full">
            <BText en="Save" mn="Хадгалах" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProfileForm;
