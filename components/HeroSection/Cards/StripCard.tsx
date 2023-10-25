import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


type CardProps = React.ComponentProps<typeof Card>;

export function StripCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("rounded-3xl  py-4 px-6", className)} {...props}>
      <CardTitle className="text-white text-sm font-medium">
        LATEST WORK AND FEATURED
      </CardTitle>
    </Card>
  );
}
