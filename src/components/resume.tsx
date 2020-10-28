import { format } from 'date-fns';
import * as React from 'react';
import * as ResumeSchema from 'types/resume';
interface Props {
  resume: ResumeSchema.Resume
}

const Link = ({ label, iconUrl, url }: { label?: string, iconUrl?: string, url?: string }) => (
  <a href={url}><img src={iconUrl} />{label}</a>
)

const EducationSummary = (props: ResumeSchema.Education) => (
  <article
    className={props.institution}
  >
    <h3>{props.institution}</h3>
    <h4>{props.area}</h4>
    <p>{props.gpa}</p>
    <p>Graduated {formatDate(props.endDate)}</p>
  </article>
);

const formatDate = (date?: string) => {
  return date 
  ? format(new Date(date), 'MMM yyyy')
  : ''
}

const Job = (props: ResumeSchema.Job) => (
  <article>
    <div className="row">
      <h3>{props.company} - {props.position}</h3>
      <h3>{formatDate(props.startDate)} - {formatDate(props.endDate) || 'Present'}</h3>
    </div>
    <h4>{props.summary}</h4>
    <ul className="job-highlights">
      {props.highlights?.map((highlight, index) => (
        <li key={index}>{highlight}</li>
      ))}
    </ul>
  </article>
)

const Skill = (props: ResumeSchema.Skill) => (
  (
    <article>
      <h3>{props.name}:</h3>
      <p>{props.keywords?.join(', ')}</p>
    </article>
  )
)

export const Resume = (props: Props) => (
  <>
    <section className="header">
      <div className="column">
        <h1>{props.resume.basics?.name}</h1>
      </div>
      <section className="links">
        <Link
          url={`tel:${props.resume.basics?.phone}`}
          label={props.resume.basics?.phone}
        />
        <Link
          url={`mailto://${props.resume.basics?.email}`}
          label={props.resume.basics?.email}
        />
        {props.resume.basics?.profiles?.map(profile => (
          <Link
            label={profile.username || profile.network}
            url={profile.url}
          // iconUrl={require(`assets/icons/networks/${profile.network}.png`)}
          />
        ))}
      </section>
    </section>
    <h4>{props.resume.basics?.summary}</h4>
    <div className="grid">
    <div style={{ flexBasis: '33%' }}>
        <section className="education">
          <h2>Education</h2>
          {props.resume.education?.map(education => (
            <EducationSummary
              {...education}
            />
          ))}
        </section>
        <section className="skills">
          <h2>Skills</h2>
          {props.resume.skills?.map(skill => (
            <Skill
              {...skill}
            />
          ))}
        </section>
      </div>
      <section style={{ flexBasis: '60%' }}>
        <h2>Experience</h2>
        {props.resume.work?.map(job => (
          <Job
            {...job}
          />
        ))}
      </section>
    </div>
    <hr/>
    <section className="footer row">
      <p>References available upon request</p>
      <p>Built</p>
    </section>
  </>
)