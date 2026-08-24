class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) return false;

        let s1Count = [];
        let s2Count = [];

        for(let i=0;i<26;i++){
            s1Count[i] = 0;
            s2Count[i] = 0;
        }

        for(let i=0;i<s1.length;i++){
            s1Count[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            s2Count[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }

        let matches = 0;
        for(let i=0;i<26;i++){
            if(s1Count[i] == s2Count[i]){
                matches++;
            }
        }

        let l = 0;
        for(let r=s1.length;r<s2.length;r++){
            if(matches == 26) return true;

            let index = s2[r].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Count[index] += 1;
            if(s1Count[index] == s2Count[index]){
                matches++;
            } else if (s2Count[index] - 1 == s1Count[index]){
                matches--;
            }

            index = s2[l].charCodeAt(0) - 'a'.charCodeAt(0);
            s2Count[index] -= 1;
            if(s1Count[index] == s2Count[index]){
                matches++;
            } else if(s2Count[index] + 1 == s1Count[index]){
                matches--
            }

            l++;

        }

        return matches == 26;
    }
}
