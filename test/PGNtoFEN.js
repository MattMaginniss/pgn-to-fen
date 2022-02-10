let expect = require("chai").expect
let PGNtoFEN = require('../PGNtoFEN.js')


describe("PGN to FEN", function() {
    describe("Initial FEN printout", function() {
      it("Prints out the starting FEN string", function() {
        expect(PGNtoFEN.printFEN()).to.equal('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0')
      })
    })
})