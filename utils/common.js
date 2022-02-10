const CommonPlugin = {
  install(app, options) {
    app.config.globalProperties.$uri = (
      params = {},
      href = window.location.href
    ) => {
      const uri = new URL(href);

      for (let param of Object.keys(params)) {
        uri.searchParams.set(param, params[param]);
      }

      return uri.href;
    };
  },
};
