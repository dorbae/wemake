import type { Route } from "../../../+types/routes";
import { Form, type MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";
import { Input } from "~/common/components/ui/input";
import { z } from "zod";
import ProductPagination from "~/common/components/product-pagination";
import { HeroSection } from "~/common/components/hero-section";


const paramSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramSchema.safeParse(Object.fromEntries(url.searchParams));
  if (!success) {
    throw new Error("Invalid parmas");
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products - Wemake" },
    { name: "description", content: "Search and discover amazing products" }
  ];
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <HeroSection title="Search Products" description="Search and discover amazing products" />
      <Form className="flex justify-center max-w-screen-sm items-center mx-auto">
        <Input name="query" placeholder="Search products" className="textlg" />
        <Button type="submit">Search</Button>
      </Form>
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
  );
}
