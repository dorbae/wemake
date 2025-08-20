import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";

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
  return;
}
