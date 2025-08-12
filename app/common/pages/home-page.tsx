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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center pt-16">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          WeMake
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          {loaderData.message}
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
