import { format } from 'date-fns';
import * as React from 'react';
import * as ResumeSchema from 'types/resume';
import { EducationSummary } from './education-summary';
import { ExperienceSummary } from './experience-summary';
import { Header } from './header';
import { SkillsSummary } from './skills-summary';

interface Props {
  resume: ResumeSchema.Resume
}






export const Resume = (props: Props) => (
  <>
    <Header
      basics={props.resume.basics || {}}
    />
    <h4>{props.resume.basics?.summary}</h4>
    <div className="grid">
    <div style={{ flexBasis: '33%' }}>
        { props.resume.education && 
          <EducationSummary 
            institutions={props.resume.education}
          />
        } 
        { props.resume.skills &&
          <SkillsSummary skills={props.resume.skills}/>
        }
      </div>
      { props.resume.work &&
        <ExperienceSummary jobs={props.resume.work}/>
      }
    </div>
    <hr/>
    <section className="footer row">
      <p>References available upon request</p>
      <a href="https://github.com/chordmemory/resume">View the source code of this resume</a>
    </section>
  </>
)