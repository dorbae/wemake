import { Link } from "react-router";
import { Card, CardHeader, CardFooter, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Badge } from "~/common/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "~/common/components/ui/avatar";

interface TeamCardProps {
  teamId: string;
  leaderUsername: string;
  leaderAvatarUrl: string;
  positions: string[];
  projectDescription: string;
  className?: string;
}

export function TeamCard({
  teamId,
  leaderUsername,
  leaderAvatarUrl,
  positions,
  projectDescription,
  className
}: TeamCardProps) {
  return (
    <Link to={`/teams/${teamId}`}>
      <Card className={`bg-transparent hover:bg-card/50 transition-colors ${className || ''}`}>
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge variant="secondary" className="inline-flex items-center">
              <span>@{leaderUsername}</span>
              <Avatar className="size-5">
                <AvatarImage src={leaderAvatarUrl} />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
            </Badge>
            <span> is looking for</span>
            {positions.map((role, index) => (
              <Badge key={index} className="text-base">{role}</Badge>
            ))}
            <span> to build</span>
            <span> {projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">Join team &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
