import { Link } from "react-router";
import { Card, CardHeader, CardFooter, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  postId: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  postAt: string;
}

export function PostCard({
  postId,
  title,
  author,
  authorAvatarUrl,
  category,
  postAt
}: PostCardProps) {
  return (
    <Link to={`/community/${postId}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>N</AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </CardTitle>
            <div className="flex items-center gap-2 text-xs leading-tight text-muted-foreground">
              <span>{author}</span>
              <span>{category}</span>
              <DotIcon className="w-4 h-4" />
              <span>{postAt}</span>
            </div>
          </div>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link" asChild>
            <Link to={`/community/${postId}`}>Reply &rarr;</Link>
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
