export function useInputChange(){
    const handleChange = (e: any, set: (data: any) => void, historyType?: string) =>{
        e.preventDefault();
        set(e.target.value);
        if(historyType){
            localStorage.setItem(historyType, JSON.stringify(e.target.value));
        }
    }

    return {
        handleChange
    }
}