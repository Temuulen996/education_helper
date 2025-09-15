import { adminPageJson } from "@/src/json/page-json";
import MainPages from "@/src/pages/admin/main-pages";

const AdminPage = async ({ params }: AdminPageProps) => {
  const res = await params;
  const pageJson = adminPageJson.find((json) => json.key === res?.pageId);
  return <MainPages pageJson={pageJson} />;
};

export default AdminPage;
