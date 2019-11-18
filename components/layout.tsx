import Nav from './nav';
import Footer from './footer';

type Props = {
  children: any
}

const Layout = (props: Props) => (
  <>
    <Nav />
    {props.children}
    <Footer />
  </>
);

export default Layout;