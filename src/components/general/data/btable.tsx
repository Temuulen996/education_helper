import { Table } from "antd";

const BTable: React.FC<BTableProps> = ({ dataSource, columns }) => {
  return <Table columns={columns} dataSource={dataSource} />;
};

export default BTable;
