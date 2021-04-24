import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {withRouter} from 'react-router-dom'
import {getProfile, setProfileStatus} from "../../redux/reducer/profile.reducer";

// let a = withRouter(
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.authId
        if(userId === null) return
        this.props.getProfile(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId)
            this.props.getProfile(this.props.match.params.userId || this.props.authId)

        if(prevProps.authId === this.props.authId) return
        let userId = this.props.match.params.userId || this.props.authId
        this.props.getProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    authId : state.auth.id,
    status : state.profilePage.status,
})

export default connect(mapStateToProps, {
    getProfile,
    setProfileStatus
})(withRouter(ProfileContainer))
