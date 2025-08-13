import type { Route } from "../../+types/routes";
import { Link } from "react-router";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ChevronUpIcon, EyeIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../components/ui/button";

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
        </div>
        <div>
          <Link to={`/products/productId`}>
            <Card className="w-full flex items-center justify-between bg-transparent hover:bg-card/50">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
                  Product Name
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Product Description
                </CardDescription>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-px text-xs text-muted-foreground">
                    <MessageCircleIcon className="size-4" />
                    <span>12</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <EyeIcon className="size-4" />
                    <span>12</span>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="py-0">
                <Button variant="outline" className="flex items-center h-14 gap-1">
                  <ChevronUpIcon className="size-4 shrink-0" />
                  <span className="text-xs font-semibold">120</span>
                </Button>
              </CardFooter>
            </Card></Link>
        </div>
      </div>
    </div>
  );
}
