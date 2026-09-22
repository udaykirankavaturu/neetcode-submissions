class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        const openChars = ['(', '{', '['];
        const closedChars = [')', '}', ']'];
        const mapping = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }

        for(let char of s){
            if(openChars.includes(char)){
                stack.push(char);
            }

            if(closedChars.includes(char)){
                const topChar = stack[stack.length-1];
                if(mapping[topChar] == char){
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}
