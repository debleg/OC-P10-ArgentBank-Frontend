import HeaderTopNavigation from "../common/components/headertopnavigation/HeaderTopNavigation";
import Footer from "../common/components/footer/Footer";


const Layout = ({ children }) => {
  return (
    <div className="body-layout">
      <HeaderTopNavigation/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
