// Mock data for Teacher Dashboard
// Persona: Sarah Thompson, Mathematics teacher, Grade 8 lead

export const TEACHER = {
  name: 'Sarah Thompson',
  initials: 'ST',
  role: 'Mathematics · Grade 8 Lead',
  email: 'sarah.thompson@planetx.edu',
  attendance: 98,
  classes: 4,
  studentsNeedAttention: 3,
  newMessages: 5,
}

export const QUICK_STATS = [
  { label: 'Assignments', value: 12, status: 'Pending', color: '#5046e5' },
  { label: 'Concerns', value: 3, status: 'Active', color: '#ff7847' },
  { label: 'Parent Messages', value: 5, status: 'New', color: '#19c37d' },
]

export const SMART_INSIGHTS = [
  {
    color: 'red',
    title: 'Class 9B participation dropped',
    text: 'Dropped by 12% since last Wednesday. Consider an interactive quiz.',
  },
  {
    color: 'green',
    title: 'High STEM Engagement',
    text: '3 students (Leo, Mia, Ethan) showing exceptional progress in Calculus.',
  },
  {
    color: 'amber',
    title: 'Quiz difficulty feedback',
    text: "12 students reported last week's quiz as \"too difficult\". Review the curve.",
  },
]

export const TODAYS_CLASSES = [
  { id: 1, time: '09:00', period: 'Period 1', subject: 'Mathematics', grade: 'Grade 8A', room: 'Room 302', attendance: '94%', engagement: 'High', status: 'live' },
  { id: 2, time: '10:45', period: 'Period 2', subject: 'Advanced Physics', grade: 'Grade 11C', room: 'Science Lab B', attendance: '88%', engagement: 'Medium', status: 'upcoming' },
  { id: 3, time: '13:00', period: 'Period 4', subject: 'Algebra II', grade: 'Grade 10B', room: 'Room 204', attendance: '92%', engagement: 'High', status: 'upcoming' },
  { id: 4, time: '15:00', period: 'Period 5', subject: 'Calculus BC', grade: 'Grade 12A', room: 'Room 401', attendance: '—', engagement: '—', status: 'scheduled' },
]

export const NOTIFICATIONS = [
  { id: 1, icon: 'megaphone', title: 'Management Announcement', sub: 'New curriculum guidelines published for 2024.', color: '#5046e5' },
  { id: 2, icon: 'mail', title: 'Parent Meeting Request', sub: 'Mr. Henderson regarding Leo\'s Physics score.', color: '#ff7847' },
]

export const UPCOMING_EVENT = {
  title: 'Faculty Meeting',
  when: 'Today at 3:30 PM',
  where: 'Main Conference Hall',
}

export const GRADE_TREE = [
  { id: 6, label: 'Grade 6', sections: [{ id: '6A', label: 'Section A (Math)' }, { id: '6B', label: 'Section B (Science)' }] },
  { id: 7, label: 'Grade 7', sections: [{ id: '7A', label: 'Section A (Math)' }, { id: '7B', label: 'Section B (Science)' }] },
  { id: 8, label: 'Grade 8', sections: [{ id: '8A', label: 'Section A (Math)' }, { id: '8B', label: 'Section B (Science)' }], open: true },
  { id: 9, label: 'Grade 9', sections: [{ id: '9A', label: 'Section A (Math)' }, { id: '9B', label: 'Section B (Science)' }] },
  { id: 10, label: 'Grade 10', sections: [{ id: '10A', label: 'Section A (Math)' }, { id: '10B', label: 'Section B (Science)' }] },
  { id: 11, label: 'Grade 11', sections: [{ id: '11A', label: 'Section A (Math)' }, { id: '11B', label: 'Section B (Science)' }] },
  { id: 12, label: 'Grade 12', sections: [{ id: '12A', label: 'Section A (Math)' }, { id: '12B', label: 'Section B (Science)' }] },
]

export const ACTIVE_SESSION = {
  badge: 'Active Now',
  period: 'Period 4',
  subject: 'Mathematics Grade 8A',
  attendance: 94,
  concerns: 1,
  graded: '8/12',
  avgScore: 'B+',
  participation: 'Vibrant',
}

export const TOMORROW_SESSION = {
  when: 'Tomorrow 09:00',
  subject: 'Science 8B',
  detail: 'Lab Session: Organic Compounds',
  prep: 92,
  prepSteps: ['Slides', 'Quiz', 'Notes'],
  extra: 28,
}

export const VISUAL_BENCH = [
  { id: 1, name: 'Liam B.', avatar: '#c9486a', filled: true },
  { id: 2, name: 'Ava J.', avatar: '#5046e5', filled: true },
  { id: 3, name: 'Marco R.', avatar: '#19c37d', filled: true },
  { id: 4, name: 'Chloe T.', avatar: null, filled: false },
  { id: 5, name: 'Daniel K.', avatar: null, filled: false },
  { id: 6, name: 'Sarah M.', avatar: null, filled: false },
  { id: 7, name: 'Leo V.', avatar: null, filled: false },
  { id: 8, name: 'Emma W.', avatar: null, filled: false },
  { id: 9, name: 'Lucas G.', avatar: null, filled: false },
  { id: 10, name: 'Nina P.', avatar: null, filled: false },
  { id: 11, name: 'Oliver J.', avatar: null, filled: false },
  { id: 12, name: 'Maya S.', avatar: null, filled: false },
]

