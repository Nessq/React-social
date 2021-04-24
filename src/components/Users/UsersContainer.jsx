import React from 'react';
import {connect} from "react-redux";
import {
    followed,
    getUsers,
} from "../../redux/reducer/users.reducer";
import {Users} from "./Users";
import {compose} from "redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";

export class UsersContainer extends React.Component {


    onPageChanged = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    }

    //LifeCycles

    componentDidMount() {
        if (this.props.users.length) return
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    render = () => {
        return <Users
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
            isFollowing={this.props.isFollowing}
            onFollowed={this.props.followed}
        />
    }
}


const mapStateToProps = (state) => ({
    totalUserCount: state.usersPage.totalUserCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    isFollowing: state.usersPage.isFollowing
})


export default compose(
    connect(mapStateToProps, {
        getUsers,
        followed
    }),
    withAuthRedirectComponent,
)(UsersContainer)



