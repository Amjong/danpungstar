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
      className={`flex items-center justify-center border-2 rounded-sm bg-black border-red-600 w-[70px] h-[80px]`}
    >
      {imageUrl === '' ? (
        <div className='text-white break-words'>
          이미지
          <br />
          준비 중
        </div>
      ) : (
        <Image
          alt='cardImage'
          src={imageUrl}
          width={width}
          height={height}
          objectFit='cover'
        />
      )}
    </div>
  );
}
