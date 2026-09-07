import type { SkillCategory } from '../../types';
import { Stagger, StaggerItem } from '../animations';
import SpotlightCard from '../ui/SpotlightCard';

interface SkillCategoryCardProps {
  category: SkillCategory;
  spotlightColor?: string;
}

/** One skill group: heading, blurb and a responsive icon grid. */
export function SkillCategoryCard({ category, spotlightColor }: SkillCategoryCardProps) {
  return (
    <SpotlightCard className="surface-interactive h-full p-6 sm:p-8" spotlightColor={spotlightColor}>
      <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.07] pb-5">
        <h3 className="font-display text-lg font-semibold text-content-primary sm:text-xl">
          {category.title}
        </h3>
        <span className="shrink-0 text-xs text-content-subtle">
          {category.skills.length} tools
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-content-muted">{category.description}</p>

      <Stagger
        as="ul"
        stagger={0.04}
        className="mt-7 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-4"
      >
        {category.skills.map((skill) => (
          <StaggerItem as="li" key={skill.name} distance={12} className="group/skill">
            <div className="flex flex-col items-center gap-2.5 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/[0.07] bg-white/[0.04] p-3 transition-[transform,border-color,background-color] duration-300 ease-out-expo group-hover/skill:-translate-y-1 group-hover/skill:border-primary-400/30 group-hover/skill:bg-white/[0.08]">
                <img
                  src={skill.icon}
                  alt=""
                  aria-hidden="true"
                  width={32}
                  height={32}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="text-xs font-medium text-content-muted transition-colors duration-200 group-hover/skill:text-content-primary">
                {skill.name}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </SpotlightCard>
  );
}

export default SkillCategoryCard;
