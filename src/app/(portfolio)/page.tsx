import Globe from "@/components/globe";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { EXPERIENCE } from "@/data/experience";
import { SKILLS } from "@/data/skills";
import { SOCIALS } from "@/data/socials";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative hero z-10">
      <div className="mx-auto max-w-screen-2xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="flex lg:items-start gap-4 flex-col lg:flex-row items-center text-center lg:text-left">
              <Image
                src="/avatar.webp"
                alt="Soham Dasgupta"
                width={128}
                height={128}
                className="rounded-full ring-4 ring-foreground/10 hover:ring-primary/50 transition-all duration-300"
              />
              <div className="relative">
                <div>
                  <Link
                    href="/"
                    className="text-4xl lg:text-5xl block font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/20 bg-opacity-50 pb-1 hover:bg-gradient-to-r hover:from-primary hover:to-primary/70 transition-all duration-500"
                  >
                    <h1>Soham Dasgupta</h1>
                  </Link>
                  <h2 className="text-sm lg:text-lg font-medium text-foreground/60 mb-2">
                    Technology Leader & Enterprise Architect
                  </h2>
                  <p className="text-sm text-foreground/50 mb-4">
                    Building scalable cloud solutions for enterprise challenges
                  </p>
                  <div className="flex flex-row justify-center lg:justify-start gap-x-4 mt-4">
                    <Button size="lg" className="w-24 gap-1" asChild>
                      <Link
                        rel="noreferrer noopener"
                        target="_self"
                        href="mailto:soham@thesobercoder.in"
                      >
                        <Mail className="size-4" /> Email
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-24 gap-1"
                      asChild
                    >
                      <Link
                        rel="noreferrer noopener"
                        target="_blank"
                        href="/resume.pdf"
                      >
                        <FileText className="size-4" /> Resume
                      </Link>
                    </Button>
                  </div>
                  {SOCIALS.length && (
                    <TooltipProvider>
                      <ul
                        className="flex items-center justify-center lg:justify-start gap-x-4 mt-4"
                        aria-label="Social media"
                      >
                        {SOCIALS.map((social) => {
                          const Icon = social.icon;
                          return (
                            <li key={social.name}>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="outline" size="icon" asChild>
                                    <Link
                                      href={social.url}
                                      target={social.target}
                                      rel={social.rel}
                                      aria-label={`${social.name} (opens in a new tab)`}
                                    >
                                      <span className="sr-only">
                                        {social.name}
                                      </span>
                                      <Icon className="size-8 text-current opacity-80 hover:opacity-100 transition-opacity" />
                                    </Link>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{social.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </li>
                          );
                        })}
                      </ul>
                    </TooltipProvider>
                  )}
                </div>
                <div className="flex justify-center mt-4 size-80 lg:size-[24rem] xl:size-[30rem] lg:absolute lg:-left-[calc(100%-18rem)] xl:-left-[calc(100%-16rem)]">
                  <Globe />
                </div>
              </div>
            </div>
          </header>
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
              aria-label="About me"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-3 backdrop-blur-lg md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/80 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <div className="mb-4 space-y-4 text-lg text-foreground/80">
                  <p>
                    I&apos;m a technologist who believes in transforming complex
                    business challenges into elegant cloud solutions. From
                    architecting distributed systems that power Fortune 500
                    companies to building enterprise financial platforms that
                    drive millions in revenue, I see every project as an
                    opportunity to push the boundaries of what&apos;s possible.
                    Passionate about fostering technical excellence and
                    innovation, I create environments where teams thrive and
                    solutions scale. When not designing cloud architectures,
                    you&apos;ll find me mentoring the next generation of
                    engineers and exploring the frontiers of technology.
                  </p>
                </div>
              </div>
            </section>
            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
              aria-label="Technical skills"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-3 backdrop-blur-lg md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/80 lg:sr-only">
                  Skills
                </h2>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {SKILLS.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group relative overflow-hidden rounded-lg p-3 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/5 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.05)] hover:bg-white/15 hover:backdrop-blur-md hover:border-white/15 hover:shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.1)]"
                    >
                      <div className="flex flex-col items-center text-center gap-1">
                        <div className="p-2 rounded-md bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                          <Icon className="size-4 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-3 backdrop-blur-lg md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/80 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {EXPERIENCE.map((experience) => (
                  <Link
                    key={experience.title}
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <Card className="rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/5 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.05)] group-hover:bg-white/15 group-hover:backdrop-blur-md group-hover:border-white/15 group-hover:shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.1)]">
                      <CardHeader>
                        <CardTitle className="text-foreground/80 group-hover:text-foreground">
                          {experience.title}
                        </CardTitle>
                        <CardDescription>
                          <div className="flex justify-between">
                            <div className="flex items-center">
                              <Image
                                src={experience.logo}
                                alt={`${experience.company} logo`}
                                width={36}
                                height={36}
                                className="mr-3 border border-foreground/10 p-1 rounded-md bg-background"
                              />
                              {experience.company}
                              <ArrowUpRight className="ml-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                            </div>
                            <div className="text-sm text-foreground/80">
                              {experience.dates}
                            </div>
                          </div>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-md text-foreground/80 group-hover:text-foreground/90">
                          {experience.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
            <section
              id="cta"
              className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
              aria-label="Get in touch"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 px-6 py-3 backdrop-blur-lg md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-foreground/80 lg:sr-only">
                  Get in Touch
                </h2>
              </div>
              <div className="bg-background/5 rounded-xl border border-foreground/10 p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Let&apos;s Build Something Amazing
                </h3>
                <p className="text-foreground/80 mb-6">
                  Interested in collaborating or learning more about my work?
                </p>
                <Button size="lg" className="mx-auto" asChild>
                  <Link href="mailto:soham@thesobercoder.in">Contact Me</Link>
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
