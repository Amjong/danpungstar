export const MasterPrimaryButton = ({ text, onClick, color }) => {
  const buttonColor = color === 'r2' ? 'bg-r2' : 'bg-n2';
  /* TODO : buttonColor 를 동적으로 변경 가능하도록 수정 */
  return (
    <button
      className={`hover:shadow-lg flex items-center w-full justify-center rounded-[10px] ${buttonColor} font-bold text-white h-[46px] text-center whitespace-nowrap`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
