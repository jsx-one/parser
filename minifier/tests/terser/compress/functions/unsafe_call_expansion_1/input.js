(function (...a) {
    console.log(...a);
}.call(console, 1, ...[2, 3], 4));
