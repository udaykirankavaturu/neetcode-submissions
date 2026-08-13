class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let freqMap = new Map<string, number>();
        for(let char of s1){
            freqMap.set(char, ( freqMap.get(char) || 0) + 1);
        }

        for(let i=0;i<s2.length;i++){
            if(freqMap.get(s2[i])){
                // expand window until all chars found
                let found = 0;
                let j = 0;
                let tempFreqMap = structuredClone(freqMap);
                while(j<s2.length && tempFreqMap.get(s2[i+j]) && tempFreqMap.get(s2[i+j]) > 0){
                    found++;
                    tempFreqMap.set(s2[i+j], tempFreqMap.get(s2[i+j]) - 1);
                    j++;
                }

                if(found == s1.length) return true;
            }
        }

        return false;

    }
}
