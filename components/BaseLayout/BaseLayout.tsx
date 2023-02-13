import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar, { Menus } from "../Sidebar/Sidebar";

interface BaseLayoutProps {
  menu: Menus[];
  sidebarLogo: React.ReactNode;
  headerData?: any;
  children?: React.ReactNode;
}

const BaseLayout = ({ menu, sidebarLogo, headerData, children }: BaseLayoutProps) => {
  return (
    <>
      <Header
        image={headerData.image}
      />
      <Sidebar logo={sidebarLogo} menus={menu} />
      <div className="content">
        {children}
        </div>
      <Footer
        rightContent="Copyrigth Deall Jobs"
      />
    </>
  );
};

export default BaseLayout;
