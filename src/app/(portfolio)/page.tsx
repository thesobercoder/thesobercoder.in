import Globe from "@/components/globe";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EXPERIENCE } from "@/data/experience";
import { SOCIALS } from "@/data/socials";
import { ArrowUpRight } from "lucide-react";
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
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="relative">
                <div>
                  <Link
                    href="/"
                    className="text-4xl lg:text-5xl block font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/20 bg-opacity-50 pb-1"
                  >
                    <h1>Soham Dasgupta</h1>
                  </Link>
                  <h2 className="text-sm lg:text-lg font-medium text-foreground/60">
                    Technology Leader & Enterprise Architect
                  </h2>
                  <div className="flex flex-row justify-center lg:justify-start gap-x-4 mt-4">
                    <Button size="lg" className="w-24 opacity-80" asChild>
                      <Link
                        rel="noreferrer noopener"
                        target="_self"
                        href="mailto:soham@thesobercoder.in"
                      >
                        Email
                      </Link>
                    </Button>
                    <Button size="lg" className="w-24 opacity-80" asChild>
                      <Link
                        rel="noreferrer noopener"
                        target="_blank"
                        href="/resume.pdf"
                      >
                        Resume
                      </Link>
                    </Button>
                  </div>
                  {SOCIALS.length && (
                    <ul
                      className="flex items-center justify-center lg:justify-start gap-x-4 mt-4"
                      aria-label="Social media"
                    >
                      {SOCIALS.map((social) => {
                        const Icon = social.icon;
                        return (
                          <li key={social.name}>
                            <Button variant="outline" size="icon" asChild>
                              <Link
                                href={social.url}
                                target={social.target}
                                rel={social.rel}
                                aria-label={`${social.name} (opens in a new tab)`}
                              >
                                <span className="sr-only">{social.name}</span>
                                <Icon className="size-8 text-current opacity-80" />
                              </Link>
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
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
                    I’m a technology leader with 15 years of experience in
                    software engineering and enterprise architecture. I am
                    passionate about collaboration and mentorship, guiding teams
                    to deliver innovative solutions. I thrive on driving growth
                    and efficiency in technology initiatives and am committed to
                    fostering a culture of creativity and problem-solving within
                    my teams.
                  </p>
                  <p>
                    Looking forward to new challenges and exciting
                    opportunities!
                  </p>
                </div>
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
              <div className="grid grid-cols-1 gap-4">
                {EXPERIENCE.map((experience) => (
                  <Link
                    key={experience.title}
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="bg-background/5 rounded-xl border border-transparent shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:border-foreground/20 hover:shadow-xl group-hover:bg-foreground/5">
                      <CardHeader>
                        <CardTitle className="text-foreground/80">
                          {experience.title}
                        </CardTitle>
                        <CardDescription className="flex items-center">
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            width={36}
                            height={36}
                            className="mr-3 border border-foreground/10 p-1 rounded-md bg-background"
                          />
                          {experience.company}
                          <ArrowUpRight className="ml-1 transition-transform duration-300 transform group-hover:translate-x-2" />
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-md text-foreground/80">
                          {experience.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4 text-xs">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="border-foreground/20 border px-2 py-1 rounded-xl text-foreground/80 bg-background"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
