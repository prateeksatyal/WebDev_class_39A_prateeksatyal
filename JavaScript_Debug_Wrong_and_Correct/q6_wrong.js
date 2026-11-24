function countDown(n) {
  console.log(n);
  return countDown(n - 1);
}
countDown(5);
