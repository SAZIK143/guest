var matrix = []
var sudokuDB = []
var globalGuestGame = []
var globalGuestSolu = []

var sudokuAppGuest = new Vue({

    el: '#app-sudoku-guest',

    data: {
        mistakes: [],
        hints: [],
        curr_row: 10,
        curr_col: 10,
        selected: false,
        sudokuMatrix: [],
        initializeGameText: "Get Sudoku",
        evaluateGameText: "Verify!",
        answerImage: "",
        complete: false,
        isGameStarted: false,
        showAnswer: false
    },

    methods: {

        onRefresh(){
            var mate = this.initializeGuestGame()
            this.sudokuMatrix = mate
            this.initializeGameText = "Ready!";
            this.isGameStarted = true;
            this.mistakes = []
        },

        initializeGuestGame() {
            var sudokuMat = []
            var mat = []
            var gameMat = []
            console.log("Generowanie Sudoku");
            [mat, gameMat] = generate()
            globalGuestGame = gameMat
            globalGuestSolu = mat

            console.log(mat);
            var row = []
            for (var i = 0; i < mat.length; i++) {
                row = []
                for (var j = 0; j < mat.length; j++) {
                    //odkomentuj ponizsza linijke i zakomentuj nastepne 4 aby dostac normalna plansze
                    // row.push({num: gameMat[i][j], st:1})
                    if (i == 8 && (j == 5 || j == 6 || j == 7 || j == 8)) {
                        row.push({num: "", st:0})
                        continue
                    }
                    row.push({num: mat[i][j], st:1})
                }
                sudokuMat.push(row)
            }

            for (var i = 0; i < sudokuMat.length; i++) {
                for (var j = 0; j < sudokuMat.length; j++) {
                    if (sudokuMat[i][j].num == 0) {
                        sudokuMat[i][j].num = ""
                        sudokuMat[i][j].st = 0
                    }
                }
            }

            return sudokuMat


        },

        sendXY(row, col, num) {

            if (num == globalGuestSolu[row][col]) {
                this.sudokuMatrix[row][col].num = num
                this.sudokuMatrix[row][col].st = 2
                if (this.checkComplete()) {
                    this.gameoverSuccess()
                }
            }
            else if (num == '' && this.hints.length < 3) {
                this.getHint(row, col)
                if (this.checkComplete()) {
                    this.gameoverSuccess()
                }
            }
            else if (num != globalGuestSolu[row][col]) {
                this.mistakes.push("1");
            }

            if (this.mistakes.length >= 3) {
                this.answerImage = "think.gif";
                this.showAnswer = true;
                this.isGameStarted = false;
                this.mistakes = []
                this.hints = []
                this.curr_row = 10
                this.curr_col = 10
                this.selected = false

                setTimeout(() => {
                    var mate = this.initializeGuestGame()
                    this.sudokuMatrix = mate

                    this.showAnswer = false;
                    this.isGameStarted = true;
                }, 1700);
            }

        },

        gameoverSuccess() {
            this.answerImage = "ok.png";
            this.showAnswer = true;
            this.isGameStarted = false;
            this.mistakes = []
            this.hints = []
            this.curr_row = 10
            this.curr_col = 10
            this.selected = false

            setTimeout(() => {
                var mate = this.initializeGuestGame()
                this.sudokuMatrix = mate

                this.showAnswer = false;
                this.isGameStarted = true;
            }, 1700);
        },

        checkComplete() {
            for (var i = 0; i < this.sudokuMatrix.length; i++) {
                for (var j = 0; j < this.sudokuMatrix.length; j++) {
                    if (this.sudokuMatrix[i][j].num == 0 || this.sudokuMatrix[i][j].num != globalGuestSolu[i][j]) {
                        return false
                    }
                }
            }
            return true
        },

        getHint(row, col) {
            this.sudokuMatrix[row][col].num = globalGuestSolu[row][col]
            this.sudokuMatrix[row][col].st = 3
            this.hints.push("1")
        }


    }

})

var sudokuApp = new Vue({

    el: '#app-sudoku',

    data: {

        sudokuMatrix: [],
        initializeGameText: "Get Sudoku",
        evaluateGameText: "Verify!",
        answerImage: "",
        isGameStarted: false,
        showAnswer: false
    },

    methods: {

        sendProgress(row, col, val) {
            tmpSendMyProgress()
        },

        joinGame() {
            this.sudokuMatrix = matrix
            console.log(matrix);
            this.isGameStarted = true;
        },

        prepareGame() {
            var mySudokuMatrix = []
            sudoku_array = db_sudoku[0].Sud_game_ex
            var row = []
            for (var i = 0; i < sudoku_array.length + 1; i++) {

                if (i % 9 == 0 && i != 0) {
                    mySudokuMatrix.push(row)
                    row = []
                }
                row.push({num: sudoku_array[i]})
            }

            for (var i = 0; i < mySudokuMatrix.length; ++i) {
                for (var j = 0; j < mySudokuMatrix[0].length; j++) {
                    if (mySudokuMatrix[i][j].num == 0) {
                        mySudokuMatrix[i][j].num = ""
                    }
                }
            }
            matrix = mySudokuMatrix
            this.sudokuMatrix = mySudokuMatrix
            this.initializeGameText = "Ready!";
            this.isGameStarted = true;
        },

        initializeMyGame() {

            askForSudoku()

            setTimeout(function() {
                  if (db_sudoku != "") {
                      sudokuApp.prepareGame()
                  }
                  else {
                      console.log("Error");
                  }


            }, 2500);
        },

        initializeGuestGame() {

            console.log("generowane jest");
            generate()

        }

    }
});
