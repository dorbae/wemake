import { DateTime } from "luxon";
import type { Route } from "./+types/monthly-leaderboard-page";
import { data, isRouteErrorResponse, Link, type MetaFunction } from "react-router";
import { z } from "zod";
import { HeroSection } from "~/common/components/hero-section";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

const paramSchema = z.object({
  year: z.coerce.number().int().min(1900).max(2100),
  month: z.coerce.number().int().min(1).max(12),
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

  const date = DateTime.fromObject({
    year: parsedParams.year,
    month: parsedParams.month,
  });
  const today = DateTime.now().setZone("Asia/Seoul").startOf("month");
  console.log(date, today);
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

export const meta: MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
    // @NOTICE: Set default locale and zone because root layout setting is not applied to meta function
  }).setZone("Asia/Seoul").setLocale("ko");

  return [
    {
      title: `The best of ${date.toLocaleString({
        month: "long",
        year: "2-digit",
      })} | Wemake`
    }
  ];
};

export default function MonthlyLeaderboardPage({ loaderData }: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  });
  const previousMonth = urlDate.minus({ months: 1 });
  const nextMonth = urlDate.plus({ months: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("month"));

  return (
    <div className="space-y-10">
      <HeroSection title={`The best of ${urlDate.toLocaleString({
        month: "long",
        year: "2-digit",
      })
        }`} description="" />
      <div className="flex gap-2 items-center justify-center">
        <Button variant="outline" asChild>
          <Link to={`/ products / leaderboards / monthly / ${previousMonth.year} / ${previousMonth.month}`}>
            {previousMonth.toLocaleString({
              month: "long",
              year: "2-digit",
            })} &larr;
          </Link>
        </Button>
        {!isToday ? (
          <Button variant="outline" asChild>
            <Link to={`/ products / leaderboards / monthly / ${nextMonth.year} / ${nextMonth.month}`}>
              {nextMonth.toLocaleString({
                month: "long",
                year: "2-digit",
              })} &rarr;
            </Link>
          </Button>
        ) : null}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 5 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`product - ${index}`}
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