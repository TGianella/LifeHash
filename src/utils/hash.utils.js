const bitsToSextets = (bits) => {
    const res = [];
    for (let i = 0; i < bits.length; i += 6) {
        res.push(bits.slice(i, i + 6).join(''));
    }

    return res;
}

export const hashUtils = (bitStream) => {
    const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    const sextets = bitsToSextets(bitStream);
    let res = '';

    for (const sextet of sextets) {
        const int = parseInt(sextet, 2);
        res += dictionary.charAt(int);
    }

    return res;
}
export const getStringBits = (string) => {
    let res = '';
    for (let i = 0; i < string.length; i++) {
        res += string.charCodeAt(i).toString(2);
    }

    return res;
}
export const padBitsTo256 = (bits) => {
    if (bits.length < 256) {
        const bitsToPad = 256 - bits.length;
        const padding = Array.from('0'.repeat(bitsToPad)).map((n) => Number(n));
        return bits.concat(padding);
    } else if (bits.length > 256) {
        return bits.slice(0, 256);
    } else {
        return bits;
    }
}