import PeriodSelectPanel from './components/PeriodSelectPanel';
import ApiKeyInputPanel from './components/ApiKeyInputPanel';
import AvatarPanel from './components/AvatarPanel';
import ContentPanel from './components/ContentPanel';

export default function Page() {
  return (
    <div className='flex flex-col h-full'>
      <section className='flex bg-custom bg-fixed bg-cover w-full pb-5'>
        <div className='flex flex-col mt-10 sm:mt-5 w-full sm:flex-col-reverse sm:px-[15px]'>
          <div>
            <ApiKeyInputPanel />
          </div>
          <div className='sm:mb-20'>
            <PeriodSelectPanel />
          </div>
        </div>
      </section>
    </div>
  );
}
