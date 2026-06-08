// Mock data for Management Dashboard
// Persona: Mission Control / Institutional Portal view

export const ADMIN = {
  name: 'Dr. Elena Vance',
  initials: 'EV',
  role: 'Director of Innovation',
  email: 'elena.vance@planetx.edu',
  totalStudents: 1247,
  totalTeachers: 84,
  totalClasses: 156,
  campusName: 'Greenwood International',
}

// === HOME (Unified Navigation) ===
export const ECOSYSTEMS = {
  management: [
    { id: 'overview', label: 'Overview', icon: 'Layers' },
    { id: 'students', label: 'Students', icon: 'Users' },
    { id: 'teachers', label: 'Teachers', icon: 'Briefcase' },
    { id: 'academics', label: 'Academics', icon: 'Book' },
    { id: 'activities', label: 'Activities', icon: 'Compass' },
    { id: 'social', label: 'Social Feed', icon: 'Feed' },
    { id: 'concerns', label: 'Concerns', icon: 'AlertTriangle' },
    { id: 'comms', label: 'Communication', icon: 'Messages' },
    { id: 'analytics', label: 'Analytics', icon: 'Chart' },
    { id: 'departments', label: 'Departments', icon: 'Building' },
  ],
  teacher: [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'classes', label: 'Classes', icon: 'Class' },
    { id: 'students', label: 'Students', icon: 'Users' },
    { id: 'feed', label: 'Feed', icon: 'Feed' },
    { id: 'calendar', label: 'Calendar', icon: 'Calendar' },
    { id: 'notes', label: 'Notes', icon: 'Edit' },
  ],
  parent: [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'growth', label: 'Growth', icon: 'Growth' },
    { id: 'feed', label: 'Feed', icon: 'Feed' },
    { id: 'learning', label: 'Learning', icon: 'BookOpen' },
    { id: 'concerns', label: 'Concerns', icon: 'AlertTriangle' },
    { id: 'profile', label: 'Profile', icon: 'User' },
  ],
}

export const CORE_PERFORMANCE = {
  title: 'Core Ecosystem Performance',
  desc: 'System-wide analytics are currently processing. Monitor real-time student engagement across all departments.',
}

// === STUDENT VISUAL TREE ===
export const SCHOOL_HIERARCHY = {
  id: 'whole-school',
  label: 'Whole School',
  children: [
    {
      id: 'g12', label: 'Grade 12',
      children: [
        { id: '12A', label: 'Class 12A', avgGrade: 86, attendance: 92, students: 32, contribution: 88, classTeacher: 'Mr. Vance' },
        { id: '12B', label: 'Class 12B', avgGrade: 82, attendance: 89, students: 30, contribution: 84, classTeacher: 'Ms. Roy' },
      ],
    },
    {
      id: 'g11', label: 'Grade 11',
      children: [
        { id: '11A', label: 'Class 11A', avgGrade: 88, attendance: 94, students: 28, contribution: 91, classTeacher: 'Mr. Ahmed' },
        { id: '11B', label: 'Class 11B', avgGrade: 84, attendance: 90, students: 31, contribution: 86, classTeacher: 'Dr. Iyer' },
      ],
    },
    {
      id: 'g10', label: 'Grade 10',
      children: [
        { id: '10A', label: 'Class 10A', avgGrade: 81, attendance: 87, students: 34, contribution: 80, classTeacher: 'Mrs. Bose' },
        { id: '10B', label: 'Class 10B', avgGrade: 79, attendance: 85, students: 33, contribution: 78, classTeacher: 'Mr. Khan' },
      ],
    },
    {
      id: 'g9', label: 'Grade 9',
      children: [
        { id: '9A', label: 'Class 9A', avgGrade: 84, attendance: 91, students: 36, contribution: 85, classTeacher: 'Mrs. Menon' },
        { id: '9B', label: 'Class 9B', avgGrade: 78, attendance: 82, students: 35, contribution: 72, classTeacher: 'Mr. Chen', alert: true },
      ],
    },
  ],
}

export const STUDENT_NODE_DETAIL = {
  id: 'leo-vance',
  name: 'Zoe Miller',
  initials: 'ZM',
  role: 'Honor Roll · CR: Elena Vance',
  attendance: 96,
  live: 'Live',
  avgGrade: 88,
  faculty: [
    { name: 'Math', icon: 'Σ' },
    { name: 'Physics', icon: '⚛' },
    { name: 'English', icon: '✎' },
  ],
}

