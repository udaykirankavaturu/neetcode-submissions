class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = '';
        for(const str of strs){
            res += str;
            res += 'break123'
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const list = str.split('break123')
        const res = [];
        for(let i=0; i<list.length - 1; i++){
            res.push(list[i])
        }

        return res;
    }
}
