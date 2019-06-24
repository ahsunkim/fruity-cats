import { combineReducers } from 'redux';
import gameLogic from './gameLogicReducer';
import animatedObject from './animatedObjectsReducer';
import gameSettings from './gameSettingsReducer';

const rootReducer = combineReducers({
  gameLogic,
  animatedObject,
  gameSettings,
});

export default rootReducer;
