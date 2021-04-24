import {addNewMessageActionCreate} from "../../redux/reducer/dialogs.reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


const mapStateToProps = (state) => ({
    newMessage : state.dialogsPage.newMessage,
    d: state.dialogsPage.dataDialog,
    dd: state.dialogsPage.dataMessage,
})

const mapDispatchToProps = (dispatch) => ({
    handleSendMessage : (newMessage) => dispatch(addNewMessageActionCreate(newMessage)),
})

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs)






