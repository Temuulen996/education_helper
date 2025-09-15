import { AdminPageTableType } from "../types/type";

const customTable: AdminPageTableType = {
  GET: "https://jsonplaceholder.typicode.com/todos",
  POST: "",
  PUT: "",
  columns: [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      key: "completed",
    },
  ],
};
const customTable2: AdminPageTableType = {
  GET: "https://jsonplaceholder.typicode.com/posts",
  POST: "",
  PUT: "",
  columns: [
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
  ],
};
export { customTable, customTable2 };
