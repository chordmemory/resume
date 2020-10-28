import * as React from 'react';
import { render } from 'react-dom';
import { Resume } from 'components/resume';
import resumeData from 'resume.json';
import 'pages/resume/resume.less';
import 'assets/fonts/kollektif/Kollektif.ttf';
import 'assets/fonts/kollektif/Kollektif-Bold.ttf';
import 'assets/fonts/kollektif/Kollektif-Italic.ttf';
import 'assets/fonts/kollektif/Kollektif-BoldItalic.ttf';

console.log(resumeData);

render(<Resume
    resume={resumeData}
/>, document.getElementById('app'));