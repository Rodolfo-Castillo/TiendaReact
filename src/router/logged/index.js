import LoggedLayout from '../../layouts/logged'
import Index from "../../pages";

export default [
    {   
        path:"/",
        component:Index,
        auth:true,
        layout: LoggedLayout
    }, 
]