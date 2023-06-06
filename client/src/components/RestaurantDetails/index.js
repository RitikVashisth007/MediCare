import { Card, Image } from "antd";
import React from "react";

const index = ({ restaurant }) => {
  return (
    <Card
      style={{ width: 800 }}
      cover={<img alt={restaurant?.name} src={restaurant?.cover_pic} />}
      //   actions={[
      //     <SettingOutlined key="setting" />,
      //     <EditOutlined key="edit" />,
      //     <EllipsisOutlined key="ellipsis" />,
      //   ]}
    >
      <Card.Meta title={restaurant?.name} description={restaurant?.address} />
    </Card>
  );
};

export default index;
