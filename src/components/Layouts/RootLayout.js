import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;



const RootLayout = ({ children }) => {



  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />

      </Header>



      <Content
        style={{
          padding: '0 50px',
        }}
      >

        <div
          className="site-layout-content"
          style={{
            background: 'white',
          }}
        >
          {children}
        </div>
      </Content>



      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default RootLayout;
