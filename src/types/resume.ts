export interface Resume {
  basics?: {
    name?: string;
    label?: string;
    email?: string;
    phone?: string;
    url?: string;
    summary?: string;
    location?: {
      address?: string;
      postalCode?: string;
      city?: string;
      countryCode?: string;
      region?: string;
      [k: string]: any;
    };
    profiles?: {
      network?: string;
      username?: string;
      url?: string;
      [k: string]: any;
    }[];
    [k: string]: any;
  };
  work?: Job[];
  education?: Education[];
  skills?: Skill[];
  interests?: {
    name?: string;
    keywords?: string[];
  }[];
}

export interface Skill {
  name?: string;
  level?: string;
  keywords?: string[];
  [k: string]: any;
};

export interface Education {
  institution?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  gpa?: string;
  courses?: string[];
}

export interface Job {
  name?: string;
  location?: string;
  description?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  company?: string;
}