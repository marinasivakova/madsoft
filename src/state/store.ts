import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import answers from "./reducers/answers/answers";
import timer from "./reducers/timer/timer";
import questions from "./reducers/questions/questions";

const persistConfig = {
  key: "root",
  storage,
};

const combinedReducer = combineReducers({
  timer,
  answers,
  questions
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
