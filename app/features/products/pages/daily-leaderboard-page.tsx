import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link, type MetaFunction } from "react-router";
import { z } from "zod";
import { HeroSection } from "~/common/components/hero-section";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

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

  return {
    ...parsedParams,
  };
}

// @NOTICE: data is loader data
export const meta: MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
    day: Number(params.day),
    // @NOTICE: Set default locale and zone because root layout setting is not applied to meta function
  }).setZone("Asia/Seoul").setLocale("ko");
  
  return [
    { title: `The best products of ${date.toLocaleString(DateTime.DATE_MED)} | Wemake` }
  ];
};

export default function DailyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });
  const previousDay = urlDate.minus({ days: 1 });
  const nextDay = urlDate.plus({ days: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));

  return (
    <div className="space-y-10">
      <HeroSection title={`The best products of ${urlDate.toLocaleString(DateTime.DATE_MED)}`} description="" />
      <div className="flex gap-2 items-center justify-center">
        <Button variant="outline" asChild>
          <Link to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}>
            {previousDay.toLocaleString(DateTime.DATE_SHORT)} &larr;
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="outline" asChild>
            <Link to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}>
              {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
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
      <ProductPagination totalPages={10} />
    </div>
  )
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