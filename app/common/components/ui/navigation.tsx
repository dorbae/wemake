import { Separator } from "~/common/components/ui/separator";
import { Link } from "react-router";

export default function Navigation() {
    /**
     * className 설명:
     * - flex: flexbox 레이아웃을 적용하여 자식 요소들을 가로로 정렬합니다.
     * - px-20: 좌우 패딩을 5rem(80px)씩 적용합니다.
     * - h-16: 높이를 4rem(64px)로 설정합니다.
     * - items-center: flex 컨테이너의 자식들을 수직 중앙 정렬합니다.
     * - justify-between: 양 끝에 요소들을 배치하고, 사이에 공간을 최대한 넓힙니다.
     * - backdrop-blur: 배경에 블러(흐림) 효과를 적용합니다.
     * - fixed: 네비게이션 바를 화면에 고정시킵니다.
     * - top-0 left-0 right-0: 상단, 좌측, 우측을 0으로 고정하여 전체 가로폭을 차지하게 합니다.
     * - z-50: z-index를 50으로 설정하여 다른 요소들 위에 표시합니다.
     * - bg-background/50: 배경색을 Tailwind의 background 변수로 지정하고, 투명도를 50%로 설정합니다.
     */
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
            <div className="flex items-center">
                <Link to="/" className="font-bold tracking-tighter">wemake</Link>
                <Separator orientation="vertical" className="h-6 mx-4" />
            </div>
        </nav>
    );
}