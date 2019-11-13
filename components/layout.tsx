import Nav from './nav';

type Props = {
  children: any
}

const Layout = (props: Props) => (
  <>
    <Nav />
    {props.children}
  </>
);

export default Layout;