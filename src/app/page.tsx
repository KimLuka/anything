import { Wheat } from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center">점심 메뉴 추천</h1>
      </header>

      <form className="flex flex-col gap-6 max-w-2xl mx-auto">
        {/* 위치 선택 섹션 */}
        <section>
          <h2 className="text-xl font-semibold mb-3">현재 위치</h2>
          <div className="flex gap-2">
            <input
              type="text"
              id="location"
              name="location"
              placeholder="위치를 입력하세요"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              aria-describedby="location-help"
            />
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              검색
            </button>
          </div>
        </section>

        {/* 이동 가능 시간 섹션 */}
        <div className="flex gap-2 justify-between">
          <section>
            <h2 className="text-xl font-semibold mb-3">이동 가능 시간</h2>
            <div
              className="flex gap-2 flex-wrap"
              role="group"
              aria-labelledby="time-group"
            >
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                5분
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                10분
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                15분
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                20분
              </button>
            </div>
          </section>

          {/* 국물 여부 섹션 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">국물 여부</h2>
            <div
              className="flex gap-2 flex-wrap"
              role="group"
              aria-labelledby="soup-group"
            >
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                전체
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                국물 없음
              </button>
              <button
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                국물 있음
              </button>
            </div>
          </section>
        </div>

        {/* 싫어하는 메뉴 섹션 */}
        <div className="grid gap-6 grid-cols-2">
          <section>
            <div className="flex gap-2 items-center justify-between mb-3">
              <h2 className="text-xl font-semibold">오늘 먹기 싫은 메뉴</h2>
              <p className="text-sm text-gray-500">중복 선택 가능</p>
            </div>
            <div
              className="flex flex-col gap-3"
              role="group"
              aria-labelledby="dislike-menu-group"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-korean"
                  name="dislike-menu"
                  value="korean"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="dislike-korean"
                  className="flex items-center gap-1"
                >
                  <Wheat className="w-4 h-4" aria-hidden="true" />
                  한식
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-chinese"
                  name="dislike-menu"
                  value="chinese"
                  className="w-4 h-4"
                />
                <label htmlFor="dislike-chinese">중식</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-japanese"
                  name="dislike-menu"
                  value="japanese"
                  className="w-4 h-4"
                />
                <label htmlFor="dislike-japanese">일식</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-western"
                  name="dislike-menu"
                  value="western"
                  className="w-4 h-4"
                />
                <label htmlFor="dislike-western">양식</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-asian"
                  name="dislike-menu"
                  value="asian"
                  className="w-4 h-4"
                />
                <label htmlFor="dislike-asian">아시안</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-icecream"
                  name="dislike-menu"
                  value="icecream"
                  className="w-4 h-4"
                />
                <label htmlFor="dislike-icecream">아이스크림</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-chicken"
                  name="dislike-menu"
                  value="chicken"
                  className="w-4 h-4"
                />
                <label htmlFor="dislike-chicken">치킨</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="dislike-pizza"
                  name="dislike-menu"
                  value="pizza"
                  className="w-4 h-4"
                />
                <label htmlFor="dislike-pizza">피자</label>
              </div>
            </div>
          </section>

          {/* 좋아하는 메뉴 섹션 */}
          <section>
            <div className="flex gap-2 items-center justify-between mb-3">
              <h2 className="text-xl font-semibold ">오늘 먹고 싶은 메뉴</h2>
              <p className="text-sm text-gray-500">중복 선택 가능</p>
            </div>
            <div
              className="flex flex-col gap-3"
              role="group"
              aria-labelledby="like-menu-group"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-korean"
                  name="like-menu"
                  value="korean"
                  className="w-4 h-4"
                />
                <label
                  htmlFor="like-korean"
                  className="flex items-center gap-1"
                >
                  <Wheat className="w-4 h-4" aria-hidden="true" />
                  한식
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-chinese"
                  name="like-menu"
                  value="chinese"
                  className="w-4 h-4"
                />
                <label htmlFor="like-chinese">중식</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-japanese"
                  name="like-menu"
                  value="japanese"
                  className="w-4 h-4"
                />
                <label htmlFor="like-japanese">일식</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-western"
                  name="like-menu"
                  value="western"
                  className="w-4 h-4"
                />
                <label htmlFor="like-western">양식</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-asian"
                  name="like-menu"
                  value="asian"
                  className="w-4 h-4"
                />
                <label htmlFor="like-asian">아시안</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-icecream"
                  name="like-menu"
                  value="icecream"
                  className="w-4 h-4"
                />
                <label htmlFor="like-icecream">아이스크림</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-chicken"
                  name="like-menu"
                  value="chicken"
                  className="w-4 h-4"
                />
                <label htmlFor="like-chicken">치킨</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="like-pizza"
                  name="like-menu"
                  value="pizza"
                  className="w-4 h-4"
                />
                <label htmlFor="like-pizza">피자</label>
              </div>
            </div>
          </section>
        </div>

        {/* 액션 버튼 섹션 */}
        <section className="flex gap-4 justify-center pt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 font-semibold"
          >
            추천 받기
          </button>
          <button
            type="reset"
            className="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-600 font-semibold"
          >
            초기화
          </button>
        </section>
      </form>
    </main>
  );
}
