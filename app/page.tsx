"use server";
import { AboutSection } from './views/components/about/aboutSection';
import { HomeSection } from './views/components/home/homeSection';
import { PlatformStructure } from './views/layouts/platformStructure';
import { SkillsSection } from './views/components/skills/skillsSection';
import { ProjectsSection } from './views/components/projects/projectsSection';
import { ContactSection } from './views/components/contact/contactSection';


export default async function Home() {
  return (
    <div>
      <PlatformStructure>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection/>
        <ContactSection/>
      </PlatformStructure>
    </div>
  );
}