// === FEED (Ecosystem) ===
export const ECOSYSTEM_POSTS = [
  { id: 1, author: 'Maya Devi', role: 'Arch Studio', time: '2h ago', text: 'Finalizing the \'Sustainable Pavilion\' renders. Using the new Carbon-Negative texture pack. What do you think of the solar glass integration? 🍃', image: 'pavilion', likes: 428, comments: 56 },
  { id: 2, author: 'Dev Kai', role: 'Engineering', time: '4h ago', text: 'Building React OS...', image: 'code', likes: 312, comments: 41 },
  { id: 3, author: 'Art by Lea', role: 'Fine Art', time: '6h ago', text: 'New Mural WIP. The intersection of form and color.', image: 'mural', likes: 564, comments: 89 },
  { id: 4, author: 'Marcus Webb', role: 'Innovation Lead', time: '1d ago', text: 'Solar Car Project kickoff tomorrow! 8 spots still open for MechE/EE students. Reply to claim.', likes: 198, comments: 32 },
]

export const CAMPUS_AIR = {
  aqi: 94,
  status: 'Optimal Focus Zone',
  temp: '22°C',
  humidity: '45%',
}

export const PULSE_HEALTH = {
  engagement: 88,
  collaboration: 72,
  quote: 'The community is currently 12% more active than last Friday.',
}

export const RISING_INTERESTS = [
  { name: 'Neuro-Tech', trend: '+24%', color: 'purple' },
  { name: 'Intramural Hub', trend: '+12%', color: 'orange' },
  { name: 'Neo-Classical Art', trend: '+8%', color: 'green' },
]

export const SPOTLIGHT = {
  name: 'Lucas Thorne',
  badge: 'TOP DEV',
  text: 'Developed a campus-wide carbon tracker that reduced lab waste by 15%.',
  cta: 'View Portfolio',
}

// === TEACHER TREE (Faculty Tree) ===
export const FACULTY_TREE = {
  root: { id: 'core', label: 'Core Faculty' },
  branches: [
    { id: 'stem', label: 'STEM Hub', icon: 'Σ' },
    { id: 'hum', label: 'Humanities', icon: '✎' },
    { id: 'arts', label: 'Creative Arts', icon: '🎨' },
  ],
}

export const FACULTY_MEMBERS = [
  { id: 1, name: 'Dr. Elena Vance', dept: 'Quantum Mechanics', energy: 4.9, mentees: 24, inspiration: 98, color: 'purple', rank: '#1', quote: 'Her lectures feel less like a class and more like a journey into the unknown.' },
  { id: 2, name: 'Prof. Julian Reed', dept: 'Neural Networks', energy: 4.7, mentees: 18, inspiration: 92, color: 'dark', quote: 'A titan of logic who somehow makes complex algorithms feel like poetry.' },
  { id: 3, name: 'Dr. Marcus Thorne', dept: 'Ethical AI', energy: 4.8, mentees: 31, inspiration: 95, color: 'blue', quote: 'He challenges our preconceptions and forces us to build for a better world.' },
  { id: 4, name: 'Sarah Chen', dept: 'Interactive Media', energy: 4.6, mentees: 12, inspiration: 89, color: 'light', quote: 'Her energy is infectious, she makes every project feel like a movie first.' },
]

export const CLASSROOM_ENERGY = {
  title: 'Classroom Energy Analytics',
  sub: 'Sentiment-driven engagement tracking',
  data: [
    { time: '08:00', value: 0.65 },
    { time: '10:00', value: 0.85 },
    { time: '12:00', value: 0.55 },
    { time: '14:00', value: 0.78 },
    { time: '16:00', value: 0.4 },
    { time: '18:00', value: 0.95 },
  ],
  studentSentiment: 92,
  participation: 'High',
  passivity: '4.2%',
  note: 'Peak engagement recorded during \'Advanced Quantum Physics\' (11:30 AM)',
}

export const IMPACT_ALERTS = [
  { icon: 'trending', title: 'Mentorship Spike', text: '12 new students requested Dr. Aris for research guidance.', color: 'green' },
  { icon: 'chat', title: 'Curiosity Alert', text: 'Course \'Design Ethics\' seeing 45% higher discussion volume.', color: 'blue' },
  { icon: 'warn', title: 'Engagement Dip', text: 'Lab Section B showing signs of cognitive fatigue. Recommendation: Dynamic break.', color: 'amber' },
]

