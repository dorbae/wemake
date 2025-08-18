import { Link } from "react-router";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";

interface JobCardProps {
  jobId: string;
  title: string;
  company: string;
  companyLogoUrl: string;
  postedAt: string;
  type: string;
  companyHq: string;
  salary: string;
  positionLocation: string;
  className?: string;
}

export function JobCard({
  jobId,
  title,
  company,
  companyLogoUrl,
  postedAt,
  type,
  companyHq,
  salary,
  positionLocation,
  className
}: JobCardProps) {

  return (
    <Link to={`/jobs/${jobId}`}>
      <Card className={`bg-transparent transition-colors hover:bg-card/50 ${className || ''}`}>
        <CardHeader>
          <div className="flex items-center gap-4 mb-8">
            <img 
              src={companyLogoUrl} 
              alt={`${company} Logo`} 
              className="size-10 rounded-full" 
            />
            <div className="space-x-2">
              <p className="text-accent-foreground">{company}</p>
              <p className="text-xs text-muted-foreground">{postedAt}</p>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
          <CardContent>
            <div className="flex gap-2">
              <Badge variant="outline" className="text-xs">{type}</Badge>
              <Badge variant="outline" className="text-xs">{positionLocation}</Badge>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-muted-foreground">
                {salary}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {companyHq}
              </span>
            </div>
            <Button variant="secondary" size="sm">
              Apply now
            </Button>
          </CardFooter>
        </CardHeader>
      </Card>
    </Link>
  );
}
