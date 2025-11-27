import { Contributions } from "@components/Contributions";
import { TechStack } from "@components/TechStack";
import { ProseH2, ProseP } from "@components/ui/Typography";
import { baseMetadata } from "@config/meta";
import { Metadata } from "next";

export const metadata: Metadata = baseMetadata;

export default async function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <ProseH2 id="about">About</ProseH2>
        <ProseP>
          Full Stack Engineer with 5+ years specializing in React, TypeScript,
          and Go. Expert in legacy modernization and developer tooling. Builds
          scalable, well-tested solutions that improve performance and reduce
          operational costs.
        </ProseP>
      </section>
      <section className="space-y-6">
        <ProseH2 id="contributions">Contributions</ProseH2>
        <Contributions />
      </section>
      <section className="space-y-6">
        <ProseH2 id="tech-stack">Technology stack</ProseH2>
        <TechStack />
      </section>
    </div>
  );
}
