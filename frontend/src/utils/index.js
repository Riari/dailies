export function classList(classes, styles) {
  let list = [];

  for (let name of classes) {
    if (styles[name]) {
      list.push(styles[name]);
    }
  }

  return list.join(' ');
}
