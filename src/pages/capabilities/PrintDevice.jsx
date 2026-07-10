import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Print & Device — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "print-device",
  "title": "Print & Device",
  "g": "g1",
  "blurb": "Managed print and device-as-a-service, billed the smart way.",
  "tagline": "Managed print and device-as-a-service, billed the smart way.",
  "context": "Hardware shouldn't tie up your cash or your time. We right-size your printing and devices, handle the admin end to end, and put it all on one predictable bill — so you can plan with confidence and stop buying kit in lumpy, expensive batches.",
  "signals": [
    "Big upfront hardware buys strain cash flow.",
    "Printers and devices are nobody’s job to manage.",
    "Your fleet is bigger (or older) than it needs to be."
  ],
  "offerings": [
    {
      "name": "Managed Print",
      "desc": "Right-sized printing, monitored and maintained for you."
    },
    {
      "name": "Device-as-a-Service",
      "desc": "Hardware, support and refresh in one predictable bill."
    }
  ],
  "benefits": [
    {
      "title": "Predictable cost",
      "text": "One bill, no capex spikes."
    },
    {
      "title": "Less admin",
      "text": "We handle supplies, service and refresh."
    },
    {
      "title": "Greener",
      "text": "Right-sized fleets cut waste and energy."
    },
    {
      "title": "Always current",
      "text": "Scheduled refresh keeps your kit modern."
    }
  ],
  "deliverables": [
    "Device and print assessment",
    "Right-sized fleet plan",
    "Supply, service and refresh schedule",
    "Single monthly billing",
    "Usage reporting"
  ],
  "useCases": [
    {
      "title": "Cash-flow friendly",
      "text": "Move from big upfront buys to a simple monthly cost."
    },
    {
      "title": "Hands-off hardware",
      "text": "We handle supplies, service and refresh cycles."
    },
    {
      "title": "Right-sizing",
      "text": "Cut waste with a fleet matched to real usage."
    }
  ],
  "tech": [
    "DaaS providers",
    "Managed-print partners"
  ],
  "faqs": [
    {
      "q": "Is DaaS cheaper than buying?",
      "a": "Often, once you factor in support, refresh and cash flow — we'll show you the maths for your case."
    },
    {
      "q": "Can we scale up or down?",
      "a": "Yes — the plan flexes with your headcount."
    },
    {
      "q": "What happens at refresh?",
      "a": "We replace and securely retire old devices on schedule."
    }
  ]
};

export default function PrintDevice() {
  return <CapabilityLayout data={data} />;
}
