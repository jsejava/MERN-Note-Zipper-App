import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReducer,
  userRegistrationReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  noteCreatetReducer,
  noteDeleteReducer,
  noteListReducer,
  noteUpdatdeReducer,
} from "./reducers/notesReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegistrationReducer,
  noteList: noteListReducer,
  noteCreate: noteCreatetReducer,
  noteUpdate: noteUpdatdeReducer,
  noteDelete: noteDeleteReducer,
  userUpdate: userUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
