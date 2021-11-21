export default inputColor => {
  const hexRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  return hexRegex.test(inputColor);
};
