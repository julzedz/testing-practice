const stringLength = (string) => {
  if (string === '') {
    return 'Error: Empty String';
  } if (string.length > 10) {
    return 'Error: String Too Long';
  }
  return string.length;
};

module.exports = stringLength;