import type { Route } from "../../../+types/routes";
import { redirect, type MetaFunction } from "react-router";


export function loader({ request }: Route.LoaderArgs) {
  return redirect("/products/leaderboards");
}

export const meta: MetaFunction = () => {
  return [
    { title: "Products - Wemake" },
    { name: "description", content: "Discover amazing products made by our community" }
  ];
};