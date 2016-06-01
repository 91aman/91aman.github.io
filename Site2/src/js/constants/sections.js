/**
 * Created by amanjain on 14/01/16 at 9:39 AM.
 * Description : Constant file for sections.
 */


import HomeIcon from 'material-ui/lib/svg-icons/action/home';
import AboutIcon from 'material-ui/lib/svg-icons/social/person';
import WorkIcon from 'material-ui/lib/svg-icons/places/business-center';
import SkillsIcon from 'material-ui/lib/svg-icons/action/build';
import SchoolIcon from 'material-ui/lib/svg-icons/social/school';
import AchievementsIcon from 'material-ui/lib/svg-icons/action/stars';
import ProjectsIcon from 'material-ui/lib/svg-icons/av/library-books.js';
import ContactIcon from 'material-ui/lib/svg-icons/communication/contacts';
//import Skills from '../sections/skills.jsx';
import Intro from '../sections/intro/intro.jsx';
import About from '../sections/about.jsx';
import Education from '../sections/education/education.jsx';
import Work from '../sections/work/work.jsx';
import Skills from '../sections/skills/skills.jsx';
import Projects from '../sections/projects/projects.jsx';

export default {
    home: {
        title: 'Home',
        subTitle: '',
        icon: HomeIcon,
        body: Intro,
        ignoreSectionHeader: true
    },
    about: {
        title: 'About',
        subTitle: '',
        icon: AboutIcon,
        headerBackImage : 'src/img/back-1.png',
        body: About
    },
    work: {
        title: 'Work',
        subTitle: '',
        icon: WorkIcon,
        headerBackImage : 'src/img/back-2.png',
        body: Work
    },
    skills: {
        title: "Skills & Expertise",
        subTitle: "I've been developing my skill–set to focus on what’s most suited to getting the job done quickly and effectively.",
        icon: SkillsIcon,
        headerBackImage : 'src/img/back-3.png',
        body: Skills
    },
    education: {
        title: 'Education',
        subTitle: '',
        icon: SchoolIcon,
        headerBackImage : 'src/img/back-4.png',
        body: Education
    },
    projects: {
        title: 'Projects',
        subTitle: '',
        icon: ProjectsIcon,
        headerBackImage : 'src/img/back-5.png',
        body: Projects
    },
    //achievements: {
    //    title: 'Achievements',
    //    subTitle: '',
    //    icon: AchievementsIcon,
    //    body: About
    //},
    contact: {
        title: 'Contact',
        subTitle: '',
        icon: ContactIcon,
        headerBackImage : 'src/img/back-6.png',
        body: About
    }
};