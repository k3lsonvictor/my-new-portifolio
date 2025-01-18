"use server";
import { AboutSection } from './views/components/about/aboutSection';
import { HomeSection } from './views/components/home/homeSection';
import { PlatformStructure } from './views/layouts/platformStructure';
import { SkillsSection } from './views/components/skills/skillsSection';
import { ProjectsSection } from './views/components/projects/projectsSection';


export default async function Home() {
  return (
    <div>
      <PlatformStructure>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
      </PlatformStructure>
    </div>
  );
}
