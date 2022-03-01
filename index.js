function findMatching(collection, name) {
    return collection.filter(function (names) {
        return names.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(collection, name) {
    return collection.filter(function (names) {
        return names.charAt(0) === name.charAt(0);
    });
}

function matchName(collection, string) {
    return collection.filter(names => (names.name === string))
}