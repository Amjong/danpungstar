import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ApiKeyGuidePanel from './ApiKeyGuidePanel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function ApiKeyDialog({
  errorText,
  setErrorText,
  isLoading,
  setIsLoading,
  LoadingProgress,
}: {
  errorText: string;
  isLoading: boolean;
  setErrorText: (text: string) => void;
  setIsLoading: (loading: boolean) => void;
  LoadingProgress: { current: number; total: number };
}) {
  const onErrorDialogOpenChange = (open: boolean) => {
    if (!open) setErrorText('');
  };
  const onLoadingDialogOpenChange = (open: boolean) => {
    if (!open) setIsLoading(false);
  };
  return (
    <>
      <span className='text-white font-bold text-xl'>API Key 입력 가이드 </span>
      <Dialog>
        <DialogTrigger asChild>
          <OpenInNewIcon className='cursor-pointer' color='primary' />
        </DialogTrigger>
        <DialogContent className='flex w-full overflow-y-auto h-screen bg-n1'>
          <ApiKeyGuidePanel />
        </DialogContent>
      </Dialog>
      <Dialog open={errorText !== ''} onOpenChange={onErrorDialogOpenChange}>
        <DialogContent className='bg-n2'>
          <div className='font-bold'>{errorText}</div>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isLoading && errorText === ''}
        onOpenChange={onLoadingDialogOpenChange}
      >
        <DialogContent className='bg-n2'>
          <div className='font-bold'>
            데이터 조회 중입니다. 잠시만 기다려 주세요.
          </div>
          <div>
            ({LoadingProgress.current}/{LoadingProgress.total})
          </div>
          <Button
            onClick={() => {
              setIsLoading(false);
              setErrorText('취소되었습니다.');
            }}
          >
            <span className='font-bold'>취소하기</span>
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
