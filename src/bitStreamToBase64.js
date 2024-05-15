const bitsToSextets = (bits) => {
    const res = [];
    for (let i = 0; i < bits.length; i += 6) {
        res.push(bits.slice(i, i + 6).join(''));
    }

    return res;
}

export const bitStreamToBase64 = (bitStream) => {
    const dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    const sextets = bitsToSextets(bitStream);
    let res = '';

    for (const sextet of sextets) {
        const int = parseInt(sextet, 2);
        res += dictionary.charAt(int);
    }

    return res;
}