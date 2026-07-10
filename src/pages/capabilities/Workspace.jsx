import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Workspace — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "workspace",
  "title": "Workspace",
  "g": "g8",
  "blurb": "Collaboration that just works — email, docs, meet and chat.",
  "tagline": "Collaboration that just works — email, docs, meet and chat.",
  "context": "Your team should be able to work together anywhere without friction. We set up, secure and support your email, docs, meetings and chat — and migrate you cleanly if you're switching — so collaboration just works, on any device.",
  "signals": [
    "Email and file sharing feel clunky or insecure.",
    "You're moving between platforms and dread the migration.",
    "Access and permissions are a mess."
  ],
  "offerings": [
    {
      "name": "Email & Docs",
      "desc": "Reliable, secure collaboration for everyone in the business."
    },
    {
      "name": "Meet & Chat",
      "desc": "Meetings and messaging that simply work."
    },
    {
      "name": "Security Add-ons",
      "desc": "Extra protection layered over your workspace."
    }
  ],
  "benefits": [
    {
      "title": "Work anywhere",
      "text": "Your team, connected on any device."
    },
    {
      "title": "Simple to run",
      "text": "Managed setup, migration and support."
    },
    {
      "title": "Safer by default",
      "text": "Sensible security without the friction."
    },
    {
      "title": "Clean migration",
      "text": "Nothing lost in the switch — verified before cutover."
    }
  ],
  "deliverables": [
    "Workspace setup and domain configuration",
    "Mailbox and file migration",
    "Access and security baseline",
    "User onboarding and quick-start guides",
    "Ongoing admin support"
  ],
  "useCases": [
    {
      "title": "Starting fresh",
      "text": "Stand up email, docs and chat cleanly from day one."
    },
    {
      "title": "Switching platforms",
      "text": "Migrate mailboxes and files with nothing lost."
    },
    {
      "title": "Locking things down",
      "text": "Add security controls without slowing people down."
    }
  ],
  "tech": [
    "Google Workspace",
    "Microsoft 365"
  ],
  "faqs": [
    {
      "q": "Google or Microsoft?",
      "a": "We help you pick based on how your team works and what you already use."
    },
    {
      "q": "Will we lose email or files in a move?",
      "a": "No — migrations are planned and verified before cutover."
    },
    {
      "q": "Can you manage it ongoing?",
      "a": "Yes — admin, security and support included."
    }
  ]
};

export default function Workspace() {
  return <CapabilityLayout data={data} />;
}
