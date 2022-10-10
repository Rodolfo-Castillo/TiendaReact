import Routing from '../configs/routing'
import general from './general'

const combineRoutes = [
    ...general
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes
