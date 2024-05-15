export const formatNumberToKorean = (num: number) => {
  const units = ['', '만', '억', '조'];
  const splitNum = String(num)
    .split(/(?=(?:\d{4})+(?!\d))/g)
    .reverse();
  return splitNum
    .map((n, i) => {
      const parsed = parseInt(n, 10);
      return parsed > 0 ? parsed + units[i] : '';
    })
    .reverse()
    .join(' ')
    .trim();
};
