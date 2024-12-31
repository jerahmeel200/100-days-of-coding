(() => {
  const laptop1 = [1500, 1900, 1100];
  const laptop2 = [1200, 1600, 1400];

  const combine = [...laptop1, ...laptop2].sort((a, b) => a - b);
  console.log(combine);
})();
