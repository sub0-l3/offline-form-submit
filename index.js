function init() {
  var colorStore = localforage.createInstance({
    name: "Colors"
  });
  var hexColors = {
    red: "ff0000",
    green: "00ff00",
    yellow: "ffff00"
  };

  colorStore
    .setItem("colors", hexColors)
    .then(function(value) {
      console.log(value.red);
    })
    .catch(function(err) {
      console.error(err);
    });
}
