import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month } = params;
  return { year, month };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Monthly Leaderboard - Wemake" },
    { name: "description", content: "Top products of the month ranked by community engagement" }
  ];
};

export default function MonthlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year, month } = loaderData;
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthName = monthNames[Number(month) - 1];
  
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">{monthName} {year} Leaderboard</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          The best products of {monthName} {year} based on community votes and engagement. 
          These products have dominated the month and captured our community's attention.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">{monthName} {year}</Button>
          <Button variant="outline" size="lg">Previous Month</Button>
          <Button variant="outline" size="lg">Next Month</Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Top Products of {monthName} {year}</h2>
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
                id={`monthly-${year}-${month}-${index}`}
                name={`{monthName} {year} Top Product ${index + 1}`}
                description={`This product has achieved remarkable success in {monthName} {year} and community recognition.`}
                commentsCount={80 + index * 15}
                viewsCount={1500 + index * 300}
                votesCount={300 + index * 60}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Monthly Highlights</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`highlight-${year}-${month}-${index}`}
              name={`{monthName} {year} Highlight ${index + 1}`}
              description={`A standout product that made waves in {monthName} {year}.`}
              commentsCount={60 + index * 10}
              viewsCount={1000 + index * 200}
              votesCount={200 + index * 40}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
