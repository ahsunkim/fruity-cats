// Action types
const TOGGLE_INSTRUCTIONS = 'TOGGLE_INSTRUCTIONS';
const PLAY_PAUSE_SONG = 'PLAY_PAUSE_SONG';

// Action creators
export const toggleInstructions = () => ({
  type: TOGGLE_INSTRUCTIONS,
});

export const playPauseSong = () => ({
  type: PLAY_PAUSE_SONG,
});

// Initial State
const initialState = {
  instructionsMode: false,
  playSongStatus: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
