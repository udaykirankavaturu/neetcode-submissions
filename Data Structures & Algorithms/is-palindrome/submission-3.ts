class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let alphaNumericSet = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', '0','1','2','3','4','5','6','7','8','9']);
        
        let i=0;
        let j=s.length-1;

        while(i<j){
            while(alphaNumericSet.has(s[i]) === false && i < j){
                i++;
            }

            while(alphaNumericSet.has(s[j]) === false && i < j){
                j--;
            }

            if(s[i].toLowerCase() !== s[j].toLowerCase()){
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
