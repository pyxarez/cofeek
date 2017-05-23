//Someday write regular expression...
export const matchString = (string, query) => {
  switch(true) {
    case string.includes(query):
      return true;
    case string.split(' ').includes(query):
      return true;
    case string.toLowerCase().includes(query.toLowerCase()):
      return true;
    case string.toLowerCase().split(' ').includes(query.toLowerCase()):
      return true;
    default:
      return false;
  }
}