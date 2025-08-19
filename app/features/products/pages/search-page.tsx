import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";
import { Input } from "~/common/components/ui/input";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products - Wemake" },
    { name: "description", content: "Search and discover amazing products" }
  ];
};

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">Search Products</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          Find the perfect product for your needs. Search by name, description, category, or tags.
        </p>
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex gap-4">
            <Input 
              placeholder="Search products..." 
              className="text-lg py-6"
            />
            <Button size="lg" className="px-8">Search</Button>
          </div>
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Productivity
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Design
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Development
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Communication
            </Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Education
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Search Results</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Most Relevant</Button>
            <Button variant="outline" size="sm">Most Popular</Button>
            <Button variant="outline" size="sm">Latest</Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`search-${index}`}
              name={`Search Result ${index + 1}`}
              description={`This product matches your search criteria and could be exactly what you're looking for.`}
              commentsCount={20 + index * 3}
              viewsCount={300 + index * 50}
              votesCount={40 + index * 8}
            />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Popular Searches</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[
            "Productivity tools",
            "Design software",
            "Developer utilities",
            "Team collaboration",
            "Learning platforms",
            "Creative apps",
            "Business solutions",
            "Entertainment apps"
          ].map((searchTerm, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-lg">{searchTerm}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {Math.floor(Math.random() * 100) + 50} products found
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Can't find what you're looking for?</h2>
        <p className="text-lg text-muted-foreground">
          Submit your own product or request a specific type of solution from our community.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Submit Product</Button>
          <Button variant="outline" size="lg">Request Product</Button>
        </div>
      </div>
    </div>
  );
}
