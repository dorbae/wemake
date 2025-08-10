import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-foreground">Home</h1>
        <div className="bg-card p-6 rounded-lg border border-border">
          <p className="text-card-foreground mb-4">Welcome to the home page!</p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Click me
          </Button>
        </div>
      </div>
    </div>
  );
}
