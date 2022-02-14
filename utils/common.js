function numStr(a, b) {
  a = "" + a;
  b = b || " ";
  var c = "",
    d = 0;
  while (a.match(/^0[0-9]/)) {
    a = a.substr(1);
  }
  for (var i = a.length - 1; i >= 0; i--) {
    c = d != 0 && d % 3 == 0 ? a[i] + b + c : a[i] + c;
    d++;
  }
  return c;
}

function uri(params = {}, href = window.location.href) {
  const uri = new URL(href);

  for (let param of Object.keys(params)) {
    uri.searchParams.set(param, params[param]);
  }

  return uri.href;
}

const CommonPlugin = {
  install(app, options) {
    app.config.globalProperties.$uri = uri;
    app.config.globalProperties.$numStr = numStr;
  },
};
