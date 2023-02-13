import { MenuIcon } from "../Icons/MenuIcons";
// import SearchBox from "../SearchBox/SearchBox";

interface UserObj {
  content? : React.ReactNode;
  image?: React.ReactNode;
}



const Header = ({ content, image }: UserObj) => {
  return (
    <div className="deall-top-header">
      <div className="deall-header-left">
        {content}
      </div>
      <div className="deall-header-right">
        {MenuIcon.mail}
        {image}
      </div>
    </div>
  );
};

export default Header;