export const ENGAGEMENT_TREND = [
  { day: 'Mon', value: 0.55 },
  { day: 'Tue', value: 0.65 },
  { day: 'Wed', value: 0.95 },
  { day: 'Thu', value: 0.85 },
  { day: 'Fri', value: 0.6 },
  { day: 'Sat', value: 0.4 },
  { day: 'Sun', value: 0.35 },
]

export const CLASS_FEED = [
  {
    id: 1,
    type: 'announcement',
    author: 'Marco Ross',
    time: '2h ago',
    text: 'Final Project Rubric Posted — Please review the requirements for the Algebra Module.',
  },
  {
    id: 2,
    type: 'question',
    author: 'Marco Ross',
    time: '2h ago',
    text: '"Can anyone explain the third step of the quadratic formula proof?"',
    replies: 12,
    likes: 4,
  },
  {
    id: 3,
    type: 'file',
    author: 'Teacher Alex',
    time: 'Yesterday',
    text: 'Lesson_Notes_W12.pdf',
    meta: 'Shared by · teacher Alex',
  },
]

// FEED
export const FEED_TABS = [
  { id: 'all', label: 'All Campus' },
  { id: 'student', label: 'Student Work' },
  { id: 'teacher', label: 'Teacher Insights' },
  { id: 'events', label: 'Events' },
  { id: 'news', label: 'Dept News' },
]

export const FEED_POSTS = [
  {
    id: 1,
    author: 'Alex Lo',
    role: 'Year 11',
    badge: 'Physics Lab',
    time: '2h ago',
    text: 'Just completed my first aerodynamic prototype for the inter-school competition. Tested with a smoke tunnel to visualize airflow! 🚀',
    image: 'aeroplane',
    likes: 42,
    comments: 12,
    tag: null,
  },
  {
    id: 2,
    author: 'Sarah Thompson',
    role: 'Innovation Lead',
    badge: 'Teacher',
    time: '5h ago',
    text: 'I\'ve been experimenting with "Unstructured Inquiry" in my morning sessions. Instead of a set prompt, we start with a blank whiteboard and a single physical artifact. The depth of discussion from the Year 9s today was phenomenal. Has anyone else tried this for social sciences?',
    quote: '"The goal isn\'t to cover the curriculum, but to uncover it."',
    likes: 89,
    comments: 24,
    tag: '#Pedagogy',
  },
  {
    id: 3,
    author: 'Mia Chen',
    role: 'Year 10',
    badge: 'Student Work',
    time: '1d ago',
    text: 'My visual essay on the industrial revolution — watercolor + collaged newspaper clippings. Took 3 weekends but worth it.',
    image: 'essay',
    likes: 124,
    comments: 18,
    tag: '#HistoryProject',
  },
]

export const UPCOMING_EVENTS = [
  { date: '14', month: 'OCT', title: 'STEM Innovation Fair', sub: 'Main Hall • 09:00 AM' },
  { date: '16', month: 'OCT', title: 'Parent-Teacher Symposium', sub: 'Library Annex • 04:30 PM' },
  { date: '18', month: 'OCT', title: 'Art Vernissage', sub: 'The Studio • 06:00 PM' },
]

export const TRENDING_DISCUSSIONS = [
  { tag: '#AIinClassroom' },
  { tag: '#StudentWellness' },
  { tag: '#CurriculumReform' },
  { tag: '#SportsDay24' },
  { tag: '#Sustainability' },
]

// STUDENT INTELLIGENCE
export const STUDENTS_LIST = [
  { id: 1, name: 'Leo Vance', grade: 10, path: 'Bio-Mechanical Engineering', avatar: 'LV', engagement: 'High', attendance: 98.4, attention: false },
  { id: 2, name: 'Aarav Kumar', grade: 8, path: 'STEM · Robotics', avatar: 'AK', engagement: 'High', attendance: 96, attention: true },
  { id: 3, name: 'Mia Chen', grade: 10, path: 'Arts · Visual Design', avatar: 'MC', engagement: 'Medium', attendance: 89, attention: true },
  { id: 4, name: 'Liam Bennett', grade: 8, path: 'STEM · Mathematics', avatar: 'LB', engagement: 'High', attendance: 94, attention: false },
  { id: 5, name: 'Ava Johnson', grade: 8, path: 'STEM · Robotics', avatar: 'AJ', engagement: 'High', attendance: 97, attention: false },
  { id: 6, name: 'Ethan Park', grade: 11, path: 'Physics · Calculus', avatar: 'EP', engagement: 'High', attendance: 92, attention: false },
  { id: 7, name: 'Sofia Reyes', grade: 9, path: 'Liberal Arts', avatar: 'SR', engagement: 'Medium', attendance: 88, attention: true },
  { id: 8, name: 'Noah Williams', grade: 10, path: 'Computer Science', avatar: 'NW', engagement: 'High', attendance: 95, attention: false },
]

