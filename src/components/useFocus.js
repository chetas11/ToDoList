import { useRef, useEffect} from 'react'

const useFocus = () =>{
    const targetFieldRef = useRef()
    useEffect(()=>{
        targetFieldRef.current?.focus()
    },[])

    return targetFieldRef
}

export default useFocus;