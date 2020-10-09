export default function (key, value, location, history) {
  let pathname = location.pathname;
  // returns path: '/app/books'
  let searchParams = new URLSearchParams(location.search);
  // returns the existing query string: '?type=fiction&author=fahid'
  searchParams.set(key, value);

  history.push({
    pathname: pathname,
    search: searchParams.toString(),
  });
}
