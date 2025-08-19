import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { ProductCard } from "../components/product-card";

export function loader({ request, params }: Route.LoaderArgs) {
  const { categoryId } = params;
  return { categoryId };
}

export const meta: MetaFunction = () => {
  return [
    { title: "Category - Wemake" },
    { name: "description", content: "Browse products in this category" }
  ];
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  const { categoryId } = loaderData;
  
  const categoryData = {
    productivity: {
      name: "Productivity",
      description: "Tools and apps to boost your productivity and efficiency",
      icon: "⚡",
      color: "bg-blue-500"
    },
    design: {
      name: "Design",
      description: "Creative tools for designers and visual artists",
      icon: "🎨",
      color: "bg-purple-500"
    },
    development: {
      name: "Development",
      description: "Developer tools, libraries, and frameworks",
      icon: "💻",
      color: "bg-green-500"
    },
    communication: {
      name: "Communication",
      description: "Apps and tools for better team collaboration",
      icon: "💬",
      color: "bg-orange-500"
    },
    education: {
      name: "Education",
      description: "Learning platforms and educational tools",
      icon: "📚",
      color: "bg-red-500"
    },
    entertainment: {
      name: "Entertainment",
      description: "Games, media, and entertainment applications",
      icon: "🎮",
      color: "bg-pink-500"
    },
    health: {
      name: "Health & Fitness",
      description: "Health tracking and fitness applications",
      icon: "🏃‍♂️",
      color: "bg-teal-500"
    },
    finance: {
      name: "Finance",
      description: "Financial tools and investment applications",
      icon: "💰",
      color: "bg-yellow-500"
    },
    travel: {
      name: "Travel",
      description: "Travel planning and exploration tools",
      icon: "✈️",
      color: "bg-indigo-500"
    }
  };
  
  const category = categoryData[categoryId as keyof typeof categoryData] || {
    name: "Unknown Category",
    description: "This category doesn't exist",
    icon: "❓",
    color: "bg-gray-500"
  };

  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${category.color} text-white text-4xl mb-6`}>
          {category.icon}
        </div>
        <h1 className="text-6xl font-bold leading-tight tracking-tight">{category.name}</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          {category.description}
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Submit to {category.name}</Button>
          <Button variant="outline" size="lg">Browse All Categories</Button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Top {category.name} Products</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Most Popular</Button>
            <Button variant="outline" size="sm">Latest</Button>
            <Button variant="outline" size="sm">Most Voted</Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="absolute -top-4 -left-4 z-10">
                  <Badge 
                    variant={index === 0 ? "default" : index === 1 ? "secondary" : "outline"}
                    className="text-lg px-4 py-2"
                  >
                    #{index + 1}
                  </Badge>
                </div>
              )}
              <ProductCard
                id={`${categoryId}-${index}`}
                name={`{category.name} Product ${index + 1}`}
                description={`An amazing {category.name.toLowerCase()} product that showcases innovation and creativity.`}
                commentsCount={25 + index * 5}
                viewsCount={400 + index * 100}
                votesCount={60 + index * 15}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Recent {category.name} Products</h2>
          <Button variant="link">View all &rarr;</Button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <ProductCard
              key={index}
              id={`recent-${categoryId}-${index}`}
              name={`Recent {category.name} Product ${index + 1}`}
              description={`A newly submitted {category.name.toLowerCase()} product that's gaining attention.`}
              commentsCount={15 + index * 3}
              viewsCount={200 + index * 50}
              votesCount={30 + index * 8}
            />
          ))}
        </div>
      </div>

      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Want to see more {category.name} products?</h2>
        <p className="text-lg text-muted-foreground">
          Submit your own {category.name.toLowerCase()} product or explore other categories.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Submit Product</Button>
          <Button variant="outline" size="lg">Explore Categories</Button>
        </div>
      </div>
    </div>
  );
}
