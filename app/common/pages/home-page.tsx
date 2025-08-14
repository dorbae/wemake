import type { Route } from "../../+types/routes";
import type { MetaFunction } from "react-router";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { PostCard } from "~/features/posts/components/post-card";
import { ProductCard } from "~/features/products/components/product-card";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Wemake - Home" },
    { name: "description", content: "Welcome to Wemake - Discover amazing products and connect with our community" }
  ];
};

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
            votesCount={12}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Latest discussions</h2>
          <p className="text-xl font-light text-foreground">The latest discussions made by our comunity today.</p>
          <Button variant="link" className="p-0" asChild>
            <Link to="/products/leaderboards">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <PostCard
            key={index}
            postId="postId"
            title="Discussion Title"
            author="dorbae"
            authorAvatarUrl="https://github.com/dorbae.png"
            category="Productivity"
            postAt="12 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">IdeasGPT</h2>
          <p className="text-xl font-light text-foreground">Find ideas for your next project.</p>
          <Button variant="link" className="p-0" asChild>
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        <Card className="bg-transparent hover:bg-card/50 transition-colors">
          <CardHeader className="text-xl">
            <CardTitle>A startup that creates an AI-powered generated personal trainer, delivering customized fitnewss recommendations and tracking of progress using a mobile app and a web app.</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="flex items-center gap-1 text-small">
              <EyeIcon className="w-4 h-4" />
              <span>123</span>
            </span>
            <DotIcon className="w-4 h-4" />
            <span>12 hours ago</span>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline" className="p-0" >
              <HeartIcon className="w-4 h-4" />
              <span>12</span>
            </Button>
            <Button className="p-0" asChild>
              <Link to="/ideas/ideaId/claim">Claim idea now &rarr;</Link>
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
