import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const profile = {
  fullName: 'Dadi Nur Ardhi',
  Nickname: 'Ardhi',
  Age: 22,
  role: 'Frontend Developer',
  summary:
    'I,m Ardhi. A 22 years old living in a small, but damn beautiful country called Indonesia',
  contact: [
    {
      name: 'Email',
      value: 'dadinurardhi@gmail.com',
    },
    {
      name: 'Phone',
      value: '+(62) 852 0519 3313',
    },
  ],
  socialMedia: [
    {
      name: 'Github',
      icon: GitHubIcon,
      id: 'dna-ardhi',
      href: 'https://github.com/dna-ardhi',
    },
    {
      name: 'LinkedIn',
      icon: LinkedInIcon,
      id: 'dadinurardhi',
      href: 'https://www.linkedin.com/in/dadinurardhi/',
    },
  ],
  educations: {
    school: 'Budi Utomo Senior High School, East Java',
    degree: 'High School',
    graduate: '2015-2018',
  },
  experiences: [
    {
      title: 'Junior Programmer',
      company: 'Batam Software Digital',
      location: 'Batam City, Riau Islands, Indonesia',
      years: '2022',
    },
    {
      title: 'Frontend Engineer',
      company: 'Glints X Binar Academy',
      location: 'Indonesia',
      years: '2021-2022',
    },
    {
      title: 'UI/UX Design',
      company: 'Electives X AMMAN',
      location: 'Indonesia',
      years: '2021',
    },
  ],
};

export default profile;
