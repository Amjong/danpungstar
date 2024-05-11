import Image from 'next/image';

export default function ImageCard({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string;
  width: number;
  height: number;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 rounded-sm bg-black border-red-600 w-[${
        width + 10
      }px] h-[${height + 10}px]`}
    >
      {imageUrl === '' ? (
        <div className='text-white'>이미지 준비중입니다.</div>
      ) : (
        <Image alt='cardImage' src={imageUrl} width={width} height={height} />
      )}
    </div>
  );
}
