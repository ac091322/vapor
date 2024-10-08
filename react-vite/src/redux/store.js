import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import gameReducer from "./game";
import coverArtReducer from "./coverArt";
import reviewReducer from "./review";
import screenshotReducer from "./screenshot";
import wishlistReducer from "./wishlist";
import shoppingCartReducer from "./shoppingCart";
import libraryReducer from "./library";


const rootReducer = combineReducers({
  session: sessionReducer,
  game: gameReducer,
  coverArt: coverArtReducer,
  screenshot: screenshotReducer,
  review: reviewReducer,
  wishlist: wishlistReducer,
  shoppingCart: shoppingCartReducer,
  library: libraryReducer
});

let enhancer;
if (import.meta.env.MODE === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};


export default configureStore;
