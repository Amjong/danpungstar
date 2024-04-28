import Image from 'next/image';

export default function ApiKeyGuidePanel() {
  return (
    <div>
      <div className='font-bold text-white'>
        <div className='mb-1'>총 1 ~ 2분 정도 소요됩니다.</div>
        <div className='text-r2 mb-10'>
          *유의사항 <br />
          메이플 ID는 API Key 발급을 받을 수 없습니다. 넥슨 아이디로 로그인
          해주세요.
          <br />
        </div>
        <div className='mb-10'>
          1. 넥슨 Open API 웹사이트에 접속해서 넥슨 계정으로 로그인해주세요.{' '}
          <br />
          <a
            href='https://openapi.nexon.com/'
            target='_blank'
            rel='noreferrer'
            className='underline'
          >
            https://openapi.nexon.com/
          </a>
        </div>
        <div className='mb-10'>
          2. 애플리케이션 등록 을 클릭 해주세요. <br /> <br />
          <Image
            src='https://res.cloudinary.com/dazzvmx3y/image/upload/v1706447718/rf4iebw6cjppfatokcqv.png'
            width={1200}
            height={600}
            alt='guide1'
          ></Image>
        </div>
        <div className='mb-10'>
          3. 메이플스토리 를 선택해주세요. <br /> <br />
          4. 서비스 단계 를 선택해주세요. <br /> <br />
          5. 서비스 명은 &quot;단풍별&quot;, 개발환경은 &quot;WEB&quot;, 설명은
          &quot;스타포스 정보 확인용&quot; 이라고 입력해주세요. <br />
          URL은 &quot;https://danpungstar.com/&quot; 이라고 입력해주세요. <br />{' '}
          <br />
          6. 약관 동의 후 등록 해주세요. <br /> <br />
          <Image
            src='https://res.cloudinary.com/dazzvmx3y/image/upload/v1706447699/e6tpnfy31xvqlav1stij.png'
            alt='guide2'
            width={1200}
            height={600}
          />
        </div>
        <div>
          7. 등록 완료 후 애플리케이션 목록을 클릭해주세요. <br /> <br />
          8. 내 애플리케이션에서 단풍별(어플리케이션 명)을 클릭해주세요. <br />{' '}
          <br />
          9. 어플리케이션 상세 페이지에서 API Key를 복사하면 끝! <br /> <br />
          <Image
            src='https://res.cloudinary.com/dazzvmx3y/image/upload/v1706447710/gnlczwap9h3jaqfnmfbp.png'
            alt='guide3'
            width={1200}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}
