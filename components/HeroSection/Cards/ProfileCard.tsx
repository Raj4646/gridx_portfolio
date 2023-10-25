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

export function ProfileCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(" rounded-3xl p-4 md:p-6  relative", className)}
      {...props}>
      <CardHeader className="flex md:flex-row justify-between justify-items-center gap-2 p-2 lg:p-6	items-center flex-col	">
        <Image
          className="w-full max-w-[220px] mb-4 md:mb-0 rounded-tl-3xl rounded-br-3xl profile-bg"
          src="/me.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <CardContent className=" flex flex-col items-start justify-start ">
          <CardDescription className="text-[#BCBCBC] opacity-50 uppercase text-xs lg:text-sm font-medium leading-3 mb-2">
            A web developer
          </CardDescription>
          <CardTitle className="text-white text-3xl lg:text-4xl font-medium leading-9">
            David Henderson.
          </CardTitle>
          <CardDescription className="text-[#BCBCBC] opacity-50 text-sm  font-medium leading-5 tracking-wide	 mt-3">
            I am a Web Designer based in san francisco.
          </CardDescription>
        </CardContent>
      </CardHeader>
      <div className="absolute right-8 bottom-8  ">
        <Icon />
      </div>
    </Card>
  );
}
