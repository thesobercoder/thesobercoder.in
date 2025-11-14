import { Experience } from "@/components/experience";
import { Globe } from "@/components/globe";
import { Skills } from "@/components/skills";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOCIALS } from "@/data/socials";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative hero z-10">
      <div className="mx-auto max-w-(--breakpoint-2xl) px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="flex lg:items-start gap-4 flex-col lg:flex-row items-center text-center lg:text-left">
              <Image
                src="/profile.png"
                alt="Soham Dasgupta"
                width={128}
                height={128}
                priority
                className="rounded-full ring-4 ring-foreground/10 hover:ring-primary/50 transition-all duration-300"
              />
              <div className="relative">
                <div>
                  <Link
                    href="/"
                    className="text-4xl lg:text-5xl block font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/20 bg-opacity-50 pb-1 hover:bg-linear-to-r hover:from-primary hover:to-primary/70 transition-all duration-500"
                  >
                    <h1>Soham Dasgupta</h1>
                  </Link>
                  <h2 className="text-sm lg:text-lg font-medium text-foreground/60 mb-2">
                    Technology Leader & Enterprise Architect
                  </h2>
                  <p className="text-sm text-foreground/50 mb-4">
                    Building scalable cloud solutions for enterprise challenges
                  </p>
                  <div className="mt-4 p-4 rounded-lg bg-background/50 backdrop-blur-sm max-w-md mx-auto lg:mx-0">
                    <div className="flex flex-col gap-3">
                      {/* Buttons */}
                      <div className="flex gap-3">
                        <Button size="lg" className="flex-1 gap-1" asChild>
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
                          className="flex-1 gap-1"
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

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

                      {/* Social Icons - Centered */}
                      {SOCIALS.length && (
                        <TooltipProvider>
                          <div className="flex justify-center gap-3">
                            {SOCIALS.map((social) => {
                              const Icon = social.icon;
                              return (
                                <Tooltip key={social.name}>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="size-10"
                                      asChild
                                    >
                                      <Link
                                        href={social.url}
                                        target={social.target}
                                        rel={social.rel}
                                        aria-label={`${social.name} (opens in a new tab)`}
                                      >
                                        <Icon className="size-5 opacity-70 hover:opacity-100 transition-opacity" />
                                      </Link>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{social.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              );
                            })}
                          </div>
                        </TooltipProvider>
                      )}
                    </div>
                  </div>
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
              <Skills />
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
              <Experience />
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
