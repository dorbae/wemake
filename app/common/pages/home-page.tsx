import type { Route } from "../../+types/routes";
import { Link } from "react-router";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import ProductCard from "~/features/products/components/product-card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export function loader({ request }: Route.LoaderArgs) {
  return {
    message: "Welcome to WeMake!"
  };
}

export function action({ request }: Route.ActionArgs) {
  // Form submission handling can be added here
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "WeMake - Home" },
    { name: "description", content: "Welcome to WeMake platform" }
  ];
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Products</h2>
          <p className="text-xl font-light text-foreground">The best products made by our comunity today.</p>
          <Button variant="link" className="p-0" asChild>
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index + 1}`}
            description={`This is the ${index + 1}th product description`}
            commentsCount={12}
            viewsCount={156}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Latest discussions</h2>
          <p className="text-xl font-light text-foreground">The latest discussions made by our comunity today.</p>
          <Button variant="link" className="p-0" asChild>
            <Link to="/products/leaderboards">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        <Card className="bg-transparent hover:bg-card/50 transition-colors">
          <CardHeader className="flex flex-row items-center gap-2">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/apple.png" />
            </Avatar>
            <div className="space-y-2">
              <CardTitle className="text-2xl font-semibold leading-none tracking-tight">Discussion Title</CardTitle>
              <div className="flex items-center gap-2 text-xs leading-tight text-muted-foreground">
                <span>Nico</span>
                <span>•</span>
                <span>Productivity</span>
                <span>•</span>
                <span>12 hours ago</span>
              </div>
            </div>
          </CardHeader>
          <CardFooter className="flex justify-end">
            <Button variant="link" asChild>
              <Link to="/community/postId">Reply &rarr;</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
