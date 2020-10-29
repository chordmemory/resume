import React from 'react';
import { Job as JobSchema } from 'types/resume';
import { formatDate } from 'util/date';

const Job = (props: JobSchema) => (
  <article className="job-summary">
    <div className="row">
      <h3>
        {props.company} - {props.position}
      </h3>
      <h3>
        {formatDate(props.startDate)} - {formatDate(props.endDate) || 'Present'}
      </h3>
    </div>
    {props.summary && <h4>{props.summary}</h4>}
    {props.highlights && (
      <ul className="job-highlights">
        {props.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    )}
  </article>
);

export const ExperienceSummary = (props: { jobs: JobSchema[] }) => (
  <section style={{ flexBasis: '60%' }}>
    <h2>Experience</h2>
    {props.jobs.map((job, index) => (
      <Job key={index} {...job} />
    ))}
  </section>
);
