import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Tech Talent — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "tech-talent",
  "title": "Tech Talent",
  "g": "g4",
  "blurb": "Skilled professionals on your team, fast — without the hiring drag.",
  "tagline": "Skilled professionals on your team, fast — without the hiring drag.",
  "context": "Hiring specialists is slow and risky for a young company. We put vetted engineers, analysts and specialists on your team in weeks — as individuals or a managed pod — so you can move on opportunities without over-committing to permanent headcount.",
  "signals": [
    "A project is stalled waiting on a skill you don't have.",
    "Demand spikes and your team can't stretch further.",
    "Recruitment is taking months you don't have."
  ],
  "offerings": [
    {
      "name": "Contract Staffing",
      "desc": "Vetted specialists on your team, fast — for a sprint or a season."
    },
    {
      "name": "People Development",
      "desc": "Upskilling and certification to grow your own bench."
    },
    {
      "name": "Managed Teams",
      "desc": "A managed pod that owns an outcome end to end."
    }
  ],
  "benefits": [
    {
      "title": "Hire in weeks",
      "text": "Skip the long recruitment cycle and start delivering."
    },
    {
      "title": "Lower risk",
      "text": "Flexible, try-before-you-hire engagement models."
    },
    {
      "title": "Retain knowledge",
      "text": "Documentation and handover built into every engagement."
    },
    {
      "title": "Scale both ways",
      "text": "Up for a push, down again when it is done."
    }
  ],
  "deliverables": [
    "Role and skill scoping with a shortlist",
    "Vetted candidates or a ready-formed pod",
    "Onboarding and integration with your team",
    "Regular check-ins and performance visibility",
    "Knowledge handover on exit"
  ],
  "useCases": [
    {
      "title": "Skills gap",
      "text": "Bring in niche expertise for a project without a permanent hire."
    },
    {
      "title": "Sudden demand",
      "text": "Scale a delivery team up fast, then down again."
    },
    {
      "title": "Building a squad",
      "text": "A managed pod that owns an outcome end to end."
    }
  ],
  "tech": [
    "Cloud",
    "Data",
    "Security",
    "DevOps",
    "Software engineering"
  ],
  "faqs": [
    {
      "q": "How quickly can someone start?",
      "a": "Often within a couple of weeks, depending on the skill and seniority."
    },
    {
      "q": "What if the fit isn't right?",
      "a": "Flexible models mean we can swap or adjust without a painful commitment."
    },
    {
      "q": "Can they work with our existing team?",
      "a": "Yes — they integrate into your tools, standups and workflow."
    }
  ]
};

export default function TechTalent() {
  return <CapabilityLayout data={data} />;
}
