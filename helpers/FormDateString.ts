export function formatDateString(dateString: string, day_value: number = 0) {
  const decodedDateString = decodeURIComponent(dateString);
  const date = new Date(decodedDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const newRes = Number(day) + Number(day + day_value ? day_value : 0);
  console.log(dateString);
  return `${year}/${month}/${newRes}`;
}

// const res = {
//   const bb = 11
// }

// console.log(res)
