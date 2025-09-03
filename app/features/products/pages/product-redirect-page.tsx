import { redirect } from "react-router";
import type { Route } from "~/+types/routes";

export const loader = ({ params }: Route.LoaderArgs) => {
    return redirect(`/products/${params.productId}/overview`);
  };