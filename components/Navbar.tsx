import Link from "next/link";

export default function Header() {
    return (
        <header className="text-gray-600 body-font border-b border-gray-300"> {/* 하단 선을 추가 */}
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <Link legacyBehavior href="/showreel">
                  <h1 className="text-center font-bold text-4xl">도도북스</h1>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link legacyBehavior href="/"><a className="mr-5 hover:text-gray-900">홈</a></Link>
                    <Link legacyBehavior href="/"><a className="mr-5 hover:text-gray-900">소개</a></Link>
                    <Link legacyBehavior href="/contact"><a className="mr-5 hover:text-gray-900">신청하기</a></Link>
                    <Link legacyBehavior href="/mypage"><a className="mr-5 hover:text-gray-900">마이페이지</a></Link>
                </nav>
            </div>
        </header>
    );
}