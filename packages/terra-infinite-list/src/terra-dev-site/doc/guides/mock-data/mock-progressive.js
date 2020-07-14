const mockData = (pageKey) => {
  let isFinalPage = false;
  const nextPageKey = (pageKey >= 0 ? pageKey : 0) + 1;
  if (nextPageKey > 9) {
    isFinalPage = true;
  }

  const items = [];
  for (let i = 0; i < 10; i += 1) {
    items.push(
      {
        title: `Item ${pageKey * 10 + i}`,
        key: `unique-${pageKey * 10 + i}`,
      },
    );
  }

  return {
    nextPageKey,
    items,
    isFinalPage,
  };
};

const mockRequest = pageKey => new Promise(resolve => setTimeout(() => { resolve(mockData(pageKey)); }, 2000));

export default mockRequest;
