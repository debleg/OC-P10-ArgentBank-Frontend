import Headernav from '../common/components/headernav/Headernav'
import Footer from '../common/components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Headernav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;