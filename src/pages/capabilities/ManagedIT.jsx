import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Managed IT — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "managed-it",
  "title": "Managed IT",
  "g": "g3",
  "blurb": "Round-the-clock monitoring and support that catches issues early.",
  "tagline": "Round-the-clock monitoring and support that catches issues early.",
  "context": "You shouldn't need a big internal IT team to run reliably. We become your IT function — monitoring, maintaining and improving everything behind the scenes for a predictable monthly fee — so your people stay productive and you stay focused on the business.",
  "signals": [
    "IT problems land on a founder's or ops person's desk.",
    "Issues get fixed only after they've already hurt.",
    "You're adding people and sites faster than support can keep up."
  ],
  "offerings": [
    {
      "name": "Digital Workplace",
      "desc": "A smooth day-to-day experience for every employee, on any device."
    },
    {
      "name": "Data Centre Ops",
      "desc": "Proactive monitoring and management of the systems you depend on."
    },
    {
      "name": "Application O&M",
      "desc": "Keep business apps healthy, patched and performing."
    },
    {
      "name": "AIOps",
      "desc": "Spot and resolve issues before your users ever feel them."
    }
  ],
  "benefits": [
    {
      "title": "Always-on",
      "text": "24/7 eyes on your estate, so problems get caught early."
    },
    {
      "title": "Predictable cost",
      "text": "A flat monthly model with no nasty surprises."
    },
    {
      "title": "Focus on the business",
      "text": "We run IT so your team does not have to."
    },
    {
      "title": "Fewer fires",
      "text": "Proactive care replaces reactive scrambling."
    }
  ],
  "deliverables": [
    "Onboarding audit and monitoring rollout",
    "Service desk with defined SLAs",
    "Patch, backup and health-check schedule",
    "Monthly reporting and review",
    "Full documentation of your environment"
  ],
  "useCases": [
    {
      "title": "No in-house IT",
      "text": "A full IT desk and monitoring without hiring a team."
    },
    {
      "title": "Scaling headcount",
      "text": "Support that keeps up as you add people and sites."
    },
    {
      "title": "Tired of firefighting",
      "text": "Proactive care that prevents issues instead of chasing them."
    }
  ],
  "tech": [
    "RMM & monitoring",
    "ITSM / ticketing",
    "Microsoft admin",
    "Google admin"
  ],
  "faqs": [
    {
      "q": "How is it priced?",
      "a": "A predictable monthly fee, usually per user or device — clear and easy to budget."
    },
    {
      "q": "Do you replace our IT person?",
      "a": "We complement or cover for them — many clients use us alongside a small internal team."
    },
    {
      "q": "How fast do you respond?",
      "a": "To agreed SLAs, with 24/7 monitoring catching a lot before it ever becomes a ticket."
    }
  ]
};

export default function ManagedIT() {
  return <CapabilityLayout data={data} />;
}
