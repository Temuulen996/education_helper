"use client";
import { Button, Form, Input, Select, Slider } from "antd";
import BText from "../general/text";
import { useAppDispatch, useAppSelector } from "@/src/store";
import { filterProduct } from "@/src/store/slices/productSlice";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { SearchOutlined } from "@ant-design/icons";

const ShopPageFilter = ({ handleCancel }: ShopPageFilterProps) => {
  const {
    category: { categories },
  } = useAppSelector((state) => state);
  const searchParams = useSearchParams();
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const category = searchParams!.get("category");
    form.setFieldValue("category", category?.split(","));
    dispatch(
      filterProduct({ categories: category ? category.split(",") : [] })
    );
  }, [searchParams]);

  const handleFinish = () => {
    const values = form.getFieldsValue();
    dispatch(filterProduct({ categories: values.category }));
    const params = new URLSearchParams(searchParams?.toString());
    params.set("category", values.category.join(","));
    handleCancel();
  };
  const { Option } = Select;
  return (
    <Form
      form={form}
      onFinish={handleFinish}
      className="flex flex-col justify-center"
    >
      <div>
        <h4>
          <BText en="Price" mn="Үнэ" />
        </h4>
        <Slider
          range
          step={10}
          defaultValue={[20, 50]}
          onChange={() => {}}
          onChangeComplete={() => {}}
        />
      </div>
      <div>
        <h4>
          <BText en="Product name" mn="Бүтээгдэхүүний нэр" />
        </h4>
        <Form.Item name="product_name">
          <Input />
        </Form.Item>
      </div>

      <div className="flex flex-col">
        <h4>
          <BText en="Category" mn="Ангилал" />
        </h4>
        <Form.Item name="category">
          <Select mode="multiple">
            {categories.map((category, index) => (
              <Option key={category.id + index} value={category.id}>
                <BText en={category.nameEn} mn={category.nameMn} />
              </Option>
            ))}
          </Select>
        </Form.Item>
      </div>
      <Form.Item className="flex justify-end md:justify-start">
        <Button type="primary" htmlType="submit" icon={<SearchOutlined />}>
          <BText en="Filter" mn="Шүүх" />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ShopPageFilter;
