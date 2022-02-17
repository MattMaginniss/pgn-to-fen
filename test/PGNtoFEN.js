let expect = require("chai").expect
let PGNtoFEN = require('../PGNtoFEN.js')


describe("PGN to FEN", function() {
    describe("Initial FEN printout", function() {
      it("Prints out the starting FEN string", function() {
        expect(PGNtoFEN.printFEN()).to.equal('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0')
      })
    })

    // 1. e4 h6 2. Qg4 Nf6 3. Bc4 Rh7 4. Ke2 should be rnbqkb2/pppppppr/5n1p/8/2B1P1Q1/8/PPPPKPPP/RNB3NR b q - 5 4

    describe("Get line of moves from single PGN", function() {
      it("Returns moves list from single PGN match", function() {
        expect(PGNtoFEN.getMoves(`[Event "MattHasFun's Study: Chapter 1"]
        [Site "Matt's House"]
        [Date "2020-01-13"]
        [White "Matt"]
        [Black "Gary"]
        [Result "*"]
        [WhiteElo "6969"]
        [BlackElo "420"]
        [TimeControl "600+10"]
        [UTCDate "2022.02.17"]
        [UTCTime "03:17:12"]
        [Variant "Standard"]
        [ECO "B00"]
        [Opening "Carr Defense"]
        [Annotator "https://lichess.org/@/MattHasFun"]

        1. e4 h6 2. Qg4 Nf6 3. Bc4 Rh7 *
        `)).to.equal('1. e4 h6 2. Qg4 Nf6 3. Bc4 Rh7 *')
      })
    })  
})