export const STUDENT_DETAIL = {
  id: 1,
  name: 'Leo Vance',
  grade: 10,
  path: 'Intelligence Path: Bio-Mechanical Engineering',
  avatar: 'LV',
  tags: ['Top 5% Robotics', 'Social Anchor'],
  attendance: 98.4,
  engagement: 'High',
  creative: 1240,
  pulseData: [0.4, 0.55, 0.7, 0.45, 0.85, 0.95, 0.6, 0.5, 0.4],
  pulseNote: 'Peak engagement detected during Robotics Labs',
  interests: [
    { title: 'Robotics Enthusiasm', tag: 'Primary', text: 'Demonstrates advanced spatial reasoning and kinematic problem-solving during solo build phases.', proficiency: 92, color: '#5046e5' },
    { title: 'Leadership Tendencies', tag: 'Emergent', text: 'Naturally gravitates toward conflict resolution and task delegation in collaborative sprints.', proficiency: 78, color: '#19c37d' },
  ],
  socialMap: {
    center: { id: 'LV', label: 'Leo V.' },
    nodes: [
      { id: 'SL', label: 'Sofia L.', type: 'core' },
      { id: 'AM', label: 'Aiden M.', type: 'core' },
      { id: 'JT', label: 'Jasmine T.', type: 'secondary' },
      { id: 'RK', label: 'Ravi K.', type: 'secondary' },
    ],
  },
  socialQuote: '"Leo acts as a bridge between the technical engineering core and the conceptual design group."',
  observations: [
    { id: 1, author: 'Marcus Webb', time: '2h ago', text: 'Leo handled the prototype failure today with remarkable maturity. Instead of frustration, he initiated a root-cause analysis with his peer group.' },
    { id: 2, author: 'Elena Aris', time: '1d ago', text: 'Recommend moving Leo to the Advanced Kinematics elective for the next cycle. He is outperforming the current module\'s logic bounds.' },
  ],
  insights: [
    { icon: 'lightning', label: 'Learning Velocity', text: 'Exceeding standard curriculum by 40% in STEM units.' },
    { icon: 'users', label: 'Social Influence', text: 'Identified as a "Reliability Node" in class-wide sociograms.' },
    { icon: 'target', label: 'Next Milestone', text: 'Capstone Project: Autonomous Mapping Drone.' },
  ],
  growth: [
    { date: 'OCTOBER 2024', title: 'Robotics Regional Qualifier', text: 'Led the hardware integration team to a first-place victory in systemic efficiency.' },
    { date: 'SEPTEMBER 2024', title: 'Interdisciplinary Shift', text: 'Observed pivot from pure coding to mechanical structural design; interest spike noted.' },
    { date: 'AUGUST 2024', title: 'Baseline Intelligence Mapping', text: 'Entrance diagnostics complete. Top percentile for algorithmic logic and spatial awareness.' },
  ],
}

// MESSAGES
export const CHANNELS = [
  { id: 'home', label: 'Home', icon: 'Home' },
  { id: 'classes', label: 'Classes', icon: 'Class' },
  { id: 'messages', label: 'Messages', icon: 'Messages' },
  { id: 'analytics', label: 'Analytics', icon: 'Chart' },
  { id: 'profile', label: 'Profile', icon: 'User' },
]

export const PARENT_CONTACTS = [
  { id: 1, name: 'Sarah Thompson', sub: 'Parent · Progress Update', avatar: 'ST', unread: 1, online: true },
  { id: 2, name: 'Julianne Reed', sub: 'Student · Calculus Doubt', avatar: 'JR', online: true },
  { id: 3, name: 'Management', sub: 'Policy Vote', avatar: 'MG', unread: 1, online: false, urgent: true },
]

export const DIRECT_MESSAGE_THREAD = {
  id: 'julianne',
  student: { name: 'Julianne Reed', grade: 12, track: 'Honors Student', avatar: 'JR', online: true },
  messages: [
    { from: 'them', time: '10:24 AM', text: 'Hello Professor! I\'m having some trouble with the Chain Rule application in Question 4 of the Calculus worksheet. Could you clarify if I should differentiate the inner function first?' },
    { from: 'me', time: '10:45 AM', text: 'Absolutely, Julianne. For the Chain Rule, you always want to differentiate the "outer" function first, leaving the "inner" function alone, then multiply by the derivative of the inner function.' },
    { from: 'them', time: '10:50 AM', text: 'That makes perfect sense, thank you for the PDF guide, it\'s very helpful! I will review the worksheet now.' },
  ],
  attachments: [
    { name: 'Calculus_Wk_4.pdf', date: 'OCT 12, 2023', type: 'pdf' },
    { name: 'Graph_Screenshot_01...', date: 'OCT 10, 2023', type: 'image' },
  ],
  quickAction: {
    title: 'Quick Action',
    text: 'Schedule a private tutoring session for Julianne?',
    cta: 'Schedule Now',
  },
}
