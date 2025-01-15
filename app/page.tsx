"use server";
import { AboutSection } from './views/components/about/aboutSection';
import { HomeSection } from './views/components/home/homeSection';
import { PlatformStructure } from './views/layouts/platformStructure';
import { SkillsSection } from './views/components/skills/skillsSection';


export default async function Home() {
  return (
    <div>
      <PlatformStructure>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
      </PlatformStructure>
    </div>
  );
}
