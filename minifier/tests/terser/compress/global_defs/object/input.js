function f(CONFIG) {
    return CONFIG.VALUE;
}
function g() {
    var CONFIG = { VALUE: 1 };
    return CONFIG.VALUE;
}
function h() {
    return CONFIG.VALUE;
}
if (CONFIG.DEBUG[0]) console.debug("foo");
