import * as React from 'react';
import { Resume } from "types/resume";
import { Links } from './links';

interface Props {
    basics: Pick<Mixin<Resume, 'basics'>, 'name' | 'email' | 'phone' | 'profiles'>;
}

export const Header = (props: Props) => (
    <section className="header">
      <div className="column">
        <h1>{props.basics?.name}</h1>
      </div>
      <Links
        email={props.basics?.email}
        phone={props.basics?.phone}
        profiles={props.basics?.profiles}
      />
    </section>
)