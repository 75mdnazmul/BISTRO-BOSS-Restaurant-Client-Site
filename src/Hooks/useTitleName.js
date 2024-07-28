import { useEffect } from "react"

const useTitleName = title => {
    useEffect(()=>{
        document.title = `${title} | BISTRO BOSS Restaurant`;
    },[title])
}

export default useTitleName;