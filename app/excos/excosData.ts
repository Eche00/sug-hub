// app/data/excosData.ts
export interface Executive {
  id: number;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
}

export interface ExcosByYear {
  [year: string]: Executive[];
}

export const excosByYear: ExcosByYear = {
  '2022-2023': [
    {
      id: 1,
      name: 'John Doe',
      position: 'President',
      department: 'Computer Science',
      image: '/images/excos/john-doe.jpg',
      bio: 'Leading student initiatives and representing student interests.',
    },
    {
      id: 2,
      name: 'Sarah Chen',
      position: 'Vice President',
      department: 'Business Administration',
      image: '/images/excos/sarah-chen.jpg',
      bio: 'Oversees campus events and student activities.',
    },
    {
      id: 3,
      name: 'Mike Williams',
      position: 'Secretary',
      department: 'Engineering',
      image: '/images/excos/mike-williams.jpg',
      bio: 'Manages communications and meeting minutes.',
    },
    {
      id: 4,
      name: 'Lisa Park',
      position: 'Treasurer',
      department: 'Economics',
      image: '/images/excos/lisa-park.jpg',
      bio: 'Handles budget and financial planning.',
    },
    {
      id: 5,
      name: 'David Brown',
      position: 'Public Relations',
      department: 'Communications',
      image: '/images/excos/david-brown.jpg',
      bio: 'Manages social media and external communications.',
    },
  ],
  '2023-2024': [
    {
      id: 1,
      name: 'Jane Smith',
      position: 'President',
      department: 'Political Science',
      image: '/images/excos/jane-smith.jpg',
      bio: 'Advocating for student rights and campus improvements.',
    },
    {
      id: 2,
      name: 'Robert Kim',
      position: 'Vice President',
      department: 'Computer Science',
      image: '/images/excos/robert-kim.jpg',
      bio: 'Focuses on academic excellence and research opportunities.',
    },
    {
      id: 3,
      name: 'Emma Garcia',
      position: 'Secretary',
      department: 'Psychology',
      image: '/images/excos/emma-garcia.jpg',
      bio: 'Coordinates meetings and maintains records.',
    },
    {
      id: 4,
      name: 'James Wilson',
      position: 'Treasurer',
      department: 'Finance',
      image: '/images/excos/james-wilson.jpg',
      bio: 'Oversees student union finances and allocations.',
    },
    {
      id: 5,
      name: 'Olivia Taylor',
      position: 'Events Director',
      department: 'Marketing',
      image: '/images/excos/olivia-taylor.jpg',
      bio: 'Plans and executes campus events and activities.',
    },
  ],
  '2024-2025': [
    {
      id: 1,
      name: 'Alex Johnson',
      position: 'President',
      department: 'Computer Science',
      image: '/images/excos/alex-johnson.jpg',
      bio: 'Driving innovation and student engagement initiatives.',
    },
    {
      id: 2,
      name: 'Sophia Martinez',
      position: 'Vice President',
      department: 'Environmental Science',
      image: '/images/excos/sophia-martinez.jpg',
      bio: 'Promoting sustainability and campus green initiatives.',
    },
    {
      id: 3,
      name: 'Daniel Lee',
      position: 'Secretary',
      department: 'Law',
      image: '/images/excos/daniel-lee.jpg',
      bio: 'Ensures transparency and proper documentation.',
    },
    {
      id: 4,
      name: 'Maya Patel',
      position: 'Treasurer',
      department: 'Accounting',
      image: '/images/excos/maya-patel.jpg',
      bio: 'Manages financial reports and budgeting.',
    },
    {
      id: 5,
      name: 'Brian Clark',
      position: 'Tech Director',
      department: 'Information Technology',
      image: '/images/excos/brian-clark.jpg',
      bio: 'Oversees digital platforms and tech infrastructure.',
    },
  ],
};

// Helper functions
export const getYears = (): string[] => {
  return Object.keys(excosByYear).sort();
};

export const getExcosByYear = (year: string): Executive[] => {
  return excosByYear[year] || [];
};

export const getAllExcos = (): Executive[] => {
  return Object.values(excosByYear).flat();
};