'use strict';

exports.className = (obj, cursorString) => {
  const objString = obj.constructor.toString();
  return objString.substr(6, objString.indexOf(cursorString) - 6);
}
