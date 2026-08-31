class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t=="") return "";

        let tMap = {}; 
        let wMap = {};
        for(let char of t){
            tMap[char] = (tMap[char] || 0) + 1;
        }

        let l=0; 
        let need=Object.keys(tMap).length;
        let have=0; 
        let result = []; 
        let resMinLength = Infinity;

        for(let r=0;r<s.length;r++){
            let char = s[r];
            wMap[char] = (wMap[char] || 0) + 1;

            if(tMap[char] != undefined && tMap[char] == wMap[char]){
                have++;
            }

            while(have == need){
                // update result
                let wLen = r-l+1;
                if(wLen < resMinLength){
                    result = [l,r];
                    resMinLength = wLen;
                }

                // shrink
                wMap[s[l]]--;

                if(tMap[s[l]] != undefined && wMap[s[l]] < tMap[s[l]]){
                    have--;
                }

                l++;
            }


        }

        return resMinLength !== Infinity ? s.slice(result[0], result[1] + 1) : "";
    }
}