export const FACULTY_WORKFLOW = {
  title: 'Faculty Workflow Horizon',
  legend: ['Teaching', 'Mentoring', 'Research'],
  days: [
    {
      day: 'MON',
      cells: [
        { type: 'teach', label: 'Lec 101', color: 'purple' },
        { type: 'mentor', label: 'Mentor', color: 'dark' },
        { type: 'research', label: 'Research', color: 'gray' },
      ],
    },
    {
      day: 'TUE',
      cells: [
        { type: 'research', label: 'Research', color: 'gray' },
        { type: 'teach', label: 'Lec 204', color: 'purple' },
        { type: 'mentor', label: 'Mentor', color: 'dark' },
      ],
    },
    {
      day: 'WED',
      cells: [
        { type: 'teach', label: 'Lab Day', color: 'purple' },
        { type: 'mentor', label: 'Mentor', color: 'dark' },
      ],
    },
    {
      day: 'THU',
      cells: [
        { type: 'teach', label: 'Lec 101', color: 'purple' },
        { type: 'teach', label: 'Astr.', color: 'purple' },
        { type: 'mentor', label: 'Mentor', color: 'dark' },
      ],
    },
    {
      day: 'FRI',
      cells: [
        { type: 'mentor', label: 'Open Mentor', color: 'dark' },
        { type: 'research', label: 'Seminar', color: 'gray' },
      ],
    },
  ],
}

// === CLASS ECOSYSTEM ===
export const CLASS_ECOSYSTEM = {
  badge: 'STEM-FOCUSED',
  title: 'Quantum Mechanics A-1',
  pulse: 92,
  activeClubs: 6,
  collaboration: 'High',
  totalStudents: 32,
  cultureScore: 4.8,
}

export const ECOSYSTEM_VITALITY = [
  { name: 'Robotics Growth', value: 0.72, trend: '+14%' },
  { name: 'Artistic Pulse', value: 0.6, trend: '+22%' },
  { name: 'Music Ensemble', value: 0.4, trend: '-9%' },
]

export const COLLABORATION_CLUSTERS = [
  { id: 1, name: 'Neural Arch Architects', desc: 'Collaborating on structural biodynamics research.', tags: [{ label: 'High Activity', color: 'green' }, { label: 'Research', color: 'gray' }], avatars: 6 },
  { id: 2, name: 'Canvas Collective', desc: 'Focusing on generative UI patterns and aesthetics.', tags: [{ label: 'Creative Domains', color: 'purple' }, { label: 'Design', color: 'gray' }], avatars: 4 },
  { id: 3, name: 'Synthesizer Guild', desc: 'Merging digital audio signals with classroom mood.', tags: [{ label: 'Expanding', color: 'orange' }, { label: 'Sound Lab', color: 'gray' }], avatars: 12 },
]

export const CLUBS = [
  { id: 1, name: 'Robotics Elite', desc: 'Hardware engineering and autonomous logic puzzles.', growth: '+12.4%', members: 148, icon: 'bot' },
  { id: 2, name: 'Sonic Synthesis', desc: 'Exploring the intersection of code and orchestral rhythm.', growth: '+8.2%', members: 94, icon: 'music' },
  { id: 3, name: 'Visual Alchemy', desc: 'Digital illustration and experimental XR experiences.', growth: '+18.9%', members: 212, icon: 'palette' },
  { id: 4, name: 'Game Theory', desc: 'Mathematical modeling and cooperative gameplay systems.', growth: '+5.1%', members: 78, icon: 'trophy' },
]

export const IDENTITY_HIERARCHY = {
  title: 'Identity Driven Hierarchy',
  desc: 'We\'ve mapped every digital classroom to a "Culture Type". This helps students find ecosystems that align with their natural collaborative rhythm, whether they seek rigid STEM environments or fluid creative spaces.',
  types: [
    { label: 'Creative-Dominant', desc: 'High fluidity, rapid prototyping, peer-led critique.', color: 'purple' },
    { label: 'STEM-Focused', desc: 'Analytical rigor, data-driven collaboration, structured goals.', color: 'dark' },
  ],
}
