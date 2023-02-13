import SearchBox from "../SearchBox/SearchBox";

interface ToolbarProps {
    onChange?: (key: any) => void;
    onClick? : () => void;
    onSubmit? : (value: any) => void;
  }


const Toolbar = ({onChange, onClick, onSubmit} : ToolbarProps) => {
    return (
        <div className="deall-toolbar">
            <div className="left">
                Filter
            </div>
            <div className="right">
                <SearchBox onChange={onChange} onClick={onClick} onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default Toolbar;