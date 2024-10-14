'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObj = {};

  sourceString.split(';').forEach((elem) => {
    const startValueIndex = elem.indexOf(':');

    const parametr = elem.slice(0, startValueIndex).trim();
    const value = elem.slice(startValueIndex + 1).trim();

    parametr.replace(/\n/g, '');

    if (parametr) {
      convertedObj[parametr] = value;
    }
  });

  return convertedObj;
}

module.exports = convertToObject;
