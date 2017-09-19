function forLoop(array) {
    for (let i = 0;, i < 25; i++) {
        if i == 1 {
            array = ["I am 1 strange loop", ...array];
        }
        else if i != 1 {
            array = ["I am "  + i + " strange loop", ...array]);
        }
    }
    return array
};
