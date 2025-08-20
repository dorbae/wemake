import { DateTime } from "luxon";
import type { Route } from "../../../+types/root";
import { data, isRouteErrorResponse, type MetaFunction } from "react-router";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, day } = params;
  const date = DateTime.fromObject({ year: Number(year), month: Number(month), day: Number(day) });
  if (!date.isValid) {
    // @NOTICE: Occurs error boundary
    throw data (
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      {
        status: 400,
      }
    );
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
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // @NOTICE: If status is 4xx or 5xx
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    )
  }

  if (error instanceof Error) {
    return (
      <div>
        {error.message}
      </div>
    )
  }

  return <div>Unknown error</div>;
}