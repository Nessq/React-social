import {addPostActionCreate} from "../../../redux/reducer/profile.reducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";



const mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
    newTextPost: state.profilePage.newTextPost
})
const mapDispatchToProps = (dispatch) => ({
    handleAddPost : (textPost) => dispatch(addPostActionCreate(textPost)),
})

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)