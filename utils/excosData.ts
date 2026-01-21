export interface Executive {
  id: number;            // number, matches your data
  name: string;
  position: string;
  department: string;
  image: string;         // required, matches your data
  bio: string;
  email?: string;        // optional
  phone?: string;        // optional
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
    // ... other members
  ],
  // ... other years
};

// Helper functions remain the same
export const getYears = (): string[] => Object.keys(excosByYear).sort();
export const getExcosByYear = (year: string): Executive[] => excosByYear[year] || [];
export const getAllExcos = (): Executive[] => Object.values(excosByYear).flat();
