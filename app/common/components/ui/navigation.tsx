import { Separator } from "~/common/components/ui/separator";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "~/common/components/ui/navigation-menu";
import { Link } from "react-router";


const menus = [
    {
        name: "Products",
        to: "/products",
        items: [
            {
                name: "Leaderboards",
                description: "See the top performers in your community",
                to: "/products/leaderboards"
            },
            {
                name: "Categories",
                description: "Explore the categories of products",
                to: "/products/categories"
            },
            {
                name: "Search",
                description: "Search for a product",
                to: "/products/search"
            },
            {
                name: "Submit a product",
                description: "Submit a product to the community",
                to: "/products/submit"
            },
            {
                name: "Promote",
                description: "Promote a product to the community",
                to: "/products/promote"
            }
        ]
    },
    {
        name: "Jobs",
        to: "/jobs",
        items: [
            {
                name: "Remote Jobs",
                description: "Find a remote job in the community",
                to: "/jobs?location=remote"
            },
            {
                name: "Full-time Jobs",
                description: "Find a full-time job in the community",
                to: "/jobs?type=full-time"
            },
            {
                name: "Freelance Jobs",
                description: "Find a freelance job in the community",
                to: "/jobs?type=freelance"
            },
            {
                name: "Internships",
                description: "Find an internship in the community",
                to: "/jobs?type=internship"
            },
            {
                name: "Submit a job",
                description: "Submit a job to the community",
                to: "/jobs/submit"
            }
        ]
    },
    {
        name: "Community",
        to: "/community",
        items: [
            {
                name: "All posts",
                description: "See all posts in the community",
                to: "/community"
            },
            {
                name: "Top posts",
                description: "See the top posts in the community",
                to: "/community?sort=top"
            },
            {
                name: "New posts",
                description: "See the new posts in the community",
                to: "/community?sort=new"
            },
            {
                name: "Create a post",
                description: "Create a post in the community",
                to: "/community/create"
            }
        ]
    },
    {
        name: "IdeasGPT",
        to: "/ideas"
    },
    {
        name: "Teams",
        to: "/teams",
        items: [
            {
                name: "All teams",
                description: "See all teams in the community",
                to: "/teams"
            },
            {
                name: "Create a team",
                description: "Create a team in the community",
                to: "/teams/create"
            }
        ]
    }
]

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
     * - bg-background/50: 배경색을 Tailwind의 background 변수로 지 정하고, 투명도를 50%로 설정합니다.
     */
    return (
        <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
            <div className="flex items-center">
                <Link to="/" className="font-bold tracking-tighter">wemake</Link>
                <Separator orientation="vertical" className="h-6 mx-4" />
                <NavigationMenu>
                    <NavigationMenuList>
                        {menus.map((menu) => (
                            <NavigationMenuItem key={menu.name}>
                                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                                <NavigationMenuContent>{menu.items?.map((subMenu) => (
                                    <NavigationMenuItem key={subMenu.name}>
                                        <Link to={subMenu.to}>{subMenu.name}</Link>
                                    </NavigationMenuItem>))}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </nav>
    );
}