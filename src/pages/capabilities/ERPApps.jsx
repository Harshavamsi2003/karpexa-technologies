import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  ERP & Apps — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "erp-apps",
  "title": "ERP & Apps",
  "g": "g6",
  "blurb": "ERP rollouts and business apps that raise automation and clarity.",
  "tagline": "ERP rollouts and business apps that raise automation and clarity.",
  "context": "As you grow, spreadsheets and disconnected tools start to hurt — re-keyed data, version chaos, no single view. We implement and build the systems that run your operations — ERP, business apps and custom software — shaped around how you actually work, not the other way round.",
  "signals": [
    "Core processes still live in spreadsheets.",
    "Teams re-enter the same data in different tools.",
    "Off-the-shelf software doesn't fit how you work."
  ],
  "offerings": [
    {
      "name": "ERP Rollout",
      "desc": "Implement ERP that fits how you actually work."
    },
    {
      "name": "Business Apps",
      "desc": "Off-the-shelf and configured apps that streamline operations."
    },
    {
      "name": "Custom Development",
      "desc": "Bespoke software where standard tools fall short."
    }
  ],
  "benefits": [
    {
      "title": "Automate the busywork",
      "text": "Fewer manual steps, fewer errors."
    },
    {
      "title": "One source of truth",
      "text": "Connected data across the whole business."
    },
    {
      "title": "Built to fit",
      "text": "Configured around your process, not the reverse."
    },
    {
      "title": "Scales with you",
      "text": "Systems that carry you well past spreadsheets."
    }
  ],
  "deliverables": [
    "Process discovery and requirements",
    "Solution design and build/config",
    "Data migration and integration",
    "Testing, training and go-live",
    "Post-launch support"
  ],
  "useCases": [
    {
      "title": "Outgrowing spreadsheets",
      "text": "Move core processes onto systems that scale."
    },
    {
      "title": "Disconnected tools",
      "text": "Join up data so teams stop re-keying it."
    },
    {
      "title": "A unique process",
      "text": "Custom software where off-the-shelf won't fit."
    }
  ],
  "tech": [
    "ERP platforms",
    "Low-code",
    "Custom web",
    "Custom mobile"
  ],
  "faqs": [
    {
      "q": "We're not big enough for ERP — right?",
      "a": "Maybe not full ERP yet; we often start with connected business apps and grow into it."
    },
    {
      "q": "Can you customise off-the-shelf tools?",
      "a": "Yes — configure first, build custom only where it genuinely pays off."
    },
    {
      "q": "How long does a rollout take?",
      "a": "It depends on scope; we phase it so you see value early, not only at the end."
    }
  ]
};

export default function ERPApps() {
  return <CapabilityLayout data={data} />;
}
