import { DateTime } from "luxon";
import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, day } = params;
  const date = DateTime.fromObject({ year: Number(year), month: Number(month), day: Number(day) });
  if (!date.isValid) {
    // @NOTICE: Occurs error boundary
    throw new Error("Invalid date");
  }
  
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

// @NOTICE: Overriding root error boundary
export function ErrorBoundary({ error }: { error: Error }) {
  return <div>Daily Leaderboard Error: {error.message}</div>;
}