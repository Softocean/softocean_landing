type ProjectsDataType = {
  id: number;
  title: string;
  description: string;
  link: string;
  pathName: string;
};

export const projectsInfoData: ProjectsDataType[] = [
  {
    id: 0,
    title: 'little knits story',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at.`,
    link:"",
    pathName: '/projects/little-knits-story',
  },
  {
    id: 1,
    title: 'backbar',
    description: 
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at.\n
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at.`,
    link:"",
    pathName: '/projects/backbar',
  },
  {
    id: 2,
    title: 'one task',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor dignissim convallis aenean et tortor at.`,
    link:"",
    pathName: '/projects/one-task',
  },
];
