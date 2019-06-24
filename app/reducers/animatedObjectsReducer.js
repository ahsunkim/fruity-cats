// Action types
const SET_SAFE_FRUIT = 'SET_SAFE_FRUIT';
const SET_BAD_FRUIT = 'SET_BAD_FRUIT';
const SET_PLAYER_SIDE = 'SET_PLAYER_SIDE';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const TOGGLE_PLAYERS_MODE = 'TOGGLE_PLAYERS_MODE';

// Action creators
export const setSafeFruit = (safeFruit, xPosition) => ({
  type: SET_SAFE_FRUIT,
  safeFruit,
  xPosition,
});

export const setBadFruit = (badFruit, xPosition) => ({
  type: SET_BAD_FRUIT,
  badFruit,
  xPosition,
});

export const setPlayerPos = xPosition => ({
  type: SET_PLAYER_SIDE,
  xPosition,
});

export const changePlayer = cat => ({
  type: CHANGE_PLAYER,
  cat,
});

export const togglePlayerMode = () => ({
  type: TOGGLE_PLAYERS_MODE,
});

// Initial State
const initialState = {
  playerMode: false,

  safeFruit: 'Kiwis',
  safeFruitPosX: 0,

  badFruit: 'Lemons',
  badFruitPosX: 0,

  playerPosX: 40,
  catPlayer: 'Berry',

  // moveSafeFruitVal
  // moveBadFruitVal
  // movePlayerVal
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SAFE_FRUIT:
      return {
        ...state,
        safeFruit: action.safeFruit,
        safeFruitPosX: action.xPosition,
      };
    case SET_BAD_FRUIT:
      return {
        ...state,
        badFruit: action.badFruit,
        badFruitPosX: action.xPosition,
      };
    case SET_PLAYER_SIDE:
      return {
        ...state,
        playerPosX: action.xPosition,
      };
    case CHANGE_PLAYER:
      return {
        ...state,
        catPlayer: action.cat,
        playerMode: !state.playerMode,
      };
    case TOGGLE_PLAYERS_MODE:
      return {
        ...state,
        playerMode: !state.playerMode,
      };
    default:
      return state;
  }
};
