import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Products - Wemake" },
    { name: "description", content: "Discover amazing products made by our community" }
  ];
};

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">Products</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          Discover amazing products made by our community. From innovative apps to creative tools, 
          find the perfect solution for your needs.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Submit Product</Button>
          <Button variant="outline" size="lg">Browse Categories</Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`featured-${index}`}
              name={`Featured Product ${index + 1}`}
              description={`This is an amazing featured product that showcases innovation and creativity.`}
              commentsCount={15 + index * 3}
              viewsCount={200 + index * 50}
              votesCount={25 + index * 5}
            />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Latest Products</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`latest-${index}`}
              name={`Latest Product ${index + 1}`}
              description={`A newly submitted product that's gaining attention in our community.`}
              commentsCount={8 + index * 2}
              viewsCount={100 + index * 20}
              votesCount={12 + index * 3}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
