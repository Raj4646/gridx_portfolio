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

import Icon from "../Icon";

type CardProps = React.ComponentProps<typeof Card>;

export function SocialCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn("rounded-3xl py-2 flex-col justify-between ", className)}
      {...props}>
      <CardHeader></CardHeader>

      <CardFooter className="flex justify-between">
        <div>
          <CardDescription className="text-[#BCBCBC] opacity-50 uppercase text-xs font-medium">
            STAY WITH ME
          </CardDescription>
          <CardTitle className="text-white text-lg font-medium">
            Profiles
          </CardTitle>
        </div>
        <div>
          <Icon />
        </div>
      </CardFooter>
    </Card>
  );
}
