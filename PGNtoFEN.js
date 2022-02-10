fenPositions = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
chessBoardArray = [
  'R','N','B','Q','K','B','N','R',
  'P','P','P','P','P','P','P','P',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  '1','1','1','1','1','1','1','1',
  'p','p','p','p','p','p','p','p',
  'r','n','b','q','k','b','n','r']
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