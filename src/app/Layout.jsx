import Header from '../common/components/header/Header'
import Footer from '../common/components/footer/Footer';

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