export class Connect4 {

    constructor() {
      // Good luck

      this.player = 1;
      this.wincon = false;
      this.board = [[0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0],
                   [0, 0, 0, 0, 0, 0, 0]];
    }
  
    play(col: number): string{
      // Good luck
      //checking to see if the game is done first
      if (this.wincon == true){
        return ("Game has finished!");
      }

      //checking if the column is full
      if (this.board[1][col] != 0){
        return ("Column Full!")
      }

      var row = 0;
      var chips = 0;

      for (var tmpr = 0; tmpr <= 6; tmpr++){
        //checking if the board column is not full.
        if (tmpr === 6 || this.board[tmpr+1][col] != 0){
          //putting in the player chip.
          this.board[row+1][col] === this.player
          break;
        }


        //Checking the left, right, below and above
        if (this.board[row][col+1] === this.player || this.board[row][col-1] === this.player){
          chips = 0;
          for (var n = col; n < 7; n++){
            if (this.board[row][n] === this.player){
              chips += 1;
            }
          }
          for (var n = col-1; n >= 0; n--){
            if (this.board[row][n] === this.player){
              chips += 1;
            }
          }

          if (chips > 3){
            this.wincon = true;
            return ("Player "+this.player+" wins!");
          }
        }
        if (this.board[row+1][col] === this.player || this.board[row-1][col] === this.player){
            chips = 0;
            for (var n = row; n < 7; n++){
              if (this.board[n][col] === this.player){
                chips += 1;
              }
            }
              for (var n = row-1; n>=0; n--){
                if (this.board[n][col] === this.player){
                  chips += 1;
                }

              }
              if (chips > 3){
                this.wincon = true;
                return ("Player "+this.player+" wins!");
              }
            }

            //Now checking for diagonals

          if (this.board[row+1][col+1] === this.player || this.board[row-1][col-1] === this.player){
            chips = 0 
            var j = col;

            for (n = row; n < 7; n++){
              if (this.board[n][j] == this.player){
                chips += 1;
                j += 1;
              } 
            }
            // I think I should put back the pointer
            j = col -1
            for (n = row-1; n < 7){}
              if (this.board[n][j] === this.player){
                chips += 1;
                j += 1;
              }
            for (n = row-1; x >= 0; x--){
              if (this.board[n][j] === this.player){
                chips += 1;
                j -= 1;
              }
            }
              if (chips > 3){
                this.wincon = true;
                return ("Player "+this.player+" wins!");
              }
            

          }
              if (this.board[row+1][col-1] === this.player || this.board[row-1][col+1] === this.player){
                chips = 0;
                var j = col;
                for (n = row; n < 7; n++){
                  if (this.board[n][j] === this.player){
                    chips += 1;
                    j -= 1;
                  }
                }
                for (n = row; n >= 0; n--){
                  if (this.board[n][j] === this.player){
                    chips += 1;
                    j += 1;
                  }
                }
                if (chips > 3){
                  this.wincon = true;
                  return ("Player " +this.player+" wins!");
                }

              }

              if (this.player !==1){
                this.player = 1;
              }

              else{
                this.player = 2;
              }

              return ("Player "+this.player+ " has a turn");
        }
      

    }
  }