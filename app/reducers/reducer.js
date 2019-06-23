// Action types
const GAIN_POINT_BAD_FRUIT = 'GAIN_POINT_BAD_FRUIT';
const GAIN_POINT_GOOD_FRUIT = 'GAIN_POINT_GOOD_FRUIT';
const TOGGLE_OFF_GAIN_POINT = 'TOGGLE_OFF_GAIN_POINT';
const UPDATE_HIGH_SCORE = 'UPDATE_HIGH_SCORE';

const START_GAME = 'START_GAME';
const END_GAME = 'END_GAME';
const TOGGLE_INSTRUCTIONS = 'TOGGLE_INSTRUCTIONS';
const PLAY_PAUSE_SONG = 'PLAY_PAUSE_SONG';

const SET_SAFE_FRUIT = 'SET_SAFE_FRUIT';
const SET_BAD_FRUIT = 'SET_BAD_FRUIT';
const SET_PLAYER_SIDE = 'SET_PLAYER_SIDE';
const INCREASE_FRUIT_SPEED = 'INCREASE_FRUIT_SPEED';

// Action creators
// Points
export const gainPointBadFruit = () => ({
  type: GAIN_POINT_BAD_FRUIT,
});

export const gainPointGoodFruit = () => ({
  type: GAIN_POINT_GOOD_FRUIT,
});

export const toggledOffGainPoint = () => ({
  type: TOGGLE_OFF_GAIN_POINT,
});

export const updateHighScore = () => ({
  type: UPDATE_HIGH_SCORE,
});

// Game Settings/ Message Board-related
export const startGame = () => ({
  type: START_GAME,
});

export const endGame = () => ({
  type: END_GAME,
});

export const toggleInstructions = () => ({
  type: TOGGLE_INSTRUCTIONS,
});

export const playPauseSong = () => ({
  type: PLAY_PAUSE_SONG,
});

// Fruits and Player-related
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

export const increaseFruitSpeed = () => ({
  type: INCREASE_FRUIT_SPEED,
});

// Initial State
const initialState = {
  points: 0,
  gainedPoints: false,
  highScore: 0,

  startMode: true,
  gameOver: false,
  instructionsMode: false,
  playSongStatus: false,

  fruitSpeed: 2000,

  safeFruit: 'Kiwis',
  safeFruitSide: 'left',
  safeFruitStartposX: 0,

  badFruit: 'Lemons',
  badFruitSide: 'left',
  badFruitStartposX: 0,

  playerSide: 'left',
  playerCaught: false,

  // moveSafeFruitVal
  // moveBadFruitVal
  // movePlayerVal
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GAIN_POINT_BAD_FRUIT:
      return {
        ...state,
        gainedPoint: true,
        points: state.points + 1,
      };
    case GAIN_POINT_GOOD_FRUIT:
      return {
        ...state,
        gainedPoint: true,
        points: state.points + 1,
        playerCaught: true,
      };
    case TOGGLE_OFF_GAIN_POINT:
      return {
        ...state,
        gainedPoint: false,
        playerCaught: false,
      };
    case UPDATE_HIGH_SCORE:
      return {
        ...state,
        highScore: state.points,
      };
    case START_GAME:
      return {
        ...state,
        startMode: false,
        gameOver: false,
        points: 0,
        fruitSpeed: 2000,
      };
    case END_GAME:
      return {
        ...state,
        gameOver: true,
      };
    case TOGGLE_INSTRUCTIONS:
      return {
        ...state,
        instructionsMode: !state.instructionsMode,
      };
    case PLAY_PAUSE_SONG:
      return {
        ...state,
        playSongStatus: !state.playSongStatus,
      };
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
    case INCREASE_FRUIT_SPEED:
      return {
        ...state,
        fruitSpeed: state.fruitSpeed - 50,
      };
    default:
      return state;
  }
};
