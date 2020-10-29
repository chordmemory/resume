import React from 'react';
import { Education } from 'types/resume';
import { formatDate } from 'util/date';

const InstitutionSummary = (props: Education) => (
  <article className={props.institution}>
    <h3>{props.institution}</h3>
    <h4>{props.area}</h4>
    <p>{props.gpa}</p>
    <p>Graduated {formatDate(props.endDate)}</p>
  </article>
);

interface Props {
  institutions: Education[];
}

export const EducationSummary = (props: Props) => (
  <section className="education">
    <h2>Education</h2>
    {props.institutions.map((institution, index) => (
      <InstitutionSummary key={index} {...institution} />
    ))}
  </section>
);
