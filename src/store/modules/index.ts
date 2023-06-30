const files = require.context('./', false, /(^.\/)+(.*)+(.(js|ts))$/);
const modules: Record<string, object> = {};
files.keys().forEach((item) => {
  if (/.\/index.(js|ts)$/.test(item)) return;

  // console.log(item);
  const fileTest = /^.\/+(.*)+(.(js|ts))$/;
  const fileName = item.replace(fileTest, '$1');

  modules[fileName] = files(item).default;
});

export default modules;
