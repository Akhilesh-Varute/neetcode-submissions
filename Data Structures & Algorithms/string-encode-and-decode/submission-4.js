class Solution {
    encode(strs) {
        return strs.map((s) => `${s.length}#${s}`).join("");
    }

    decode(str) {
        let i = 0;
        const result = [];
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") j++;

            const len = parseInt(str.slice(i, j));
            const word = str.slice(j + 1, j + 1 + len);
            result.push(word);
            i = j + 1 + len;
        }
        return result;
    }
}
