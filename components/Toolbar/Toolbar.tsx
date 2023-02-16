import { SelectChangeEvent } from "@mui/material/Select";
import { Children } from "react";
import SearchBox from "../SearchBox/SearchBox";
import DeallSelect from "../Select/Select";

interface ToolbarProps {
    onChange?: (key: any) => void;
    onClick? : () => void;
    onSubmit? : (value: any) => void;
    children? : React.ReactNode;
    initialValue? : string;
  }


const Toolbar = ({onChange, onClick, onSubmit, children, initialValue} : ToolbarProps) => {
    return (
        <div className="deall-toolbar">
            <div className="left">
                {children}
            </div>
            <div className="right">
                <SearchBox onChange={onChange} initialValue={initialValue} onClick={onClick} onSubmit={onSubmit} />
            </div>
        </div>
    );
}

export default Toolbar;