class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // empty list 
        if(strs.length === 0) return [];

        let lists: string[][] = [];

        for(let str of strs){
           let found = false;
           for(let list of lists){
            found = this.check(str, list);

            if(found){
                list.push(str);
                break;
            }
           }

           if(!found){
            lists.push([str]);
           }
        }

        return lists;
    }

    private check(str: string, list: string[]){
        // get first string from list
        let first_str = list[0];

        // length check
        if(first_str.length !== str.length) return false;

        // build char array for str
        let str_char_array = [];
        for(let i=0;i<26;i++){
            str_char_array.push(0);
        }

        // build
        for(let char of str){
            const char_index = char.charCodeAt(0);
            const a_index = 'a'.charCodeAt(0);
            const array_index = char_index - a_index;
            str_char_array[array_index] = str_char_array[array_index] + 1;
        }

        // compare
        for(let char of first_str){
            const char_index = char.charCodeAt(0);
            const a_index = 'a'.charCodeAt(0);
            const array_index = char_index - a_index;

            if(str_char_array[array_index] > 0){
                str_char_array[array_index] = str_char_array[array_index] - 1;
            } else {
                return false;
            }

        }

        // check for leftovers
        if(str_char_array.includes(1)){
            return false;
        } 

        return true;
    }
}
