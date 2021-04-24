import React, {Component} from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthMe} from "../../redux/reducer/auth.reducer";

class HeaderContainer extends Component {


    componentDidMount() {
        this.props.getAuthMe(this.props.isAuth)
    }

    render() {
        return (
          <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) =>({
    id: state.auth.id,
    email : state.auth.email,
    login : state.auth.login,
    isAuth : state.auth.isAuth
})


export default connect(
    mapStateToProps,
    {
        getAuthMe
    }
)(HeaderContainer);