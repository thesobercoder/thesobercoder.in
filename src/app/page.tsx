import { Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/data/socials";
import { FileText, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <main className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        {/* Header Section */}
        <header className="mb-32 relative">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div className="relative z-10 order-2 md:order-1">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tighter text-foreground mb-6 leading-[0.9]">
                Soham <br />
                <span className="text-muted-foreground/60 italic">Dasgupta</span>
              </h1>
              <div className="h-1 w-32 bg-primary mb-8" />
              <p className="text-xl md:text-2xl text-foreground/80 font-light tracking-wide max-w-2xl leading-relaxed">
                Technology Leader & Enterprise Architect
              </p>

              <div className="flex flex-wrap gap-4 pt-8">
                <Button size="lg" className="rounded-full w-48 px-8 text-lg h-14 bg-foreground text-background hover:bg-foreground/90 transition-colors" asChild>
                  <Link href="mailto:soham@thesobercoder.in">
                    <Mail className="mr-2 size-5" /> Get in Touch
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full w-48 px-8 text-lg h-14 border-foreground/20 hover:bg-foreground/5 transition-colors" asChild>
                  <Link href="/resume.pdf" target="_blank">
                    <FileText className="mr-2 size-5" /> Resume
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 mt-8">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target={social.target}
                      className="text-muted-foreground hover:text-primary transition-colors p-3 border border-border/50 rounded-full hover:border-primary/50 hover:bg-primary/5"
                    >
                      <Icon className="size-6" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96">
                <Image
                  src="/profile.png"
                  alt="Soham Dasgupta"
                  fill
                  priority
                  className="rounded-full object-cover sepia-[.5] contrast-110 brightness-110 border border-border/50 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        {/* About Section */}
        <section className="mb-32 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-primary sticky top-24">
            About
          </h2>
          <div className="prose prose-lg dark:prose-invert prose-neutral max-w-none leading-loose text-foreground/90">
            <p>
              I transform complex business challenges into elegant cloud solutions.
            </p>
            <p>
              From architecting distributed systems that power Fortune 500 companies to building enterprise financial platforms that drive millions in revenue, I see every project as an opportunity to push the boundaries of what is possible.
            </p>
            <p>
              Passionate about fostering technical excellence and innovation, I create environments where teams thrive and solutions scale. When not designing cloud architectures, you will find me mentoring the next generation of engineers and exploring the frontiers of technology.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-32 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-primary sticky top-24">
            Experience
          </h2>
          <Experience />
        </section>

        {/* Skills Section */}
        <section className="mb-32 grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-primary sticky top-24">
            Expertise
          </h2>
          <Skills />
        </section>

        {/* Contact Section */}
        <section className="py-24 border-t border-border/40">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-8 tracking-tight">Ready to collaborate?</h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Let's discuss how we can build scalable, future-proof solutions together.
            </p>
            <Button size="lg" className="rounded-full px-10 py-8 text-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-2xl shadow-primary/20" asChild>
              <Link href="mailto:soham@thesobercoder.in">
                Start a Conversation
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
