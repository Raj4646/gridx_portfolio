import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Icon from "../Icon";

type CardProps = React.ComponentProps<typeof Card>;

export function WorkTogetherCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("rounded-3xl ", className)} {...props}>
      <Image
        className="ml-6 mb-6 "
        src="/icon2.png"
        width={37}
        height={76}
        alt="Picture of the author"
      />

      <CardContent className="flex flex-row items-end justify-between">
        <div>
          <CardTitle className="text-white text-5xl font-medium">
            Let's <br /> Work <span className="text-[#5B78F6]">Together</span>
          </CardTitle>
        </div>
        <Icon />
      </CardContent>
    </Card>
  );
}
