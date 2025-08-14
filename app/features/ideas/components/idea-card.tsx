import { Link } from "react-router";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { EyeIcon, DotIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
    ideaId: string;
    title: string;
    viewsCount: number;
    timeAgo: string;
    likesCount: number;
    claimed?: boolean;
    className?: string;
}

export function IdeaCard({
    ideaId,
    title,
    viewsCount,
    timeAgo,
    likesCount,
    claimed,
    className
}: IdeaCardProps) {
    return (
        <Card className={`bg-transparent hover:bg-card/50 transition-colors ${className || ''}`}>
            <CardHeader>
                <Link to={`/ideas/${ideaId}`}>
                    <CardTitle className="text-xl">
                        <span className={cn(claimed ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground" : "")}>{title}</span>

                    </CardTitle>
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
                {!claimed ?
                    (
                        <Button className="p-0" asChild>
                            <Link to={`/ideas/${ideaId}/claim`}>Claim idea now &rarr;</Link>
                        </Button>
                    ) :
                    (<Button variant="outline" className="p-0 cursor-not-allowed">
                        <LockIcon className="w-4 h-4" />
                        Claimed
                    </Button>
                    )
                }
            </CardFooter>
        </Card>
    );
}
