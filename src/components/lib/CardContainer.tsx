import * as React from 'react';
import { Card, Avatar, Col } from 'antd';

export interface CardContainerProps {}
const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
  { id: 3, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 4, title: 'Installation', content: 'You can install React from npm.' },
  { id: 5, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 6, title: 'Installation', content: 'You can install React from npm.' }
];
const { Meta } = Card;
export default class CardContainer extends React.Component<CardContainerProps, any> {
  public render() {
    const content = posts.map(post => {
      return (
        <Col key={post.id} sm={1} md={6} lg={6} xl={6} style={{ marginBottom: '1rem' }}>
          <Card
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            // actions={[
            //   <Icon type="setting" />,
            //   <Icon type="edit" />,
            //   <Icon type="ellipsis" />,
            // ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={post.title}
              description={post.content}
            />
          </Card>
        </Col>
      );
    });
    return <div>{content}</div>;
  }
}
