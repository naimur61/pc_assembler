import { Button, Layout } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import logo from '@/asset/logo/assemble.png'
import Image from 'next/image';
import { useRouter } from 'next/router';



const RootLayout = ({ children }) => {

  const router = useRouter();
  const sourceLocation = router.asPath;
  console.log(sourceLocation);

  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href='/' style={{ lineHeight: '0' }}>
          <Image src={logo} alt='logo' width={50} height={50} />
        </Link>

        <Link href='/pc_builder'>
          <Button type='primary'
          >Assemble PC </Button>
        </Link>

      </Header>



      <Content
        style={{
          padding: '0 50px',
        }}
      >

        <div
          className="site-layout-content"
          style={{
            minHeight: '100vh'
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
        Handcrafted by <Link href='https://naimur61.vercel.app/' target='_blank' style={{ fontWeight: 'bolder' }}>Naimur</Link> © 2023
      </Footer>
    </Layout>
  );
};
export default RootLayout;
