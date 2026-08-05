class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let alphaNumericSet = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', '0','1','2','3','4','5','6','7','8','9']);
        
        let cleanedUpS = '';
        
        for(let char of s){
            if(alphaNumericSet.has(char)){
                cleanedUpS += char.toLowerCase();
            }
        }

        let i=0;
        let j=cleanedUpS.length-1;

        while(i<j){
            if(cleanedUpS[i] !== cleanedUpS[j]){
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
