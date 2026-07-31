class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // empty list 
        if(strs.length === 0) return [];

        let result: string[][] = [];

        for(let str of strs){
            let sorted_str = str.split('').sort().join();
            let found = false;

            for(let list of result){
                let sorted_first_str = list[0].split('').sort().join();

                if(sorted_str === sorted_first_str){
                    list.push(str);
                    found = true;
                }
            }
          

           if(!found){
            result.push([str]);
           }
        }

        return result;
    }
}
