const { getTable } = require('./itemLevelInfo');

type Item = {
  name: string;
  level: number;
  imageUrl: string;
};

const items: Item[] = [
  {
    name: '에스텔라 이어링',
    level: 160,
    imageUrl: '',
  },
  {
    name: '트와일라이트 마크',
    level: 140,
    imageUrl: '',
  },
  {
    name: '데이브레이크 펜던트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '여명의 가디언 엔젤 링',
    level: 160,
    imageUrl: '',
  },
  {
    name: '이글아이 던위치로브',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 던위치팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 던위치햇',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 어새신셔츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 어새신팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 어새신보닛',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 레인져후드',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 레인져팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 레인져베레',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 원더러코트',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 원더러팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 원더러햇',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 워리어아머',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 워리어팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 워리어헬름',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 미스틸테인',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 트윈클리버',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 골디언해머',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 페니텐시아',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 배틀클리버',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 라이트닝어',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 브류나크',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 문글레이브',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 데스브링어',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 빅 마운틴',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 포기브니스',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 마나테이커',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 마나크라운',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 마나크래들',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 ESP리미터',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 매직 건틀렛',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 윈드체이서',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 윈드윙슈터',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 듀얼윈드윙',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 에인션트 보우',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 나이트체이서',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 다마스커스',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 리스크홀더',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 클레르시엘',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 스플릿엣지',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 체인',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 용선',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 차크람',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 래피드엣지',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 첼리스카',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 펜리르탈론',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 엔젤릭슈터',
    level: 150,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 세이버',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 엑스',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 해머',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 투핸드소드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 투핸드엑스',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 투핸드해머',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 스피어',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 폴암',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 데스페라도',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 엘라하',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 튜너',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 완드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 스태프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 샤이닝로드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 ESP리미터',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 매직 건틀렛',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 보우',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 크로스보우',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 듀얼보우건',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 에인션트 보우',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 브레스 슈터',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 대거',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 가즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 케인',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 에너지체인',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 초선',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 블레이드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 피스톨',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 클로',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시즈건',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 소울슈터',
    level: 200,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트헬름',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 세이버',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 엑스',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 비트해머',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 브로드세이버',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 브로드엑스',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 피어싱스피어',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 핼버드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 데스페라도',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파일 갓',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 튜너',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 스펠링완드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 스펠링스태프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 샤이닝로드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 ESP리미터',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 매직 건틀렛',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지크라운',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 슈팅보우',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 크로스보우',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 듀얼보우건',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 에인션트 보우',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 브레스 슈터',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처후드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 슬래셔',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 리벤지가즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 핀쳐케인',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 에너지소드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 체인',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 괴선',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 차크람',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 블레이드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프캡',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 포인팅건',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 블로우너클',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 블래스트캐논',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 소울슈터',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛페도라',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '라이온하트 커틀러스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 챔피온엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀해머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀시미터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 기간틱모울',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 푸스키나',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 파르티잔',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 페인풀 데스티니',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 발로르',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 리스트레인트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀헬름',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀메일',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀브레이서',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 아크완드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 워스태프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 타나토스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 ESP리미터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 매직건틀렛',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지샐릿',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지로브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지피스트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지슈즈',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 컴포지트보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 헤비크로스보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 그란 듀얼보우건',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 에인션트 보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 스플린디드네로',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널캡',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널슈트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서아머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 바젤라드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 메탈피스트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 섀도우블레이드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 크림슨 케인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 퀸스폴링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 각선',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 샤프슈터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 와일드탈론',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 플람',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 소울드링커',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 퀸스폴링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼코트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트헬름',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트아머',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지햇',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지로브',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처햇',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처후드',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프반다나',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프셔츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛햇',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛코트',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '몽환의 벨트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '루즈 컨트롤 머신 마크',
    level: 160,
    imageUrl: '',
  },
  {
    name: '마력이 깃든 안대',
    level: 160,
    imageUrl: '',
  },
  {
    name: '커맨더 포스 이어링',
    level: 200,
    imageUrl: '',
  },
  {
    name: '거대한 공포',
    level: 200,
    imageUrl: '',
  },
  {
    name: '고통의 근원',
    level: 160,
    imageUrl: '',
  },
  {
    name: '응축된 힘의 결정석',
    level: 110,
    imageUrl: '',
  },
  {
    name: '아쿠아틱 레터 눈장식',
    level: 100,
    imageUrl: '',
  },
  {
    name: '블랙빈 마크',
    level: 135,
    imageUrl: '',
  },
  {
    name: '파풀라투스 마크',
    level: 145,
    imageUrl: '',
  },
  {
    name: '지옥의 불꽃',
    level: 130,
    imageUrl: '',
  },
  {
    name: '데아 시두스 이어링',
    level: 130,
    imageUrl: '',
  },
  {
    name: '실버블라썸 링',
    level: 110,
    imageUrl: '',
  },
  {
    name: '고귀한 이피아의 반지',
    level: 120,
    imageUrl: '',
  },
  {
    name: '가디언 엔젤 링',
    level: 160,
    imageUrl: '',
  },
  {
    name: '혼테일의 목걸이',
    level: 120,
    imageUrl: '',
  },
  {
    name: '카오스 혼테일의 목걸이',
    level: 120,
    imageUrl: '',
  },
  {
    name: '매커네이터 펜던트',
    level: 120,
    imageUrl: '',
  },
  {
    name: '도미네이터 펜던트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '골든 클로버 벨트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '분노한 자쿰의 벨트',
    level: 150,
    imageUrl: '',
  },
  {
    name: '로얄 블랙메탈 숄더',
    level: 120,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지로브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지샐릿',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀메일',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀헬름',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널슈트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널캡',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼코트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서아머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 ESP리미터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 가즈',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 거선',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 대거',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 데스페라도',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 듀얼보우건',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 드래곤소울',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 리스트레인트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 매직 건틀렛',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 브레스 슈터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 블레이드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 샤이닝로드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 세이버',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 세투스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 스태프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 스피어',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 시즈건',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 에너지체인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 에인션트 보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 완드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 체인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 케인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 크로스보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 클로',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 투핸드소드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 투핸드해머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 피스톨',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 해머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 투핸드엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 핼버드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 흐림두르스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 ESP리미터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 가즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 대거',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 데스페라도',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 듀얼보우건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 드래곤소울',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 로열티',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 루퍼스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 매직 건틀렛',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 브레스 슈터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 블레이드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 샤이닝로드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 세이버',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 스태프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 스피어',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 시즈건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 에너지체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 에인션트 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 예거',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 완드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 위선',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 케인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 크로스보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 클로',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 투핸드소드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 투핸드엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 투핸드해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 피스톨',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 핼버드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 세이버',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스워드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 투핸드엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 투핸드해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스피어',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 핼버드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 플러드퓨리',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 이미르',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 로열티',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 완드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스태프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 글로리어',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 ESP리미터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 매직 건틀렛',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 크로스보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 듀얼보우건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 에인션트 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 브레스 슈터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 대거',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 가즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 케인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 호선',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 피스톨',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 클로',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 시즈건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 화이트웜',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 에너지체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '마이스터링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '마이스터 이어링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '마이스터 숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이징 썬 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 아처 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 파이렛 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 매지션 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 시프 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 워리어 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 스페셜 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '베어스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '아울스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '울프스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '피콕스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '피어리스 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '강인함의 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '날카로운 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '지혜의 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '행운의 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '날카로운 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '강인함의 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '지혜의 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '행운의 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '앤티크 루트 숄더',
    level: 150,
    imageUrl: '',
  },
  {
    name: '앤티크 루트 글러브',
    level: 150,
    imageUrl: '',
  },
  {
    name: '앤티크 루트 부츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '앤티크 리프 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '에스텔라 이어링',
    level: 160,
    imageUrl: '',
  },
  {
    name: '트와일라이트 마크',
    level: 140,
    imageUrl: '',
  },
  {
    name: '데이브레이크 펜던트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '여명의 가디언 엔젤 링',
    level: 160,
    imageUrl: '',
  },
  {
    name: '이글아이 던위치로브',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 던위치팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 던위치햇',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 어새신셔츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 어새신팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 어새신보닛',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 레인져후드',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 레인져팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 레인져베레',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 원더러코트',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 원더러팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 원더러햇',
    level: 150,
    imageUrl: '',
  },
  {
    name: '이글아이 워리어아머',
    level: 150,
    imageUrl: '',
  },
  {
    name: '트릭스터 워리어팬츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '하이네스 워리어헬름',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 미스틸테인',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 트윈클리버',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 골디언해머',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 페니텐시아',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 배틀클리버',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 라이트닝어',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 브류나크',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 문글레이브',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 데스브링어',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 빅 마운틴',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 포기브니스',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 마나테이커',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 마나크라운',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 마나크래들',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 ESP리미터',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 매직 건틀렛',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 윈드체이서',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 윈드윙슈터',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 듀얼윈드윙',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 에인션트 보우',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 나이트체이서',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 다마스커스',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 리스크홀더',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 클레르시엘',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 스플릿엣지',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 체인',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 용선',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 차크람',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 래피드엣지',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 첼리스카',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 펜리르탈론',
    level: 150,
    imageUrl: '',
  },
  {
    name: '파프니르 엔젤릭슈터',
    level: 150,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 메이지햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 나이트햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시프햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 아처햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛글러브',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛숄더',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛슈즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛슈트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛케이프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 파이렛햇',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 세이버',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 엑스',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 해머',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 투핸드소드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 투핸드엑스',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 투핸드해머',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 스피어',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 폴암',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 데스페라도',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 엘라하',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 튜너',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 완드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 스태프',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 샤이닝로드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 ESP리미터',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 매직 건틀렛',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 보우',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 크로스보우',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 듀얼보우건',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 에인션트 보우',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 브레스 슈터',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 대거',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 가즈',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 케인',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 에너지체인',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 초선',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 블레이드',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 피스톨',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 클로',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 시즈건',
    level: 200,
    imageUrl: '',
  },
  {
    name: '아케인셰이드 소울슈터',
    level: 200,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트헬름',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 나이트케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 세이버',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 엑스',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 비트해머',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 브로드세이버',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 브로드엑스',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 피어싱스피어',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 핼버드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 데스페라도',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파일 갓',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 튜너',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 스펠링완드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 스펠링스태프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 샤이닝로드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 ESP리미터',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 매직 건틀렛',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지크라운',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 메이지숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 슈팅보우',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 크로스보우',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 듀얼보우건',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 에인션트 보우',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 브레스 슈터',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처후드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 아처숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 슬래셔',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 리벤지가즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 핀쳐케인',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 에너지소드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 체인',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 괴선',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 차크람',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 블레이드',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프캡',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 시프숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 포인팅건',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 블로우너클',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 블래스트캐논',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 소울슈터',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛페도라',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛슈트',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛슈즈',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛글러브',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛케이프',
    level: 160,
    imageUrl: '',
  },
  {
    name: '앱솔랩스 파이렛숄더',
    level: 160,
    imageUrl: '',
  },
  {
    name: '라이온하트 커틀러스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 챔피온엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀해머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀시미터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 기간틱모울',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 푸스키나',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 파르티잔',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 페인풀 데스티니',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 발로르',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 리스트레인트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀헬름',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀메일',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀브레이서',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이온하트 배틀숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 아크완드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 워스태프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 타나토스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 ESP리미터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 매직건틀렛',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지샐릿',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지로브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지피스트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지슈즈',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '드래곤테일 메이지숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 컴포지트보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 헤비크로스보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 그란 듀얼보우건',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 에인션트 보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 스플린디드네로',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널캡',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널슈트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '팔콘윙 센티널숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서아머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체이서숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 바젤라드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 메탈피스트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 섀도우블레이드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 크림슨 케인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 퀸스폴링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 체인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '레이븐혼 각선',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 샤프슈터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 와일드탈론',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 플람',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 소울드링커',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 퀸스폴링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼코트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '샤크투스 스키퍼숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트헬름',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트아머',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 나이트숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지햇',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지로브',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 메이지숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처햇',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처후드',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 아처숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프반다나',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프셔츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 시프숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛햇',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛코트',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛팬츠',
    level: 250,
    imageUrl: '',
  },
  {
    name: '에테르넬 파이렛숄더',
    level: 250,
    imageUrl: '',
  },
  {
    name: '몽환의 벨트',
    level: 200,
    imageUrl: '',
  },
  {
    name: '루즈 컨트롤 머신 마크',
    level: 160,
    imageUrl: '',
  },
  {
    name: '마력이 깃든 안대',
    level: 160,
    imageUrl: '',
  },
  {
    name: '커맨더 포스 이어링',
    level: 200,
    imageUrl: '',
  },
  {
    name: '거대한 공포',
    level: 200,
    imageUrl: '',
  },
  {
    name: '고통의 근원',
    level: 160,
    imageUrl: '',
  },
  {
    name: '응축된 힘의 결정석',
    level: 110,
    imageUrl: '',
  },
  {
    name: '아쿠아틱 레터 눈장식',
    level: 100,
    imageUrl: '',
  },
  {
    name: '블랙빈 마크',
    level: 135,
    imageUrl: '',
  },
  {
    name: '파풀라투스 마크',
    level: 145,
    imageUrl: '',
  },
  {
    name: '지옥의 불꽃',
    level: 130,
    imageUrl: '',
  },
  {
    name: '데아 시두스 이어링',
    level: 130,
    imageUrl: '',
  },
  {
    name: '실버블라썸 링',
    level: 110,
    imageUrl: '',
  },
  {
    name: '고귀한 이피아의 반지',
    level: 120,
    imageUrl: '',
  },
  {
    name: '가디언 엔젤 링',
    level: 160,
    imageUrl: '',
  },
  {
    name: '혼테일의 목걸이',
    level: 120,
    imageUrl: '',
  },
  {
    name: '카오스 혼테일의 목걸이',
    level: 120,
    imageUrl: '',
  },
  {
    name: '매커네이터 펜던트',
    level: 120,
    imageUrl: '',
  },
  {
    name: '도미네이터 펜던트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '골든 클로버 벨트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '분노한 자쿰의 벨트',
    level: 150,
    imageUrl: '',
  },
  {
    name: '로얄 블랙메탈 숄더',
    level: 120,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지로브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지샐릿',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 메이지글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀메일',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀헬름',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 배틀케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널슈트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 센티널캡',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼코트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 스키퍼햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서글러브',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서부츠',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서아머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서케이프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '펜살리르 체이서햇',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 ESP리미터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 가즈',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 거선',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 대거',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 데스페라도',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 듀얼보우건',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 드래곤소울',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 리스트레인트',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 매직 건틀렛',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 브레스 슈터',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 블레이드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 샤이닝로드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 세이버',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 세투스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 스태프',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 스피어',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 시즈건',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 에너지체인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 에인션트 보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 완드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 체인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 케인',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 크로스보우',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 클로',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 투핸드소드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 투핸드해머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 피스톨',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 해머',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 투핸드엑스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 핼버드',
    level: 140,
    imageUrl: '',
  },
  {
    name: '우트가르드 흐림두르스',
    level: 140,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 워리어글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 매지션글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 아처글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 로그글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛햇',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛슈즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '무스펠 파이렛글러브',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 ESP리미터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 가즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 대거',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 데스페라도',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 듀얼보우건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 드래곤소울',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 로열티',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 루퍼스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 매직 건틀렛',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 브레스 슈터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 블레이드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 샤이닝로드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 세이버',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 스태프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 스피어',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 시즈건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 에너지체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 에인션트 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 예거',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 완드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 위선',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 케인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 크로스보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 클로',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 투핸드소드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 투핸드엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 투핸드해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 피스톨',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 핼버드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '쟈이힌 해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 세이버',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스워드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 투핸드엑스',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 투핸드해머',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스피어',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 핼버드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 플러드퓨리',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 이미르',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 로열티',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 완드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스태프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 글로리어',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 ESP리미터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 매직 건틀렛',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 크로스보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 듀얼보우건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 에인션트 보우',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 브레스 슈터',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 대거',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 가즈',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 케인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 호선',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 피스톨',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 클로',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 시즈건',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 화이트웜',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 에너지체인',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 워리어케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 메이지케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 센티널케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 체이서케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼헬름',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼슈트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼부츠',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼핸드',
    level: 130,
    imageUrl: '',
  },
  {
    name: '로얄 반 레온 스키퍼케이프',
    level: 130,
    imageUrl: '',
  },
  {
    name: '마이스터링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '마이스터 이어링',
    level: 140,
    imageUrl: '',
  },
  {
    name: '마이스터 숄더',
    level: 140,
    imageUrl: '',
  },
  {
    name: '라이징 썬 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 아처 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 파이렛 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 매지션 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 시프 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 워리어 마이스터 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '샤이니 레드 스페셜 심볼',
    level: 130,
    imageUrl: '',
  },
  {
    name: '베어스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '아울스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '울프스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '피콕스 퍼플 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '피어리스 펜던트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '강인함의 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '날카로운 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '지혜의 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '행운의 익스트림 벨트',
    level: 130,
    imageUrl: '',
  },
  {
    name: '날카로운 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '강인함의 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '지혜의 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '행운의 샤이니 로얄 마이스터 숄더',
    level: 130,
    imageUrl: '',
  },
  {
    name: '앤티크 루트 숄더',
    level: 150,
    imageUrl: '',
  },
  {
    name: '앤티크 루트 글러브',
    level: 150,
    imageUrl: '',
  },
  {
    name: '앤티크 루트 부츠',
    level: 150,
    imageUrl: '',
  },
  {
    name: '앤티크 리프 숄더',
    level: 130,
    imageUrl: '',
  },
];

module.exports = items;
