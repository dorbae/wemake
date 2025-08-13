import type { Route } from "../../+types/routes";

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
      </div>
    </div>
  );
}
