import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";

import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex gap-2">
      <div className="h-20 w-20">
        <Image
          className="w-full h-full"
          src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          width={500}
          height={500}
        />
      </div>
      <div>
        <p className="font-bold text-md">
          Nike air zoom Progress 38 Women's running shoes
        </p>
        <p>Qty: 1 * $120.00</p>
        <p>Total: $120.00</p>
      </div>
    </div>
  );
};
const PersonalInformationStep = ({
  handleClickNext,
  handleClickPrev,
}: PersonalInformationStepProps) => {
  return (
    <>
      <section className="w-2/3 border-[0.2px] border-gray-200">
        <Form layout="vertical">
          <section className="flex flex-col ">
            <div className="flex flex-col">
              <p className="text-xl text-bold mb-4 font-bold bg-slate-700 text-white p-2">
                Contact information
              </p>
              <div className="px-2">
                <Form.Item
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please input!",
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Phone number"
                  rules={[
                    {
                      required: true,
                      message: "Please input!",
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl mb-4 font-bold bg-slate-700 text-white p-2">
                Shipping address
              </p>
              <div className="grid grid-cols-12 gap-x-2 px-2">
                <Form.Item label="First name" className="col-span-6">
                  <Input />
                </Form.Item>
                <Form.Item label="Last name" className="col-span-6">
                  <Input />
                </Form.Item>
                <Form.Item label="Company (optional)" className="col-span-12">
                  <Input />
                </Form.Item>
                <Form.Item label="Address" className="col-span-6">
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Apartment, suite, etc (optional)"
                  className="col-span-6"
                >
                  <Input />
                </Form.Item>
                <Form.Item label="City" className="col-span-12">
                  <Input />
                </Form.Item>
                <Form.Item label="Country/region" className="col-span-4">
                  <Input />
                </Form.Item>
                <Form.Item label="State" className="col-span-4">
                  <Input />
                </Form.Item>
                <Form.Item label="ZIP code" className="col-span-4">
                  <Input />
                </Form.Item>
              </div>
            </div>
          </section>
          <section className="flex gap-2 justify-end p-2">
            <Button
              onClick={handleClickPrev}
              icon={<ArrowLeftOutlined />}
              htmlType="submit"
              type="primary"
            >
              Prev
            </Button>
            <Button
              onClick={handleClickNext}
              icon={<ArrowRightOutlined />}
              htmlType="submit"
              type="primary"
            >
              Next
            </Button>
          </section>
        </Form>
      </section>
      <section className="w-1/3 flex flex-col gap-y-2 border-[0.5px] border-gray-200 h-fit">
        <section>
          <p className="text-xl mb-4 font-bold bg-slate-700 text-white p-2">
            In your bag
          </p>
          <div className="flex flex-col px-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>$120.00</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Shipping</p>
              <p>$8.00</p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Tax</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-orange-400">$128.00</p>
            </div>
          </div>
        </section>
        <Divider />
        <p className="px-2 text-xl font-bold">ARRIVES BY THU, JUN 24</p>
        <Divider />
        <section className="p-2 flex flex-col gap-2 h-40 overflow-y-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </section>
    </>
  );
};
export default PersonalInformationStep;
