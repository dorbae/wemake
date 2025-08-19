import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, week } = params;
  return { year, week };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Leaderboard - Wemake" },
    { name: "description", content: "Top products of the week ranked by community engagement" }
  ];
};

export default function WeeklyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const { year, week } = loaderData;
  
  // Calculate week start and end dates
  const weekStart = new Date(Number(year), 0, 1 + (Number(week) - 1) * 7);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  const weekRange = `${formatDate(weekStart)} - ${formatDate(weekEnd)}, ${year}`;
  
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">Week {week}, {year} Leaderboard</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          The best products of week {week} ({weekRange}) based on community votes and engagement. 
          These products have dominated the week and captured our community's attention.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Week {week}</Button>
          <Button variant="outline" size="lg">Previous Week</Button>
          <Button variant="outline" size="lg">Next Week</Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Top Products of Week {week}</h2>
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
                id={`weekly-${year}-${week}-${index}`}
                name={`Week {week} Top Product ${index + 1}`}
                description={`This product has achieved remarkable success in week {week} and community recognition.`}
                commentsCount={70 + index * 12}
                viewsCount={1200 + index * 250}
                votesCount={250 + index * 50}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Weekly Highlights</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`highlight-${year}-${week}-${index}`}
              name={`Week {week} Highlight ${index + 1}`}
              description={`A standout product that made waves in week {week}.`}
              commentsCount={50 + index * 8}
              viewsCount={900 + index * 150}
              votesCount={180 + index * 30}
            />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Week {week} Statistics</h2>
          <Button variant="link">View details &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">156</p>
              <p className="text-sm text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Votes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2,847</p>
              <p className="text-sm text-muted-foreground">+8% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Views</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">45,231</p>
              <p className="text-sm text-muted-foreground">+15% from last week</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
