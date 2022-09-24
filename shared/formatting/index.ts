export const safeJSONParse = (input: string, defaultVal = {}) => {
  let json;
  if (input !== null && typeof input === 'object') {
    return input;
  }
  try {
    json = JSON.parse(input);
  } catch (er) {
    json = defaultVal;
  }
  return json || defaultVal;
};

export const safeJSONStringify = (input: any, defaultVal = '') => {
  let json;
  if (typeof input === 'string') {
    return input;
  }
  try {
    json = JSON.stringify(input);
  } catch (ex) {
    json = undefined;
  }
  return json || defaultVal || '';
};
