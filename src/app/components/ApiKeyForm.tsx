import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { MasterPrimaryButton } from '../ui/MasterPrimaryButton';

type props = {
  onClickSubmit: (value: string) => Promise<void>;
  onClickReset: () => void;
};

export default function ApiKeyForm({ onClickSubmit, onClickReset }: props) {
  const formSchema = z.object({
    ApiKey: z
      .string()
      .startsWith('live_', {
        message: 'API Key가 live_로 시작하지 않습니다.',
      })
      .length(101, {
        message: 'API Key의 길이가 유효하지 않습니다.',
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ApiKey: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    onClickSubmit(values.ApiKey);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-row gap-3 mt-3 w-full shrink'
        method='post'
      >
        <div className='w-[70%] relative'>
          <FormField
            control={form.control}
            name='ApiKey'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder='넥슨 OPEN API 사이트에서 발급받은 API Key 값을 입력해주세요.'
                    className='w-full min-w-[300px] h-[46px] bg-white rounded-[10px] text-black text-start font-regular'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage className='font-regular' />
              </FormItem>
            )}
          />
        </div>
        <Link
          href='https://openapi.nexon.com/'
          className='absolute bg-black text-white font-bold text-[12px] rounded-[30px] w-[15%] h-[40px] left-[52%] whitespace-nowrap text-center leading-[40px] mt-1'
          target='_blank'
        >
          넥슨 OPEN API 바로가기
        </Link>
        <div className='flex flex-row gap-3 w-[15%]'>
          <MasterPrimaryButton
            text='조회'
            onClick={undefined}
            color='r2'
            type='submit'
          />
          <MasterPrimaryButton
            text='초기화'
            onClick={onClickReset}
            color='n2'
            type={undefined}
          />
        </div>
      </form>
    </Form>
  );
}
