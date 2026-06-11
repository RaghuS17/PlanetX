// Mock data for the app

export const SCHEDULE_ITEMS = [
  { id: 1, time: '09:00 AM - 10:30 AM', title: 'Advanced UI Design', sub: 'Studio 4 • Prof. Sarah Jenkins', status: 'live' },
  { id: 2, time: '11:00 AM - 12:30 PM', title: 'Design Systems Theory', sub: 'Lecture Hall B • Dr. Marcus Chen', status: 'upcoming' },
  { id: 3, time: '01:00 PM - 02:00 PM', title: 'Lunch with AI Ethics Lab', sub: 'Student Cafeteria', status: 'upcoming' },
  { id: 4, time: '02:30 PM - 04:00 PM', title: 'Robotics Lab Open Hours', sub: 'Engineering Wing 3', status: 'upcoming' },
  { id: 5, time: '04:30 PM - 05:30 PM', title: 'Photography Club', sub: 'Art Studio • Open Session', status: 'upcoming' },
  { id: 6, time: '06:00 PM - 07:30 PM', title: 'Data Structures Review', sub: 'Library Study Room', status: 'upcoming' },
  { id: 7, time: '08:00 PM - 09:00 PM', title: 'Jazz Night Rehearsal', sub: 'Conservatory', status: 'upcoming' },
]

export const UPDATES = [
  { id: 1, icon: 'mail', title: 'Prof. Sarah Jenkins posted a new assignment', link: 'UI Case Study', time: '2 HOURS AGO' },
  { id: 2, icon: 'doc', title: 'Dr. Marcus Chen posted new material', link: 'Design System Assets', time: 'YESTERDAY' },
  { id: 3, icon: 'edit', title: 'Office of Registrar edited a due date', link: 'Final Project Phase 1', time: '3 DAYS AGO' },
  { id: 4, icon: 'star', title: 'You earned the "Active Learner" badge', link: 'View Achievement', time: '5 DAYS AGO' },
]

export const ALERTS = [
  { id: 1, type: 'New Placement Policy', text: 'Please review the updated internship guidelines for 2024.' },
  { id: 2, type: 'Library Hours Extended', text: 'Open until 2 AM during finals week starting Nov 15.' },
]

export const HIGHLIGHTS = [
  { id: 1, type: 'event', tag: 'EVENT', title: 'Tech Symposium 2024', subtitle: 'Open: Kimberly-Clark Auditorium', avatars: 3 },
  { id: 2, type: 'club', tag: 'CLUB', title: 'Photography Meetup', subtitle: 'Wed 6 PM • Art Studio', avatars: 2 },
  { id: 3, type: 'event', tag: 'WORKSHOP', title: 'AI Prompt Engineering', subtitle: 'Saturday 2 PM • Lab 5', avatars: 3 },
  { id: 4, type: 'club', tag: 'CLUB', title: 'Jazz Ensemble Auditions', subtitle: 'Friday 7 PM • Conservatory', avatars: 2 },
]

export const COURSES = [
  { id: 1, name: 'Advanced UI Design Patterns', instructor: 'Prof. Sarah Jenkins', category: 'DESIGN', thumb: 'design', status: 'in-progress', progress: 65, duration: '12:45', rating: 4.8, lessons: '8/12' },
  { id: 2, name: 'React & TypeScript Mastery', instructor: 'Marcus Chen', category: 'CODE', thumb: 'code', status: 'in-progress', progress: 40, duration: '24:10', rating: 4.9, lessons: '6/15' },
  { id: 3, name: 'Neural Networks Deep Dive', instructor: 'Dr. Elara Vance', category: 'AI', thumb: 'ai', status: 'new', progress: 0, duration: '18:30', rating: 4.7, lessons: '0/10' },
  { id: 4, name: 'Statistical Mechanics', instructor: 'Prof. Robert Vance', category: 'PHYSICS', thumb: 'physics', status: 'completed', progress: 100, duration: '15:20', rating: 4.6, lessons: '12/12' },
  { id: 5, name: 'Business Strategy Foundations', instructor: 'Dr. Michael Chen', category: 'BUSINESS', thumb: 'business', status: 'in-progress', progress: 25, duration: '20:00', rating: 4.5, lessons: '3/14' },
  { id: 6, name: 'Music Theory Essentials', instructor: 'Prof. Elara Vance', category: 'MUSIC', thumb: 'music', status: 'new', progress: 0, duration: '14:25', rating: 4.8, lessons: '0/8' },
  { id: 7, name: 'Photography Composition', instructor: 'Marcus Chen', category: 'PHOTOGRAPHY', thumb: 'photo', status: 'locked', progress: 0, duration: '16:00', rating: 4.9, lessons: '0/10' },
  { id: 8, name: 'Data Visualization', instructor: 'Dr. Sarah Jenkins', category: 'DATA', thumb: 'data', status: 'new', progress: 0, duration: '22:15', rating: 4.7, lessons: '0/12' },
]

