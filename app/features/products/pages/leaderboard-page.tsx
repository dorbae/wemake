import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";


export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Product Leaderboard - Wemake" },
    { name: "description", content: "Top products ranked by community votes and engagement" }
  ];
};

export default function LeaderboardPage({ loaderData }: Route.ComponentProps) {
}
