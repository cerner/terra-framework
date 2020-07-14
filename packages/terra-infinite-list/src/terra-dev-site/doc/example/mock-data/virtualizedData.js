const mockData = (() => {
  const items = [];
  for (let i = 0; i < 100; i += 1) {
    items.push(
      {
        title: `Item ${i}`,
        key: `unique-${i}`,
      },
    );
  }

  return items;
})();

export default mockData;
