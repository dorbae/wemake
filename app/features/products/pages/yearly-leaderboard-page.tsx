import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year } = params;
  return { year };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Yearly Leaderboard - Wemake" },
    { name: "description", content: "Top products of the year ranked by community engagement" }
  ];
};

export default function YearlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year } = loaderData;
  
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">{year} Leaderboard</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          The best products of {year} based on community votes, engagement, and innovation. 
          These products have defined the year and set new standards.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">{year}</Button>
          <Button variant="outline" size="lg">{Number(year) - 1}</Button>
          <Button variant="outline" size="lg">{Number(year) - 2}</Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Top Products of {year}</h2>
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
                id={`yearly-${year}-${index}`}
                name={`{year} Top Product ${index + 1}`}
                description={`This product has achieved remarkable success in ${year} and community recognition.`}
                commentsCount={100 + index * 20}
                viewsCount={2000 + index * 400}
                votesCount={500 + index * 100}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Breakthrough Products</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`breakthrough-${year}-${index}`}
              name={`{year} Breakthrough ${index + 1}`}
              description={`A revolutionary product that emerged in ${year} and changed the game.`}
              commentsCount={80 + index * 15}
              viewsCount={1500 + index * 300}
              votesCount={300 + index * 60}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
