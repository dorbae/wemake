import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Product Leaderboard - Wemake" },
    { name: "description", content: "Top products ranked by community votes and engagement" }
  ];
};

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">Product Leaderboard</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          Discover the most popular and highly-rated products in our community. 
          These products have earned the highest votes and engagement from our users.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">All Time</Button>
          <Button variant="outline" size="lg">This Year</Button>
          <Button variant="outline" size="lg">This Month</Button>
          <Button variant="outline" size="lg">This Week</Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Top Products</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="absolute -top-4 -left-4 z-10">
                  <Badge 
                    variant={index === 0 ? "default" : index === 1 ? "secondary" : "outline"}
                    className="text-lg px-4 py-2"
                  >
                    #{index + 1}
                  </Badge>
                </div>
              )}
              <ProductCard
                id={`leaderboard-${index}`}
                name={`Top Product ${index + 1}`}
                description={`This product has achieved remarkable success and community recognition.`}
                commentsCount={50 + index * 10}
                viewsCount={1000 + index * 200}
                votesCount={200 + index * 50}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Rising Stars</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`rising-${index}`}
              name={`Rising Star ${index + 1}`}
              description={`A promising product that's quickly gaining momentum in our community.`}
              commentsCount={20 + index * 5}
              viewsCount={300 + index * 100}
              votesCount={80 + index * 20}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
