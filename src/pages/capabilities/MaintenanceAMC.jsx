import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Maintenance & AMC — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "maintenance-amc",
  "title": "Maintenance & AMC",
  "g": "g5",
  "blurb": "Proactive upkeep and a dedicated desk for uninterrupted operations.",
  "tagline": "Proactive upkeep and a dedicated desk for uninterrupted operations.",
  "context": "Downtime is expensive and distracting. Our maintenance keeps your hardware and systems healthy with preventive care, genuine spares and real-time tracking — all under a single, predictable annual contract, with one desk to call.",
  "signals": [
    "You chase multiple vendors when something breaks.",
    "Ageing kit fails without warning.",
    "No one's doing preventive checks."
  ],
  "offerings": [
    {
      "name": "IT Spares",
      "desc": "Genuine parts, ready the moment you need them."
    },
    {
      "name": "Real-time Tracking",
      "desc": "Live visibility of every ticket and asset."
    },
    {
      "name": "Zero-incident Ops",
      "desc": "Preventive maintenance that stops problems early."
    },
    {
      "name": "Enterprise AMC",
      "desc": "One contract covering your whole estate."
    }
  ],
  "benefits": [
    {
      "title": "Uptime you can trust",
      "text": "Proactive care, not reactive firefighting."
    },
    {
      "title": "One number to call",
      "text": "A single desk for everything, with clear SLAs."
    },
    {
      "title": "Extend asset life",
      "text": "Get more from the hardware you already own."
    },
    {
      "title": "Budget certainty",
      "text": "One predictable annual cost, agreed up front."
    }
  ],
  "deliverables": [
    "Asset inventory and health baseline",
    "Preventive maintenance schedule",
    "Spares plan and SLA-backed support desk",
    "Ticket tracking and reporting",
    "Annual review and recommendations"
  ],
  "useCases": [
    {
      "title": "Ageing hardware",
      "text": "Keep older kit dependable and extend its useful life."
    },
    {
      "title": "Multiple vendors",
      "text": "One contract and one desk instead of chasing many suppliers."
    },
    {
      "title": "Critical uptime",
      "text": "Preventive checks that stop outages before they start."
    }
  ],
  "tech": [
    "OEM spares",
    "Asset tracking",
    "Ticketing / ITSM"
  ],
  "faqs": [
    {
      "q": "What does the AMC cover?",
      "a": "Preventive maintenance, break-fix, spares and a support desk — scoped to your estate and agreed up front."
    },
    {
      "q": "Do you cover hardware you didn't supply?",
      "a": "Usually yes, after an assessment of its condition."
    },
    {
      "q": "What are the response times?",
      "a": "Agreed as SLAs and reported on monthly."
    }
  ]
};

export default function MaintenanceAMC() {
  return <CapabilityLayout data={data} />;
}
