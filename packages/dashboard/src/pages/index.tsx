import React, { Suspense } from 'react';
import { Space, Row, Col } from 'antd';
import { PageLoading } from '@ant-design/pro-layout';

const IntroduceRow = React.lazy(() => import('./components/introduce-row'));
const SalesCard = React.lazy(() => import('./components/sales-card'));
const TopSearch = React.lazy(() => import('./components/top-search'));
const ProportionSales = React.lazy(() => import('./components/proportion-sales'));

const Dashboard: React.FC = () => {
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Suspense fallback={<PageLoading />}>
        <IntroduceRow  />
      </Suspense>

      <Suspense fallback={null}>
        <SalesCard />
      </Suspense>

      <Row gutter={16}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Suspense fallback={null}>
            <TopSearch />
          </Suspense>
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <Suspense fallback={null}>
            <ProportionSales />
          </Suspense>
        </Col>
      </Row>
    </Space>
  )
}

export default Dashboard;
