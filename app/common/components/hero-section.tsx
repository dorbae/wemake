import { cn } from "~/lib/utils";

interface HeroSectionProps {
  title: string;
  description: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "gradient" | "solid";
  className?: string;
}

export function HeroSection({
  title,
  description,
  size = "lg",
  variant = "gradient",
  className
}: HeroSectionProps) {
  const sizeClasses = {
    sm: "py-12",
    md: "py-16",
    lg: "py-20",
    xl: "py-28"
  };

  const titleSizeClasses = {
    sm: "text-3xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-6xl"
  };

  const descriptionSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl"
  };

  const variantClasses = {
    default: "bg-background",
    gradient: "bg-gradient-to-b from-background via-primary/10 to-primary/20",
    solid: "bg-primary/5"
  };

  return (
    <div className={cn(
      "flex flex-col justify-center items-center rounded-md mb-10",
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <h1 className={cn(
        "font-bold leading-tight tracking-tight",
        titleSizeClasses[size]
      )}>
        {title}
      </h1>
      <p className={cn(
        "font-light text-foreground text-center max-w-2xl mx-auto px-4",
        descriptionSizeClasses[size]
      )}>
        {description}
      </p>
    </div>
  );
}
