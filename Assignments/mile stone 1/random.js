const randomGenerator = (() => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random()*(max-min-1))+min;
})();

console.log("Generated Random Number:", randomGenerator);
