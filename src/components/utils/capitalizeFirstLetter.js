export const capitalizeFirstLetter = str =>
  str
    .toLowerCase()
    .split(' ')
    .map(s => s[0].toUpperCase() + s.substring(1))
    .join(' ');