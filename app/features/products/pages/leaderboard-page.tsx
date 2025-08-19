import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { HeroSection } from "~/common/components/hero-section";

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
      <HeroSection
        title="Leaderboard"
        description="Top most popular products on wemake"
        size="lg"
        variant="gradient"
      />
    </div>
  );
}