export const ASSIGNMENTS = [
  { id: 1, code: 'CS 402', title: 'Dynamic Programming Portfolio', due: 'Due Oct 24', daysLeft: '2 days left', status: 'open' },
  { id: 2, code: 'ENG 101', title: 'Final Research Draft', due: 'Revision needed', daysLeft: '!', status: 'revise', feedback: '"Please revise the citations in section 3. You can resubmit until Friday for partial credit."' },
  { id: 3, code: 'MKT 201', title: 'Marketing Strategy Case Study', due: 'Completed Oct 18 • Grade: 94/100', status: 'done' },
]

export const FEED_POSTS = [
  {
    id: 1,
    name: 'Marcus Chen',
    meta: 'Engineering Department • 2h ago',
    badge: 'Achievement',
    text: 'Huge congrats to the Robotics Team for taking 1st place in the National Tech Symposium! Weeks of late nights finally paid off. Check out our finalist prototype 🤖✨',
    type: 'robot',
    likes: 242,
    comments: 18,
  },
  {
    id: 2,
    name: 'Tech Trends',
    meta: 'Innovation Desk • 5h ago',
    badge: 'TECH TRENDS',
    type: 'article',
    title: 'Sustainable Energy: The Shift to Solid-State Batteries',
    text: 'A new breakthrough in material science suggests that next-gen batteries could be 3x more efficient…',
    byline: 'JC AI • Read by 1.2k students',
  },
  {
    id: 3,
    name: 'Elara Vance',
    meta: 'Computer Science Department • 8h ago',
    badge: 'RESEARCH',
    text: 'Just published our paper on "Adaptive Learning in Multi-Agent Systems". Big thanks to the 12 students who contributed! Link in comments 📚',
    type: 'doc',
    likes: 89,
    comments: 12,
  },
  {
    id: 4,
    type: 'event',
    date: 'Friday, Oct 14 • 7:00 PM',
    title: 'Campus Jazz Night: Autumn Echoes',
    text: 'Join the Conservatory Ensemble for an evening of contemporary jazz and fusion in the Grand Atrium.',
  },
  {
    id: 5,
    name: 'Alex Rivera',
    meta: 'Robotics Club President • 12h ago',
    badge: 'CLUB',
    text: 'Kickoff meeting for the Solar Car Project on Monday! We are looking for 8 more team members - especially from EE and MechE. DM me if interested 🚗⚡',
    type: 'photo',
    likes: 156,
    comments: 24,
  },
]

export const CALENDAR_EVENTS = {
  // October 2024 events
  3: [{ type: 'Lecture: CS101', category: 'purple' }],
  9: [{ type: 'Midterm Exam', category: 'dark' }],
  14: [{ type: 'Workshop: AI', category: 'purple' }],
  16: [{ type: 'Workshop', category: 'purple' }, { type: 'Meetup', category: 'pink' }],
  18: [{ type: 'Career Talk', category: 'green' }],
  20: [{ type: 'Project Due', category: 'dark' }],
  24: [{ type: 'Portfolio Due', category: 'dark' }],
  25: [{ type: 'Hackathon', category: 'yellow' }],
  28: [{ type: 'Photography', category: 'pink' }],
  30: [{ type: 'Study Group', category: 'purple' }],
}

export const TRENDING = [
  { tag: 'TOPICS', title: '#QuantumComputing101', sub: '425 posts this week' },
  { tag: 'POSTS', title: 'Deep Ocean Bioluminescence', sub: 'Trending in Biology' },
  { tag: 'STARTS IN 3 DAYS', title: 'Study-A-Thon 2024', sub: 'Starts in 3 days' },
  { tag: 'TOPICS', title: '#SustainableDesign', sub: '215 posts this week' },
]

export const WELLNESS_CARDS = [
  { id: 1, icon: 'Brain', color: 'wc-1', title: 'Mindful Minutes', text: '5-minute guided breathing exercises to reduce exam stress.', link: 'Start session' },
  { id: 2, icon: 'Heart', color: 'wc-2', title: 'Wellness Journal', text: 'Track your mood, sleep, and energy to find patterns.', link: 'Open journal' },
  { id: 3, icon: 'Users', color: 'wc-3', title: 'Peer Support Circle', text: 'Connect anonymously with trained student listeners.', link: 'Join circle' },
  { id: 4, icon: 'Book', color: 'wc-4', title: 'Study-Life Balance', text: 'Personalized tips to balance academics and self-care.', link: 'Explore tips' },
  { id: 5, icon: 'Lightning', color: 'wc-5', title: 'Energy Boost', text: 'Quick movement breaks and energizing activities.', link: 'Get energized' },
  { id: 6, icon: 'Music', color: 'wc-6', title: 'Calm Soundscape', text: 'Curated ambient sounds for focus and relaxation.', link: 'Listen now' },
]

export const THERAPISTS = [
  { id: 1, name: 'Dr. Maya Patel', spec: 'Cognitive Behavioral Therapy • 8 yrs exp', cta: 'Available today' },
  { id: 2, name: 'Dr. James Liu', spec: 'Academic Stress & Anxiety', cta: 'Available tomorrow' },
  { id: 3, name: 'Dr. Priya Singh', spec: 'Mindfulness & Wellbeing', cta: 'Available this week' },
]
