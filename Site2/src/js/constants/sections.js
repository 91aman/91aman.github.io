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
import ContactIcon from 'material-ui/lib/svg-icons/communication/contacts';
import Skills from '../sections/skills.jsx';
import Intro from '../sections/intro/intro.jsx';
import About from '../sections/about.jsx';
import Education from '../sections/education/education.jsx';
import Work from '../sections/work/work.jsx';

export default {
    home: {
        title: 'Home',
        subTitle: '',
        icon: HomeIcon,
        body: Intro,
        ignoreSection: true
    },
    about: {
        title: 'About',
        subTitle: '',
        icon: AboutIcon,
        body: About
    },
    work: {
        title: 'Work',
        subTitle: '',
        icon: WorkIcon,
        body: Work
    },
    skills: {
        title: "Skills & Expertise",
        subTitle: "I've been developing my skill–set to focus on what’s most suited to getting the job done quickly and effectively.",
        icon: SkillsIcon,
        body: About
    },
    education: {
        title: 'Education',
        subTitle: '',
        icon: SchoolIcon,
        body: Education
    },
    achievements: {
        title: 'Achievements',
        subTitle: '',
        icon: AchievementsIcon,
        body: About
    },
    contact: {
        title: 'Contact',
        subTitle: '',
        icon: ContactIcon,
        body: About
    }
};