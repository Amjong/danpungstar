import PeriodSelectPanel from './components/PeriodSelectPanel';
import ApiKeyInputPanel from './components/ApiKeyInputPanel';

export default function Page() {
  return (
    <div className='flex flex-col h-full'>
      <section className='flex w-full pb-5'>
        <div className='flex flex-col mt-10 mx-20 w-full h-[1500px]'>
          <div>
            <ApiKeyInputPanel />
          </div>
          <PeriodSelectPanel />
        </div>
      </section>
    </div>
  );
}
