// Action types
const GAIN_POINT_BAD_FRUIT = 'GAIN_POINT_BAD_FRUIT';
const GAIN_POINT_GOOD_FRUIT = 'GAIN_POINT_GOOD_FRUIT';
const TOGGLE_OFF_GAIN_POINT = 'TOGGLE_OFF_GAIN_POINT';
const UPDATE_HIGH_SCORE = 'UPDATE_HIGH_SCORE';

const START_GAME = 'START_GAME';
const END_GAME = 'END_GAME';
const INCREASE_FRUIT_SPEED = 'INCREASE_FRUIT_SPEED';

// Action creators
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

export const startGame = () => ({
  type: START_GAME,
});

export const endGame = () => ({
  type: END_GAME,
});

export const increaseFruitSpeed = () => ({
  type: INCREASE_FRUIT_SPEED,
});

// Initial State
const initialState = {
  points: 0,
  gainedPoint: false,
  highScore: 0,
  playerCaught: false,

  startMode: true,
  gameOver: false,
  fruitSpeed: 2000,
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
    case INCREASE_FRUIT_SPEED:
      return {
        ...state,
        fruitSpeed: state.fruitSpeed - 50,
      };
    default:
      return state;
  }
};
