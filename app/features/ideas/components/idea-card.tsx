import { Link } from "react-router";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { EyeIcon, DotIcon, HeartIcon } from "lucide-react";

interface IdeaCardProps {
  ideaId: string;
  title: string;
  viewsCount: number;
  timeAgo: string;
  likesCount: number;
  className?: string;
}

export function IdeaCard({
  ideaId,
  title,
  viewsCount,
  timeAgo,
  likesCount,
  className
}: IdeaCardProps) {
  return (
    <Card className={`bg-transparent hover:bg-card/50 transition-colors ${className || ''}`}>
      <CardHeader>
        <Link to={`/ideas/${ideaId}`}>
          <CardTitle className="text-xl">{title}</CardTitle>
        </Link>
      </CardHeader>
      <CardContent>
        <span className="flex items-center gap-1 text-small">
          <EyeIcon className="w-4 h-4" />
          <span>{viewsCount}</span>
        </span>
        <DotIcon className="w-4 h-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" className="p-0">
          <HeartIcon className="w-4 h-4" />
          <span>{likesCount}</span>
        </Button>
        <Button className="p-0" asChild>
          <Link to={`/ideas/${ideaId}/claim`}>Claim idea now &rarr;</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
