// Action types
const SET_SAFE_FRUIT = 'SET_SAFE_FRUIT';
const SET_BAD_FRUIT = 'SET_BAD_FRUIT';
const SET_PLAYER_SIDE = 'SET_PLAYER_SIDE';
const CHANGE_PLAYER = 'CHANGE_PLAYER';
const TOGGLE_PLAYERS_MODE = 'TOGGLE_PLAYERS_MODE';

// Action creators
export const setSafeFruit = (safeFruit, direction, xPosition) => ({
  type: SET_SAFE_FRUIT,
  safeFruit,
  direction,
  xPosition,
});

export const setBadFruit = (badFruit, direction, xPosition) => ({
  type: SET_BAD_FRUIT,
  badFruit,
  direction,
  xPosition,
});

export const setPlayerSide = direction => ({
  type: SET_PLAYER_SIDE,
  direction,
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
  safeFruitSide: 'left',
  safeFruitStartposX: 0,

  badFruit: 'Lemons',
  badFruitSide: 'left',
  badFruitStartposX: 0,

  playerSide: 'left',
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
        safeFruitSide: action.direction,
        safeFruitStartposX: action.xPosition,
      };
    case SET_BAD_FRUIT:
      return {
        ...state,
        badFruit: action.badFruit,
        badFruitSide: action.direction,
        badFruitStartposX: action.xPosition,
      };
    case SET_PLAYER_SIDE:
      return {
        ...state,
        playerSide: action.direction,
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
