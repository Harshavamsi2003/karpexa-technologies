import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  IT Infrastructure — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "it-infrastructure",
  "title": "IT Infrastructure",
  "g": "g1",
  "blurb": "Modern, scalable infrastructure — from data centre to the desk.",
  "tagline": "Modern, scalable infrastructure — from the data centre to the desk.",
  "context": "Growing teams outgrow ad-hoc setups fast — a cupboard server here, mismatched laptops there, no real record of what's where. We put a proper foundation under you: the right compute, storage, network and devices, sized for where you're heading and documented from day one, so nothing breaks as you scale.",
  "signals": [
    "New hires wait days for a working laptop.",
    "Nobody's quite sure what hardware you own or where it is.",
    "Your \"server\" is a box under someone’s desk."
  ],
  "offerings": [
    {
      "name": "Data Centre",
      "desc": "Servers, storage and virtualisation designed and optimised for your real workloads, on-prem or colocation."
    },
    {
      "name": "End-User Computing",
      "desc": "Laptops and desktops procured, imaged and delivered ready to work, to a standard build."
    },
    {
      "name": "AV & Meeting Rooms",
      "desc": "Video-first rooms that just work, from huddle spaces to the boardroom."
    },
    {
      "name": "Device Lifecycle",
      "desc": "Procurement to secure disposal: asset tracking, refresh cycles and safe wipe handled for you."
    },
    {
      "name": "Enterprise Mobility",
      "desc": "Secure devices and access for people on the move."
    }
  ],
  "benefits": [
    {
      "title": "Scales with you",
      "text": "Add capacity in days, not quarters — sized for where you are going."
    },
    {
      "title": "Fewer surprises",
      "text": "Standardised, documented builds mean fewer outages and faster fixes."
    },
    {
      "title": "Capex or opex",
      "text": "Own it outright or consume it as a service — whichever suits your stage."
    },
    {
      "title": "Faster onboarding",
      "text": "New joiners are productive on morning one, not day three."
    }
  ],
  "deliverables": [
    "Infrastructure assessment and target-state design",
    "Standard device build/image and asset register",
    "Network and Wi-Fi setup with documentation",
    "Meeting-room fit-out and testing",
    "Handover runbook and support plan"
  ],
  "useCases": [
    {
      "title": "Opening a new office",
      "text": "Networking, Wi-Fi, devices and meeting rooms set up and ready before day one."
    },
    {
      "title": "Onboarding at speed",
      "text": "New joiners get a fully-imaged, secure laptop on their first morning."
    },
    {
      "title": "Retiring legacy kit",
      "text": "Migrate off ageing servers to a modern, right-sized platform with zero data loss."
    }
  ],
  "tech": [
    "Dell",
    "HP",
    "Lenovo",
    "Cisco / Meraki",
    "Microsoft",
    "VMware"
  ],
  "faqs": [
    {
      "q": "We're small — is this overkill?",
      "a": "No. We right-size to your stage and grow the setup as you do; you don't pay for enterprise scale you don't need yet."
    },
    {
      "q": "Do we have to replace everything?",
      "a": "No. We assess what is worth keeping and only change what earns its place."
    },
    {
      "q": "Can you support us after setup?",
      "a": "Yes — pair this with Managed IT or an AMC and we look after it long-term."
    }
  ]
};

export default function ITInfrastructure() {
  return <CapabilityLayout data={data} />;
}
