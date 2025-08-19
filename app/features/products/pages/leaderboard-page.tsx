import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboard - Wemake" },
    { name: "description", content: "Top products leaderboard" }
  ];
};

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <div className="flex flex-col py-20 justify-center items-center rounded-md bg-gradient-to-b from-background via-primary/10 to-primary/20">
        <h1 className="text-5xl font-bold">Leaderboard</h1>
        <p className="text-2xl font-light text-foreground">
          Top most popular products on wemake
        </p>
      </div>
    </div>
  );
}
