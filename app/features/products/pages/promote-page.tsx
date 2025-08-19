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
    { title: "Promote Your Product - Wemake" },
    { name: "description", content: "Boost your product's visibility and reach more users" }
  ];
};

export default function PromotePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="px-20 space-y-40">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold leading-tight tracking-tight">Promote Your Product</h1>
        <p className="text-xl font-light text-foreground max-w-2xl mx-auto">
          Get your product in front of the right audience. Our promotion options help you increase visibility, 
          drive traffic, and connect with potential users and customers.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8 mb-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <CardTitle className="text-xl">Featured Product</CardTitle>
              <CardDescription>
                Get your product featured on our homepage and category pages
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600 mb-2">$99</p>
              <p className="text-sm text-muted-foreground mb-4">per month</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ Homepage placement</li>
                <li>✓ Category page highlights</li>
                <li>✓ Newsletter inclusion</li>
                <li>✓ Social media mentions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-2 border-primary">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <CardTitle className="text-xl">Premium Spotlight</CardTitle>
              <CardDescription>
                Maximum visibility with premium placement and exclusive features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-purple-600 mb-2">$199</p>
              <p className="text-sm text-muted-foreground mb-4">per month</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ All Featured benefits</li>
                <li>✓ Top of leaderboards</li>
                <li>✓ Dedicated blog post</li>
                <li>✓ Community AMA session</li>
                <li>✓ Priority support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <CardTitle className="text-xl">Targeted Campaign</CardTitle>
              <CardDescription>
                Custom promotion campaigns tailored to your specific audience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600 mb-2">$299</p>
              <p className="text-sm text-muted-foreground mb-4">per month</p>
              <ul className="text-sm space-y-2 text-left">
                <li>✓ All Premium benefits</li>
                <li>✓ Custom audience targeting</li>
                <li>✓ A/B testing support</li>
                <li>✓ Analytics dashboard</li>
                <li>✓ Dedicated account manager</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Promotion Request Form</CardTitle>
            <CardDescription>
              Tell us about your product and promotion goals. We'll help you choose the best option.
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
                <Label htmlFor="promotionType">Promotion Type *</Label>
                <select 
                  id="promotionType" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select promotion type</option>
                  <option value="featured">Featured Product ($99/month)</option>
                  <option value="premium">Premium Spotlight ($199/month)</option>
                  <option value="targeted">Targeted Campaign ($299/month)</option>
                  <option value="custom">Custom Package</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="productUrl">Product URL *</Label>
              <Input 
                id="productUrl" 
                placeholder="https://yourproduct.com"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="promotionGoals">Promotion Goals *</Label>
              <Textarea 
                id="promotionGoals" 
                placeholder="What do you want to achieve? (e.g., increase downloads, drive traffic, build awareness, generate leads)"
                className="min-h-[100px] text-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input 
                  id="targetAudience" 
                  placeholder="Who is your ideal user? (e.g., developers, designers, entrepreneurs)"
                  className="text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Monthly Budget</Label>
                <select 
                  id="budget" 
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                >
                  <option value="">Select budget range</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-300">$200 - $300</option>
                  <option value="300+">$300+</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="campaignDuration">Campaign Duration</Label>
              <select 
                id="campaignDuration" 
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
              >
                <option value="">Select duration</option>
                <option value="1">1 month</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea 
                id="additionalInfo" 
                placeholder="Any specific requirements, special requests, or additional context for your promotion campaign?"
                className="min-h-[100px] text-lg"
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Why Promote on Wemake?</h2>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">👥</span>
                  <div>
                    <h3 className="font-semibold">Targeted Community</h3>
                    <p className="text-sm text-muted-foreground">Reach developers, designers, and tech enthusiasts who are actively looking for new tools.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <h3 className="font-semibold">Proven Results</h3>
                    <p className="text-sm text-muted-foreground">Our featured products see an average 3x increase in traffic and engagement.</p>
                  </div>
                </div>
              </div>
              <div className="text-left space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h3 className="font-semibold">Quality Traffic</h3>
                    <p className="text-sm text-muted-foreground">Get high-quality, relevant traffic from users who are genuinely interested in your product.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h3 className="font-semibold">Community Support</h3>
                    <p className="text-sm text-muted-foreground">Build relationships with our community and get valuable feedback on your product.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
            <p className="text-muted-foreground">
              Submit your promotion request and we'll get back to you within 24 hours.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="px-8">Submit Request</Button>
              <Button variant="outline" size="lg">Schedule Demo</Button>
              <Button variant="outline" size="lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
