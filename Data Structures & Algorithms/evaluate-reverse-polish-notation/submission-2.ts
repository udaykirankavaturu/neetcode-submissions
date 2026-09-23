class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [];
        const operators = new Set(['+','-','*','/']);

        for(let token of tokens){
            if(operators.has(token)){
                const operand2 = Number(stack.pop());
                const operand1 = Number(stack.pop());

                switch(token){
                    case '+':
                        stack.push(operand1 + operand2)
                        break;
                    case '-':
                        stack.push(operand1 - operand2)
                        break;
                    case '*':
                        stack.push(operand1 * operand2)
                        break;
                    case '/':
                        stack.push(Math.trunc(operand1 / operand2))
                        break;
                }
            } else {
                stack.push(token);
            }
        }

        return Math.floor(stack.pop());
    }
}
