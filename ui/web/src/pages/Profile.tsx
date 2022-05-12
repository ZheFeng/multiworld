import React, { FC } from 'react';
import { Typography } from 'antd';

import MainLayout from "../layouts/MainLayout";

const { Title } = Typography;

const Profile: FC = () => {
  return (
    <MainLayout>
        <Title>Multi World: Profile</Title>
    </MainLayout>
  );
}
export default Profile;