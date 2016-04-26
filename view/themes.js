module['exports'] = function view (opts, callback) {
  var $ = this.$, req = opts.req;
  var appName = req.hostname;
  var out = $.html();
  out = out.replace(/\{\{appName\}\}/g, appName);
  callback(null, out);
};