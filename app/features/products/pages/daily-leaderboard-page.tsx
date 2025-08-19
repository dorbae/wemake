import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, day } = params;
  return { year, month, day };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Leaderboard - Wemake" },
    { name: "description", content: "Top products of the day ranked by community engagement" }
  ];
};

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year, month, day } = loaderData;
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthName = monthNames[Number(month) - 1];
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">{dayOfWeek}, {monthName} {day}, {year}</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          The best products of {dayOfWeek}, {monthName} {day}, {year} based on community votes and engagement. 
          These products have captured our community's attention today.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Today</Button>
          <Button variant="outline" size="lg">Yesterday</Button>
          <Button variant="outline" size="lg">Tomorrow</Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Top Products of {dayOfWeek}, {monthName} {day}</h2>
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
                id={`daily-${year}-${month}-${day}-${index}`}
                name={`{dayOfWeek} Top Product ${index + 1}`}
                description={`This product has achieved remarkable success today and community recognition.`}
                commentsCount={40 + index * 8}
                viewsCount={800 + index * 150}
                votesCount={150 + index * 30}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Today's Highlights</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`highlight-${year}-${month}-${day}-${index}`}
              name={`Today's Highlight ${index + 1}`}
              description={`A standout product that's making waves today.`}
              commentsCount={30 + index * 5}
              viewsCount={600 + index * 100}
              votesCount={100 + index * 20}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
