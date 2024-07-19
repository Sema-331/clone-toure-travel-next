export const convertationTime = (a: Date, b: Date) => {
  let c = new Date(a);
  let d = new Date(b);
  // Если оба являются объектами Date, можно вычислить разницу в миллисекундах
  let differenceInMilliseconds = (c as any) - (d as any);

  // Переводим разницу в минуты
  let differenceInMinutes = differenceInMilliseconds / (1000 * 60);
  return differenceInMinutes;
};
