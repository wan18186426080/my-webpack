(() => {
  var o = {
      880: (o) => {
        o.exports = { formatPrice: () => "100.00" };
      },
    },
    r = {};
  function e(t) {
    var s = r[t];
    if (void 0 !== s) return s.exports;
    var c = (r[t] = { exports: {} });
    return o[t](c, c.exports, e), c.exports;
  }
  (() => {
    "use strict";
    const { formatPrice: o } = e(880);
    console.log(3), console.log(4), console.log(o());
  })();
})();
