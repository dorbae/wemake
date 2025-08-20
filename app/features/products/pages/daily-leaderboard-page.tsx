import { DateTime } from "luxon";
import type { Route } from "../../../+types/root";
import { data, isRouteErrorResponse, type MetaFunction } from "react-router";
import { z } from "zod";

const paramSchema = z.object({
  year: z.coerce.number().int().min(1900).max(2100),
  month: z.coerce.number().int().min(1).max(12),
  day: z.coerce.number().int().min(1).max(31),
});

export function loader({ request, params }: Route.LoaderArgs) {
  const { success, data: parsedParams } = paramSchema.safeParse(params);
  // @NOTICE: Occurs error boundary
  if (!success) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      {
        status: 400,
      }
    );
  }

  const date = DateTime.fromObject(parsedParams);
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "invalid_date",
        message: "Invalid date",
      },
      {
        status: 400,
      }
    );
  }
  return { date };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Daily Leaderboard - Wemake" },
    { name: "description", content: "Top products of the day ranked by community engagement" }
  ];
};

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  console.log("aa");
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