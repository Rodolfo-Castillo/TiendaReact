import Routing from '../configs/routing'
import general from './general'
import logged from './logged'

const combineRoutes = [
    ...general,
    ...logged
]

const Routes = () => {
    return (
        <Routing routes={combineRoutes}/>
    )
}

export default Routes
