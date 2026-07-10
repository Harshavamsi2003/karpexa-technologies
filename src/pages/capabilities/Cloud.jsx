import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Cloud — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "cloud",
  "title": "Cloud",
  "g": "g2",
  "blurb": "Architected, migrated and managed cloud across the major platforms.",
  "tagline": "Architected, migrated and managed cloud across the major platforms.",
  "context": "Whether you're born-in-the-cloud or still on servers under a desk, cloud only pays off when it's set up right. We design the landing zone, move you safely, and run it cost-efficiently on Google Cloud, AWS or Azure — so you pay for outcomes, not idle capacity.",
  "signals": [
    "Your cloud bill grows faster than your usage.",
    "You're scaling and on-prem can't keep up.",
    "Nobody owns cloud security or cost."
  ],
  "offerings": [
    {
      "name": "Google Cloud",
      "desc": "Certified architecture and delivery on the platform that fits your workloads."
    },
    {
      "name": "Amazon Web Services",
      "desc": "Well-architected AWS environments, built to scale with your product."
    },
    {
      "name": "Microsoft Azure",
      "desc": "Azure landing zones aligned to your workloads and licensing."
    },
    {
      "name": "Cloud Migration",
      "desc": "Lift-and-shift or re-architect, with every move de-risked and reversible."
    },
    {
      "name": "Managed Cloud",
      "desc": "Day-2 operations, cost governance and 24/7 monitoring."
    }
  ],
  "benefits": [
    {
      "title": "Pay for what you use",
      "text": "Elastic capacity that tracks real demand — no idle spend."
    },
    {
      "title": "Secure by design",
      "text": "Guardrails and identity baked in from day one."
    },
    {
      "title": "Move faster",
      "text": "Ship features instead of raising server tickets."
    },
    {
      "title": "Cost you can see",
      "text": "Spend that is tagged, tracked and controlled."
    }
  ],
  "deliverables": [
    "Cloud readiness assessment and landing-zone design",
    "Migration plan with rollback safety",
    "Cost-governance and tagging model",
    "Monitoring, alerting and backup setup",
    "Runbook and handover"
  ],
  "useCases": [
    {
      "title": "Launching a product",
      "text": "A scalable, secure environment that grows with your users."
    },
    {
      "title": "Cutting cloud bills",
      "text": "Governance and right-sizing that reclaim wasted spend."
    },
    {
      "title": "Leaving on-prem",
      "text": "A safe, staged migration with no surprise downtime."
    }
  ],
  "tech": [
    "Google Cloud",
    "Amazon Web Services",
    "Microsoft Azure"
  ],
  "faqs": [
    {
      "q": "Which cloud is best for us?",
      "a": "It depends on your workloads and team — we help you choose rather than pushing one; sometimes the answer is more than one."
    },
    {
      "q": "Will migration cause downtime?",
      "a": "We plan for little to none, with staged cutovers and rollback at every step."
    },
    {
      "q": "Can you lower our current bill?",
      "a": "Often yes — cost reviews and right-sizing are usually the fastest win."
    }
  ]
};

export default function Cloud() {
  return <CapabilityLayout data={data} />;
}
