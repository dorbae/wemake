import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Product Categories - Wemake" },
    { name: "description", content: "Browse products by category and discover new solutions" }
  ];
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  const categories = [
    {
      id: "productivity",
      name: "Productivity",
      description: "Tools and apps to boost your productivity and efficiency",
      productCount: 156,
      icon: "⚡"
    },
    {
      id: "design",
      name: "Design",
      description: "Creative tools for designers and visual artists",
      productCount: 89,
      icon: "🎨"
    },
    {
      id: "development",
      name: "Development",
      description: "Developer tools, libraries, and frameworks",
      productCount: 234,
      icon: "💻"
    },
    {
      id: "communication",
      name: "Communication",
      description: "Apps and tools for better team collaboration",
      productCount: 67,
      icon: "💬"
    },
    {
      id: "education",
      name: "Education",
      description: "Learning platforms and educational tools",
      productCount: 45,
      icon: "📚"
    },
    {
      id: "entertainment",
      name: "Entertainment",
      description: "Games, media, and entertainment applications",
      productCount: 78,
      icon: "🎮"
    },
    {
      id: "health",
      name: "Health & Fitness",
      description: "Health tracking and fitness applications",
      productCount: 34,
      icon: "🏃‍♂️"
    },
    {
      id: "finance",
      name: "Finance",
      description: "Financial tools and investment applications",
      productCount: 56,
      icon: "💰"
    },
    {
      id: "travel",
      name: "Travel",
      description: "Travel planning and exploration tools",
      productCount: 23,
      icon: "✈️"
    }
  ];

  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">Product Categories</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          Browse products by category and discover new solutions that match your interests and needs. 
          Each category contains carefully curated products from our community.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-4">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <Badge variant="secondary">{category.productCount} products</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {category.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Can't find what you're looking for?</h2>
        <p className="text-lg text-muted-foreground">
          Suggest a new category or submit your own product to help grow our community.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Suggest Category</Button>
          <Button variant="outline" size="lg">Submit Product</Button>
        </div>
      </div>
    </div>
  );
}
