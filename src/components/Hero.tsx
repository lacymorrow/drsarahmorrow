/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LMBALz7bRcr
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const watchLink = (
  <Tooltip delayDuration={0}>
    <TooltipTrigger>
      <Link className={cn(buttonVariants({ variant: "outline" }))} href="#">
        Watch the Service
      </Link>
    </TooltipTrigger>
    <TooltipContent>
      <p>The link is not yet active.</p>
    </TooltipContent>
  </Tooltip>
);

const watchInfo = (
  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
    The service will be broadcast on Zoom and YouTube for those who cannot be
    with us in person.
  </p>
);

export default function Hero() {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200 dark:border-gray-800">
          <Link className="flex items-center justify-center" href="/">
            <CrossIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            <span className="sr-only">
              Celebration of life: Dr. Sarah Morrow
            </span>
          </Link>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-950">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Remembering Dr. Sarah Morrow
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    A beloved doctor, cherished friend, and devoted family
                    member. We come together to honor her life and legacy.
                  </p>

                  {watchInfo}

                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    {watchLink}
                  </div>
                </div>
                <Image
                  alt="Dr. Sarah Morrow"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                  height="466"
                  src="/headshot.jpg"
                  width="712"
                />
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    A Life of Service
                  </div>
                  <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Honoring Sarah Morrow&apos;s Legacy
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    Dr. Sarah Morrow dedicated her life to caring for others. As
                    a respected physician, she touched the lives of countless
                    patients and their families. Her unwavering compassion and
                    medical expertise made her a pillar of the community.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    Funeral Service
                  </div>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                    A Celebration of Life for Dr. Morrow will be held on
                    Saturday, April 27th at 3:00 PM at the O&apos;Henry Hotel in
                    Greensboro.
                  </p>
                  {watchInfo}

                  {watchLink}
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Dr. Sarah Alice Taylor Morrow. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer> */}
      </div>
    </TooltipProvider>
  );
}

function CrossIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z" />
    </svg>
  );
}
