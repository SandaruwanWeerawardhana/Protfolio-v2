import { skillCategories } from '../../data/skills';
import { Stagger, StaggerItem } from '../animations';
import SkillCategoryCard from '../cards/SkillCategoryCard';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';

const spotlightColors = ['rgba(56, 189, 248, 0.16)', 'rgba(139, 92, 246, 0.16)'];

export function Skills() {
  return (
    <Section id="skills" size="wide">
      <SectionHeading
        eyebrow="Skills"
        title="Skills & Expertise"
        subtitle="A comprehensive overview of my technical capabilities"
      />

      <Stagger className="grid gap-6 md:grid-cols-2 lg:gap-8" stagger={0.1}>
        {skillCategories.map((category, index) => (
          <StaggerItem key={category.title} className="h-full">
            <SkillCategoryCard
              category={category}
              spotlightColor={spotlightColors[index % spotlightColors.length]}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default Skills;
