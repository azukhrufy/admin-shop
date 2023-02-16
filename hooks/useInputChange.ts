export function useInputChange(){
    const handleChange = (e: any, set: (data: any) => void) =>{
        e.preventDefault();
        set(e.target.value);
    }

    return {
        handleChange
    }
}