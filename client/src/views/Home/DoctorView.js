import { Col, Table, Tag, Space, Typography } from "antd";
import React from "react";
import { GET_APPOINTMENTS } from "../../graphql/Query/Appointments/getAppointment";
import { useQuery } from "@apollo/client";
import ViewReport from "../../components/ViewReport";
const { Title, Text } = Typography;

const DoctorView = ({ user }) => {
  const [data, setData] = React.useState([]);
  const [reportModal, setReportModal] = React.useState(false);
  useQuery(GET_APPOINTMENTS, {
    fetchPolicy: "cache-and-network",
    onCompleted: ({ getAppointment }) => {
      setData(getAppointment);
    },
  });
  const columns = [
    {
      title: "Name",
      dataIndex: "full_name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Concern",
      dataIndex: "concern",
      key: "concern",
    },
    {
      title: "Status",
      dataIndex: "isChecked",
      key: "status",
      render: (_, record) => (
        <Tag color={record?.isChecked ? "blue" : "green"}>
          {record.isChecked ? "Completed" : "Pending"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => setReportModal(record)}>View Report</a>
        </Space>
      ),
    },
  ];
  return (
    <Col span={13}>
      <div className=" flex flex-col justify-center p-14 h-full -mt-9">
        <Title level={3}>Welcome Dr {user?.full_name}</Title>
        <Text>Here is your Appointments </Text>
        <Table className="mt-5" columns={columns} dataSource={data} />
      </div>
      {reportModal && (
        <ViewReport
          setVisible={setReportModal}
          isVisible={reportModal}
          data={reportModal}
          user={user}
        />
      )}
    </Col>
  );
};

export default DoctorView;
