import * as React from 'react';
import { render } from 'react-dom';
import { Resume } from 'components/resume';
import resumeData from 'resume.json';
import 'resume.less';

render(<Resume
    resume={resumeData}
/>, document.getElementById('app'));