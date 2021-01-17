import chunkyLentilSoup from "./_chunky-lentil-soup.json";

export default [chunkyLentilSoup].reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});
