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

interface ExperienceData {
  title: string;
  description: string;
}

const experienceData: ExperienceData[] = [
  { title: "07", description: "YEARS\nEXPERIENCE" },
  { title: "+125", description: "CLIENTS\nWORLDWIDE" },
  { title: "+210", description: "TOTAL\nPROJECTS" },
];

export function ExperienceCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn(" rounded-3xl", className)} {...props}>
      <CardContent className="flex h-full flex-row flex-wrap items-center justify-between">
        {experienceData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-auto lg:w-40  items-center py-10 px-8 gap-6 bg-gradient-to-r from-[#212121] via-[#222222] to-[#242424] rounded-3xl mt-6">
            <CardTitle className="text-white text-4xl font-medium">
              {data.title}
            </CardTitle>
            <CardDescription className="text-center text-[#BCBCBC] text-sm">
              {data.description}
            </CardDescription>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
