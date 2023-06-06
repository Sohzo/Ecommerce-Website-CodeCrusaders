module.exports = {
  url: (url) => {
    if (url == '/') {
      return true
    } else {
      return false
    }
  }
};
// failed attempt at a helper