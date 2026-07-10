// =====================================================================
//  SITE CONTENT (everything except the per-capability pages).
//  Capability content now lives in src/pages/capabilities/ — one file
//  per capability — and is re-exported here so the nav, home cards and
//  "all capabilities" page keep reading from a single list.
// =====================================================================

// Capability data + home cards come from the capabilities folder.
export { capabilities, solutionCards } from '../pages/capabilities';

export const brand = {
  name: 'Karpexa',
  full: 'Karpexa Technologies',
  tagline: 'IT, engineered for outcomes.',
  email: 'hello@karpexa.tech',
  phone: '+91 98765 43210',
  address: 'DLF Cyber City, Gurugram, Haryana 122002, India',
};

// Nav — Careers & Insights removed per brief. Reworded labels.
export const nav = [
  { label: 'Capabilities', to: '/capabilities', mega: 'capabilities' },
  { label: 'Sectors', to: '/sectors', mega: 'sectors' },
  { label: 'Company', to: '/company' },
  { label: 'Contact', to: '/contact' },
];

// Hero — 3 rotating slides. Desktop and mobile load different crops:
// desktop = subject on the right, mobile = subject low in frame.
export const heroSlides = [
  {
    img: '/home/desktop/dhome1.png',
    imgMobile: '/home/mobile/mhome1.png',
    kicker: 'End-to-end IT partner',
    lead: 'Enterprise IT, built',
    em: 'to keep you moving.',
    sub: 'From the device on a desk to the cloud behind it — we design, deploy and run it as one system, so your team can focus on the work.',
  },
  {
    img: '/home/desktop/dhome2.png',
    imgMobile: '/home/mobile/mhome2.png',
    kicker: 'One partner, start to finish',
    lead: 'One partner,',
    em: 'end to end.',
    sub: 'Infrastructure, cloud, managed services and security — joined up, and looked after long after go-live.',
  },
  {
    img: '/home/desktop/dhome3.png',
    imgMobile: '/home/mobile/mhome3.png',
    kicker: 'Secure by design',
    lead: 'Secure, scalable tech',
    em: 'for growing teams.',
    sub: 'Built for the way modern companies work — flexible, resilient and ready to scale with you.',
  },
];

// Shared "how we deliver" steps, shown on every capability page.
export const capabilityProcess = [
  { step: '01', title: 'Assess', text: 'We map your goals, current stack and constraints before recommending anything.' },
  { step: '02', title: 'Design', text: 'We architect a solution that fits your business — not a template.' },
  { step: '03', title: 'Deploy', text: 'We implement with minimal disruption, and document everything.' },
  { step: '04', title: 'Support', text: 'We stay on after go-live: monitoring, maintaining and improving.' },
];

// Sectors (your "Industries") — reworded.
export const sectors = [
  { name: 'Global Capability Centres', note: 'GCC enablement' },
  { name: 'Healthcare & Life Sciences', note: 'Regulated environments' },
  { name: 'Banking & Financial Services', note: 'BFSI / NBFC' },
  { name: 'Manufacturing & OT', note: 'Plant & operations' },
  { name: 'Automotive', note: 'OEM & suppliers' },
  { name: 'Retail & E-commerce', note: 'Store & online' },
  { name: 'Technology & ITeS', note: 'Scale-ready IT' },
  { name: 'Media & Entertainment', note: 'Creative workflows' },
  { name: 'High-growth Startups', note: 'Zero to scale' },
];

// Startup-appropriate stats (competitor achievements removed). * = fill in real numbers.
export const stats = [
  { v: '24/7', l: 'Support coverage' },
  { v: '40+', l: 'Clients served*' },
  { v: '15+', l: 'Technology partners*' },
  { v: '4', l: 'Delivery centres*' },
];

export const story = {
  eyebrow: 'Our story',
  title: 'A new kind of technology partner',
  body: 'We started Karpexa to give growing companies the same calibre of IT that large enterprises rely on — infrastructure, cloud, security and support, delivered with speed and care, without the bloat.',
};

// Home "Our story" — four pillars shown beside the story copy.
export const storyPillars = [
  { title: 'Practical', text: 'We recommend what fits your stage — never the biggest invoice.' },
  { title: 'Responsive', text: 'Small team, direct lines. You reach the person doing the work.' },
  { title: 'End-to-end', text: 'One partner from the desk to the cloud — nothing falls between vendors.' },
  { title: 'Transparent', text: 'Clear scope, clear pricing, documentation you actually own.' },
];

