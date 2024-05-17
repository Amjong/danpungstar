export const isJetBlackItem = (itemName: string) => {
  if (
    itemName === '몽환의 벨트' ||
    itemName === '커맨더 포스 이어링' ||
    itemName === '루즈 컨트롤 머신 마크' ||
    itemName === '마력이 깃든 안대' ||
    itemName === '거대한 공포' ||
    itemName === '고통의 근원' ||
    itemName === '컴플리트 언더컨트롤'
  ) {
    return true;
  }
  return false;
};
