import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Security — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "security",
  "title": "Security",
  "g": "g7",
  "blurb": "Layered defence across identity, network, cloud and endpoints.",
  "tagline": "Layered defence across identity, network, cloud and endpoints.",
  "context": "Security can't be an afterthought, even early on. We layer practical protection across identities, devices, networks, cloud and apps — sized for your stage — and help you meet the standards your customers and partners increasingly expect.",
  "signals": [
    "Enterprise prospects ask security questions you can't fully answer.",
    "Your team works remotely on mixed devices.",
    "No one owns security day to day."
  ],
  "offerings": [
    {
      "name": "Endpoint",
      "desc": "Protect every device, everywhere, without slowing people down."
    },
    {
      "name": "Identity & Access",
      "desc": "The right people with the right access, always."
    },
    {
      "name": "Network",
      "desc": "Segmented, monitored and resilient by design."
    },
    {
      "name": "Cloud Security",
      "desc": "Guardrails across your entire cloud footprint."
    },
    {
      "name": "App Security",
      "desc": "Secure code and applications from build to run."
    }
  ],
  "benefits": [
    {
      "title": "Reduce risk",
      "text": "Layered defence across your whole stack."
    },
    {
      "title": "Stay compliant",
      "text": "Controls mapped to the standards you need."
    },
    {
      "title": "Respond fast",
      "text": "Detection and response for when it counts."
    },
    {
      "title": "Win trust",
      "text": "Pass the security bar that bigger clients set."
    }
  ],
  "deliverables": [
    "Security posture assessment and gap report",
    "Identity and access baseline (MFA, least privilege)",
    "Endpoint and email protection rollout",
    "Monitoring, alerting and an incident playbook",
    "Policy and compliance documentation"
  ],
  "useCases": [
    {
      "title": "Winning bigger clients",
      "text": "Meet the security bar enterprise buyers require."
    },
    {
      "title": "Remote teams",
      "text": "Protect people and data on any device, anywhere."
    },
    {
      "title": "Peace of mind",
      "text": "Detection and response so you're not caught off guard."
    }
  ],
  "tech": [
    "Endpoint / EDR",
    "Identity & MFA",
    "Email security",
    "SIEM"
  ],
  "faqs": [
    {
      "q": "We're small — are we really a target?",
      "a": "Smaller companies are targeted precisely because defences are often thin; the basics matter most."
    },
    {
      "q": "Can you help with client security questionnaires?",
      "a": "Yes — we help you answer them and close the gaps behind them."
    },
    {
      "q": "Do we need everything at once?",
      "a": "No — we prioritise the highest-risk gaps first and build from there."
    }
  ]
};

export default function Security() {
  return <CapabilityLayout data={data} />;
}
