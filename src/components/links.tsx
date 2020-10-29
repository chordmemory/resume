import React from 'react';
import { Profile } from 'types/resume';
import { Icon } from './icon';

const Link = ({
  label,
  icon,
  url
}: {
  label?: string;
  icon: string;
  url?: string;
}) => (
  <a href={url}>
    <Icon iconName={icon} />
    {label}
  </a>
);

interface Props {
  phone?: string;
  email?: string;
  profiles?: Profile[];
}

export const Links = (props: Props) => (
  <section className="links">
    {props.phone && (
      <Link url={`tel:${props.phone}`} label={props.phone} icon="phone" />
    )}
    {props.email && (
      <Link url={`mailto://${props.email}`} label={props.email} icon="email" />
    )}
    {props.profiles?.map((profile, index) => (
      <Link
        key={index}
        label={profile.username || profile.network}
        url={profile.url}
        icon={(profile.network || '').toLowerCase()}
      />
    ))}
  </section>
);
