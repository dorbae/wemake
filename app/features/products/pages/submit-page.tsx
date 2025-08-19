import type { Route } from "../../../+types/routes";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/common/components/ui/card";
import { Badge } from "~/common/components/ui/badge";
import { Input } from "~/common/components/ui/input";
import { Textarea } from "~/common/components/ui/textarea";
import { Label } from "~/common/components/ui/label";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product - Wemake" },
    { name: "description", content: "Submit your amazing product to our community" }
  ];
};

export default function SubmitPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">Submit Your Product</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          Share your amazing product with our community. Whether it's an app, tool, or creative project, 
          we want to showcase your innovation and help others discover it.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Product Information</CardTitle>
            <CardDescription>
              Tell us about your product. Be descriptive and highlight what makes it special.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input 
                  id="productName" 
                  placeholder="Enter your product name"
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <select 
                  id="category" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select a category</option>
                  <option value="productivity">Productivity</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="communication">Communication</option>
                  <option value="education">Education</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="health">Health & Fitness</option>
                  <option value="finance">Finance</option>
                  <option value="travel">Travel</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your product in detail. What does it do? Who is it for? What makes it unique?"
                className="min-h-[120px] text-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="website">Website URL</Label>
                <Input 
                  id="website" 
                  placeholder="https://yourproduct.com"
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricing">Pricing Model</Label>
                <select 
                  id="pricing" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select pricing</option>
                  <option value="free">Free</option>
                  <option value="freemium">Freemium</option>
                  <option value="one-time">One-time purchase</option>
                  <option value="subscription">Subscription</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input 
                id="tags" 
                placeholder="Enter tags separated by commas (e.g., productivity, design, collaboration)"
                className="text-lg"
              />
              <p className="text-sm text-muted-foreground">
                Tags help others discover your product. Use relevant keywords that describe your product's features and use cases.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Media & Screenshots</CardTitle>
            <CardDescription>
              Add visual content to showcase your product. Images and videos help users understand what your product looks like.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="logo">Product Logo</Label>
              <Input 
                id="logo" 
                type="file" 
                accept="image/*"
                className="text-lg"
              />
              <p className="text-sm text-muted-foreground">
                Upload a high-quality logo for your product (PNG, JPG, SVG)
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="screenshots">Screenshots</Label>
              <Input 
                id="screenshots" 
                type="file" 
                accept="image/*"
                multiple
                className="text-lg"
              />
              <p className="text-sm text-muted-foreground">
                Upload 3-5 screenshots showing your product in action
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="demo">Demo Video URL</Label>
              <Input 
                id="demo" 
                placeholder="https://youtube.com/watch?v=..."
                className="text-lg"
              />
              <p className="text-sm text-muted-foreground">
                Optional: Link to a demo video or tutorial
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Additional Information</CardTitle>
            <CardDescription>
              Help us understand your product better and provide context for our community.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="platform">Platform</Label>
                <select 
                  id="platform" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select platform</option>
                  <option value="web">Web</option>
                  <option value="ios">iOS</option>
                  <option value="android">Android</option>
                  <option value="desktop">Desktop</option>
                  <option value="cross-platform">Cross-platform</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="launchDate">Launch Date</Label>
                <Input 
                  id="launchDate" 
                  type="date"
                  className="text-lg"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="story">Your Story</Label>
              <Textarea 
                id="story" 
                placeholder="Tell us the story behind your product. What inspired you to create it? What problems does it solve?"
                className="min-h-[100px] text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenges">Challenges & Solutions</Label>
              <Textarea 
                id="challenges" 
                placeholder="What challenges did you face while building this product? How did you overcome them?"
                className="min-h-[100px] text-lg"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center mt-8">
          <Button size="lg" className="px-8">Submit Product</Button>
          <Button variant="outline" size="lg">Save Draft</Button>
          <Button variant="outline" size="lg">Preview</Button>
        </div>
      </div>
    </div>
  );
}
