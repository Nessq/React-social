
import {Redirect} from 'react-router-dom'
import {useSelector} from "react-redux";


export const withAuthRedirectComponent = (Component) => (props) => {
    let isAuth = useSelector(state => state.auth.isAuth)
    if(!isAuth) return <Redirect to={'/login'}/>
    return <Component {...props} />
}