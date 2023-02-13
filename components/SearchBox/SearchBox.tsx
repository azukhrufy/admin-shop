import { MenuIcon } from "../Icons/MenuIcons";

interface SearchProps {
  onChange?: (key: any) => void;
  onClick?: () => void;
  onSubmit?: (value : any) => void;
}

const SearchBox = ({ onChange, onClick, onSubmit }: SearchProps) => {
  return (
    <div className="deall-searchbox">
      {/* <form onSubmit={onSubmit}> */}
        <input name="search-value" onChange={onChange} onKeyDown={onSubmit} />
        <div onClick={onClick}>{MenuIcon.search}</div>
      {/* </form> */}
    </div>
  );
};

export default SearchBox;
