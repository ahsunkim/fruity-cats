// Initial State
const initialState = {
  points: 0,
  instructionsMode: false,
  startMode: true,
  gameOver: false,

  safeFruit: 'Kiwis',
  // safeFruitSide
  // safeFruitStartposX
  // moveSafeFruitVal

  badFruit: 'Lemons',
  // badFruitSide
  // badFruitStartposX
  // moveBadFruitVal

  // movePlayerVal
  // playerSide
  // playerCaught
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
