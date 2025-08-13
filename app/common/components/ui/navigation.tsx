import { Separator } from "~/common/components/ui/separator";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "~/common/components/ui/navigation-menu";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { Button } from "./button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { BarChart3Icon, BellIcon, LogOutIcon, MessageCircleIcon } from "lucide-react";

let isLoggedIn = true;

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
                                {menu.items ? <>
                                    <Link to={menu.to}>
                                        <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        {/**
                                    * className 설명:
                                    * - grid: CSS Grid 레이아웃을 적용합니다.
                                    * - w-[500px]: 너비를 500px로 고정합니다.
                                    * - font-light: 폰트 두께를 얇게 설정합니다.
                                    * - gap-3: 그리드 아이템 간의 간격을 0.75rem(12px)로 설정합니다.
                                    * - p-4: 패딩을 1rem(16px)로 설정합니다.
                                    * - grid-cols-2: 2열 그리드로 배치합니다.
                                    */}
                                        <ul className="grid w-[500px] font-light gap-3 p-4 grid-cols-2">{menu.items?.map((subMenu) => (
                                            /**
                                             * className 설명:
                                             * - select-none: 텍스트 선택을 비활성화합니다.
                                             * - rounded-md: 모서리를 둥글게 설정합니다.
                                             * - transition-colors: 색상 변경 시 애니메이션 효과를 적용합니다.
                                             * - hover:bg-accent/50: 마우스 오버 시 배경색을 회색으로 설정합니다.
                                             */
                                            <NavigationMenuItem
                                                key={subMenu.name}
                                                className={cn([
                                                    "select-none rounded-md transition-colors hover:bg-accent/50",
                                                    subMenu.to === "/products/promote" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                    subMenu.to === "/jobs/submit" && "col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20",
                                                ])}
                                            >
                                                {/**
                                             * className 설명:
                                             * - p-3: 패딩을 0.75rem(12px)로 설정합니다.
                                             * - space-y-1: 자식 요소들 사이에 0.25rem(4px) 간격을 둡니다.
                                             * - block: 블록 요소로 표시하여 전체 너비를 차지하게 합니다.
                                             * - leading-none: 줄 간격을 1(기본값)로 설정합니다.
                                             * - no-underline: 밑줄을 제거합니다.
                                             * - outline-none: 포커스 시 아웃라인을 제거합니다.
                                             */}
                                                <Link className="p-3 space-y-1 block leading-none no-underline outline-none" to={subMenu.to}>
                                                    {/**
                                                 * className 설명:
                                                 * - text-sm: 작은 크기의 텍스트로 설정합니다.
                                                 * - font-medium: 폰트 두께를 중간으로 설정합니다.
                                                 * - leading-none: 줄 간격을 1(기본값)로 설정합니다.
                                                 */}
                                                    <span className="text-sm font-medium leading-none">{subMenu.name}</span>
                                                    {/**
                                                 * className 설명:
                                                 * - text-sm: 작은 크기의 텍스트로 설정합니다.
                                                 * - leading-snug: 줄 간격을 약간 좁게 설정합니다.
                                                 * - text-muted-foreground: 보조 텍스트 색상을 적용합니다.
                                                 */}
                                                    <p className="text-sm leading-snug text-muted-foreground">
                                                        {subMenu.description}
                                                    </p></Link>

                                            </NavigationMenuItem>))}
                                        </ul>
                                    </NavigationMenuContent>
                                </> : <Link className={navigationMenuTriggerStyle()} to={menu.to}>{menu.name}</Link>}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {isLoggedIn ? (<div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild>
                    <Link to="/my/notifications">
                        <BellIcon className="size-4" />
                    </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                    <Link to="/my/messages">
                        <MessageCircleIcon className="size-4" />
                    </Link> 
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/dorbae.png" />
                            {/** Replcaed text when failed to load image */}
                            <AvatarFallback>Me</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel className="flex flex-col gap-1">
                            <span className="font-medium">Dorbae</span>
                            <span className="text-xs text-muted-foreground">dorbae.io@gmail.com</span>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to="/my/dashboard" className="flex items-center">
                                    <BarChart3Icon className="size-4 mr-2" />
                                    Dashboard
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to="/my/profile" className="flex items-center">
                                    <BarChart3Icon className="size-4 mr-2" />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link to="/my/settings" className="flex items-center">
                                    <BarChart3Icon className="size-4 mr-2" />
                                    Settings
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild className="cursor-pointer">
                            <Link to="/auth/logout" className="flex items-center">
                                <LogOutIcon className="size-4 mr-2" />
                                Logout
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu></div>) : (
                <div className="flex items-center gap-4">
                    <Button asChild variant="secondary">
                        <Link to="/auth/login">Login</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/auth/join">Join</Link>
                    </Button>
                </div>
            )
            }
        </nav>
    );
}