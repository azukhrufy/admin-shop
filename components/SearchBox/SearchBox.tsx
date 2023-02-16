import { MenuIcon } from "../Icons/MenuIcons";

interface SearchProps {
  onChange?: (key: any) => void;
  onClick?: () => void;
  onSubmit?: (value : any) => void;
  initialValue? : string;
}

const SearchBox = ({ onChange, onClick, onSubmit, initialValue }: SearchProps) => {
  return (
    <div className="deall-searchbox">
      {/* <form onSubmit={onSubmit}> */}
        <input name="search-value" onChange={onChange} value={initialValue} onKeyDown={onSubmit} />
        <div onClick={onClick}>{MenuIcon.search}</div>
      {/* </form> */}
    </div>
  );
};

export default SearchBox;
