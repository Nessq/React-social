import {connect} from "react-redux";
import Aside from "./Aside";



const mapStateToProps = (state) =>({
    friendList : state.sidebar.friendList
})

const mapDispatchToProps = (dispatch) =>({

})

export default connect(mapStateToProps, mapDispatchToProps)(Aside)