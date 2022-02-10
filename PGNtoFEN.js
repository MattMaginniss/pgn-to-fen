fenPositions = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
chessBoardArray = 
  [
  'r','n','b','q','k','b','n','r',
  'p','p','p','p','p','p','p','p',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  'P','P','P','P','P','P','P','P',
  'R','N','B','Q','K','B','N','R'
]
whiteMove = true
encroissantSquare = '-'
castlingRights = 'KQkq'
halfMoves = 0
moveNumber = 0
lastMove = 'First move'

function printFEN() {
  return fenPositions + ' ' + (whiteMove ? 'w' : 'b') + ' ' + castlingRights + ' ' + encroissantSquare  + ' ' + halfMoves + ' ' + moveNumber
}

function getFENpositions() {
  // TODO: will calculate the fenPositions string from the chessBoardArray
}


module.exports = { printFEN, getFENpositions }