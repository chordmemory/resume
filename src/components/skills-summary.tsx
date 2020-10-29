import React from 'react';
import { Skill as SkillsType } from 'types/resume';

const Skill = (props: SkillsType) => (
  <article>
    <h3>{props.name}:</h3>
    {props.keywords && <p>{props.keywords?.join(', ')}</p>}
  </article>
);
export const SkillsSummary = (props: { skills: SkillsType[] }) => (
  <section className="skills">
    <h2>Skills</h2>
    {props.skills.map((skill, index) => (
      <Skill key={index} {...skill} />
    ))}
  </section>
);
