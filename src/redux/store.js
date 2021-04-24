import {profileReducer} from "./reducer/profile.reducer";
import {dialogsReducer} from "./reducer/dialogs.reducer";
import {sidebarReducer} from "./reducer/sidebar.reducer";


const store = {
    _state: {
        profilePage: {
            newTextPost: '',
            posts: [
                {
                    id: 1,
                    text: `I'm Fuuny sanday today, add my posts WOW!!!`,
                    img: `https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg`,
                    date: `14.04.2021, 17:03:48`,
                    likeCount: `20`,
                },
                {
                    id: 2,
                    text: `I'm Fuuny sanday today, add my posts WOW!!!`,
                    img: `https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png`,
                    date: `11.05.2022, 11:03:48`,
                    likeCount: `10`,
                },

            ],
        },

        dialogsPage: {
            newMessage: '',
            dataDialog: [
                {id: '1', name: 'Max'},
                {id: '2', name: 'Dasha'},
                {id: '3', name: 'Lara'},
            ],

            dataMessage: [
                {id: '1', message: 'qwee'},
                {id: '2', message: 'qwee'},
                {id: '3', message: 'Laqwera'},
            ],
        },

        sidebar: {
            friendList: [
                {id: '2', name: 'Oks', avatar: 'https://html5css.ru/w3css/img_avatar3.png'},
                {id: '3', name: 'Svyat', avatar: 'https://html5css.ru/w3css/img_avatar3.png'},
                {id: '4', name: 'Anika', avatar: 'https://html5css.ru/w3css/img_avatar3.png'},
                {id: '5', name: 'Sveta', avatar: 'https://html5css.ru/w3css/img_avatar3.png'},
                {id: '6', name: 'Shana', avatar: 'https://html5css.ru/w3css/img_avatar3.png'},
            ]
        }
    },
    _callSubscribe: () => {
        console.log('no subscribe')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscribe(this._state)

    },
}



export default store