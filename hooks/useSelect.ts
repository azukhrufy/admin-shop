import { SelectChangeEvent } from "@mui/material";

export function useSelect() {
    const handleSelect = (f: any, e: SelectChangeEvent, set: (data: any) => void) => {
        switch (f) {
          case "Categories":
            set(e.target.value);
            break;
          case "Brands":
            set(e.target.value);
            break;
        }
      };

    return {
        handleSelect
    }
}