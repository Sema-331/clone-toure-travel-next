export const getRateSum = (userSecond: any) => {
  const value = (
    userSecond.reduce(
      (prev: number, item: { rating: string }) => prev + Number(item.rating),
      0
    ) / userSecond.length
  ).toFixed(1);

  return value;
};
