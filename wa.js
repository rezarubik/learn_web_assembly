let perkalian;

function loadWasm(filename) {
  return fetch(filename)
    .then((response) => response.arrayBuffer())
    .then((bits) => WebAssembly.compile(bits))
    .then((module) => {
      return new WebAssembly.Instance(module);
    });
}
loadWasm("test.wasm").then((instance) => {
  perkalian = instance.exports._Z9perkalianii;
});
