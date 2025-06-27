# anything

## 폴더 구조

/src
├── app # Next.js 13+ App Router 기준
│ ├── page.tsx # 메인 페이지 (필터 입력)
│ ├── result
│ │ └── page.tsx # 추천 메뉴 결과
│ └── restaurant
│ └── page.tsx # 식당 추천 페이지
│
├── components # 공통 UI 컴포넌트
│ ├── Button.tsx
│ ├── Input.tsx
│ ├── FilterForm.tsx # 필터 입력 폼
│ ├── RecommendedMenu.tsx # 추천된 메뉴 카드
│ └── RestaurantList.tsx # 추천 식당 리스트
│
├── hooks # 커스텀 훅
│ ├── useMenuRecommendation.ts # 메뉴 추천 API 호출
│ └── useRestaurantSearch.ts # 식당 검색 로직
│
├── services # API 연동 모듈
│ ├── menu.ts # 메뉴 추천 API
│ └── restaurant.ts # 식당 검색 API
│
├── utils # 공통 유틸
│ ├── kakaoMap.ts # 카카오맵 연동 관련 함수
│ └── formatter.ts # 날짜/거리 등 포맷터
│
├── types # 타입 정의
│ ├── menu.ts
│ └── restaurant.ts
│
├── constants # 상수 값
│ └── filters.ts # 메뉴 옵션, 거리 제한 등
│
└── styles
├── globals.css
└── tailwind.config.js
