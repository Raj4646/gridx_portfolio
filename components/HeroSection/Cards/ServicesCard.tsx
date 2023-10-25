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

const imageItems = [
  { src: "/camera.png", alt: "Camera Icon" },
  { src: "/design-pencil.png", alt: "Design Pencil Icon" },
  { src: "/color-filter.png", alt: "Color Filter Icon" },
  { src: "/dev-mode-phone.png", alt: "Dev Mode Phone Icon" },
];

export function ServicesCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        "rounded-3xl flex flex-col justify-between h-full",
        className
      )}
      {...props}>
      <div className="flex flex-row justify-between md:px-16 px-6 py-16 ">
        {imageItems.map((item, index) => (
          <Image
            key={index}
            className="w-[40px] h-[40px] sm:w-auto sm:h-auto"
            src={item.src}
            width={50}
            height={50}
            alt={item.alt}
          />
        ))}
      </div>

      <CardContent className="flex flex-row items-center justify-between">
        <div>
          <CardDescription className="text-[#BCBCBC] opacity-50 uppercase text-xs font-medium">
            SPECIALIZATION
          </CardDescription>
          <CardTitle className="text-white text-lg font-medium">
            Services Offering
          </CardTitle>
        </div>
        <Icon />
      </CardContent>
    </Card>
  );
}
