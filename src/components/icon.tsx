import * as React from 'react';
import github from 'assets/icons/github.svg';
import linkedin from 'assets/icons/linkedin.svg';
import email from 'assets/icons/email.svg';
import phone from 'assets/icons/phone.svg';

const icons: { [name: string]: unknown } = {
  github,
  linkedin,
  email,
  phone
};

export const Icon = (props: { iconName: string }) => (
  <img className="icon" src={icons[props.iconName] as string} />
);
