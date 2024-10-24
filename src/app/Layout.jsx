import Header from '../common/components/header'
import Footer from '../common/components/footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;