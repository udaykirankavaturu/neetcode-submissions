class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        let rowsValid: boolean;
        let columnsValid: boolean;
        for(let i=0;i<9;i++){
            rowsValid = rowsValid != undefined ? rowsValid && this.isValidRow(i, board): this.isValidRow(i, board);
            columnsValid = columnsValid != undefined ? columnsValid && this.isValidColumn(i, board): this.isValidColumn(i, board);
        }

        let gridsValid: boolean;
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(0,0, board): this.isGridValid(0,0, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(0,3, board): this.isGridValid(0,3, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(0,6, board): this.isGridValid(0,6, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(3,0, board): this.isGridValid(3,0, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(3,3, board): this.isGridValid(3,3, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(3,6, board): this.isGridValid(3,6, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(6,0, board): this.isGridValid(6,0, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(6,3, board): this.isGridValid(6,3, board);
        gridsValid = gridsValid !==undefined ? gridsValid && this.isGridValid(6,6, board): this.isGridValid(6,6, board);

        
        return rowsValid && columnsValid && gridsValid;
    }

    private isValidRow(row: number, board: string[][]){
        let numbers = [];
        for(let column=0;column<9;column++){
             if(board[row][column] !== '.'){
                numbers.push(board[row][column]);
            }
        }

        return !this.hasDuplicate(numbers);
    }

    private isValidColumn(column: number, board: string[][]){
        let numbers = [];
        for(let row=0;row<9;row++){
            if(board[row][column] !== '.'){
                numbers.push(board[row][column]);
            }
        }

        return !this.hasDuplicate(numbers);
    }

    private hasDuplicate(numbers: string[]): boolean {
        const map: Record<string, boolean> = {};

        for (const num of numbers) {
            if (map[num] !== undefined) {
                return true;
            }

            map[num] = true;
        }

        return false;
    }


    private isGridValid(i: number, j: number, board: string[][]): boolean{
        let numbers = [];
        const rowLimit = i + 2;
        const columnLimit = j + 2;

        for(let x = i; x<=rowLimit; x++){
            for(let y = j; y<=columnLimit; y++){
                if(board[x][y] !== '.'){
                    numbers.push(board[x][y]);
                }
            }
        }

        return !this.hasDuplicate(numbers);
    }
}
