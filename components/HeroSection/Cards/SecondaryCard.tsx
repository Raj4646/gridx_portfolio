import React from "react";
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

interface CustomCardProps extends CardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  title: string;
}

export function SecondaryCard({
  className,
  imageSrc,
  imageAlt,
  description,
  title,
  ...props
}: CustomCardProps) {
  return (
    <Card
      className={cn("rounded-3xl py-2 flex-col justify-between ", className)}
      {...props}>
      <CardHeader>
        <Image
          className="w-[100%]"
          src={imageSrc}
          width={100}
          height={100}
          alt={imageAlt}
          quality={100}
          priority={true}
        />
      </CardHeader>

      <CardFooter className="flex justify-between">
        <div>
          <CardDescription className="text-[#BCBCBC] opacity-50 uppercase text-xs font-medium">
            {description}
          </CardDescription>
          <CardTitle className="text-white text-lg font-medium">
            {title}
          </CardTitle>
        </div>
        <div>
          <Icon />
        </div>
      </CardFooter>
    </Card>
  );
}
