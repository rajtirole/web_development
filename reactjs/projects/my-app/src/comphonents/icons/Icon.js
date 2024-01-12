import { FaPen,FaTimes, FaRegCircle } from 'react-icons/fa'
export function Icon({name}){
    if(name=='circle'){
        return <FaRegCircle></FaRegCircle>
    }
    else if(name=='cross'){
        return <FaTimes></FaTimes>
    }
    else {
        return <FaPen></FaPen>
    }
}