// -------------------- COMPANY / ABOUT PAGE --------------------

// Quick facts under the intro
export const companyFacts = [
  { k: 'Founded', v: '2025' },
  { k: 'Head office', v: 'Gurugram, India' },
  { k: 'Focus', v: 'End-to-end IT' },
  { k: 'Model', v: 'Partner, not vendor' },
];

// Honest journey for a young company — no invented history.
export const journey = [
  { phase: 'Phase 01', year: 'The idea', title: 'A gap worth closing', text: 'We kept meeting growing companies stuck between DIY IT and enterprise vendors who would not take their call. That gap became Karpexa.' },
  { phase: 'Phase 02', year: 'Today', title: 'Building with our first clients', text: 'We are hands-on with a focused set of clients — infrastructure, cloud, security and support — learning fast and documenting everything.' },
  { phase: 'Phase 03', year: 'Next', title: 'Depth before breadth', text: 'Growing the bench, deepening certifications, and building repeatable playbooks so quality never depends on who picks up the phone.' },
  { phase: 'Phase 04', year: 'Ahead', title: 'The partner you keep', text: 'The goal is not to be the biggest. It is to be the partner clients keep as they scale — and recommend without being asked.' },
];

// Why work with us
export const differentiators = [
  { title: 'You get the senior people', text: 'No bait-and-switch. The engineers who scope your work are the ones who deliver it.' },
  { title: 'Right-sized, not oversold', text: 'We size to your stage. If you do not need it yet, we will tell you so.' },
  { title: 'Vendor-neutral advice', text: 'We are certified across platforms, so the recommendation follows your workload — not our margin.' },
  { title: 'We stay after go-live', text: 'Handover is a runbook and a support plan, not a folder and a farewell.' },
];

// Our commitments
export const commitments = [
  { title: 'To our people', text: 'Continuous learning, certification support, and work that stretches without breaking anyone.' },
  { title: 'To our clients', text: 'Honest scoping, clear pricing, and the courage to say when something is not needed.' },
  { title: 'To the planet', text: 'Right-sized hardware, responsible e-waste disposal, and energy-aware infrastructure choices.' },
];

// Partner placeholders — swap for the client's real, licensed partner logos.
export const partners = Array.from({ length: 12 }, (_, i) => `LOGO ${String(i + 1).padStart(2, '0')}`);

// Company (your "Who We Are") page
export const company = {
  heroTitle: 'About us',
  heroSub: 'Your trusted partner for tailored, end-to-end IT.',
  intro:
    'Karpexa is a young IT services and consulting company built to bridge the gap between real business needs and the right technology — with solutions that are practical, well-supported and easy to live with.',
  vision: {
    label: 'Dream it, do it, digitally',
    title: 'Our vision',
    text: 'To be the partner growing companies trust first — delivering technology that is easy to adopt, flexible to change and built to help teams achieve more.',
  },
  mission: {
    label: 'Excellence with every click',
    title: 'Our mission',
    text: 'To pair modern engineering with genuine service — building long-term relationships on trust, and technology that adds measurable value to your business.',
  },
  motto: 'We lead with service.',
};

// Core values — reworded descriptions.
export const values = [
  { title: 'Innovation', text: 'We stay curious and build forward, favouring solutions that move the work — and the client — ahead.' },
  { title: 'Integrity', text: 'Honesty, transparency and doing the right thing sit underneath every engagement.' },
  { title: 'Teamwork', text: 'We combine diverse skills and act as one extended team with the people we serve.' },
  { title: 'Responsibility', text: 'We commit to sustainable, considered choices for our people, our clients and the planet.' },
];

export const footerLinks = {
  Capabilities: [
    { label: 'IT Infrastructure', to: '/capabilities/it-infrastructure' },
    { label: 'Cloud', to: '/capabilities/cloud' },
    { label: 'Managed IT', to: '/capabilities/managed-it' },
    { label: 'Security', to: '/capabilities/security' },
  ],
  Company: [
    { label: 'About', to: '/company' },
    { label: 'Sectors', to: '/sectors' },
    { label: 'Contact', to: '/contact' },
  ],
};