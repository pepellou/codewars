function vowelValue(str) {
    return str.replace(/[^aeiouAEIOU]/g, '.').split('.').map(x => x.length)
        .reduce((x, e) => x > e ? x : e, 0);
}

function sortStringsByVowels(strings) {
    return strings.sort(
        (str1, str2) => vowelValue(str2) - vowelValue(str1)
    );
}
