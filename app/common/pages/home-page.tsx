import type { Route } from "../../+types/routes";
import { Link } from "react-router";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import ProductCard from "~/features/products/components/product-card";

export function loader({ request }: Route.LoaderArgs) {
  return {
    message: "Welcome to WeMake!"
  };
}

export function action({ request }: Route.ActionArgs) {
  // Form submission handling can be added here
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "WeMake - Home" },
    { name: "description", content: "Welcome to WeMake platform" }
  ];
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">Today's Products</h2>
          <p className="text-xl font-light text-foreground">The best products made by our comunity today.</p>
          <Button variant="link" className="p-0" asChild>
            <Link to="/products/leaderboards">Explore all products &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index + 1}`}
            description={`This is the ${index + 1}th product description`}
            commentsCount={12}
            viewsCount={156}
          />
        ))}
      </div>
    </div>
  );
}
