export default function MasterCard({
  className,
  children,
}: {
  className: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-[19px] bg-black flex flex-col items-center h-[418px] border-y4 border-[1px] shadow shadow-y4 py-10 ${className}`}
    >
      {children}
    </div>
  );
}
