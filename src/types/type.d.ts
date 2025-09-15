import { ReactNode } from "react";

type CategoryType = {
  nameEn: string;
  nameMn: string;
  id: string;
  icon: StaticImageData;
};

type UserType = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  phoneNumber: string;
};

type AdminPageJsonType = {
  key: string;
  label: string;
  icon: ReactNode;
  addButton?: boolean;
  deleteButton?: boolean;
  updateButton?: boolean;
  addFormModal?: ReactNode;
  tabs?: AdminPageTabType[];
};
type AdminPageTabType = {
  title: string;
  type: TabTypesEnum;
  table: AdminPageTableType;
};
type AdminPageTableType = {
  GET: string;
  POST: string;
  PUT: string;
  columns: AdminPageTableColumnType[];
};
type AdminPageTableColumnType = {
  title: string;
  key: string;
  dataIndex: string;
};
