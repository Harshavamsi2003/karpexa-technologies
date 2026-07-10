import CapabilityLayout from '../../components/CapabilityLayout';

// ---------------------------------------------------------------
//  Data & Analytics — all copy for this page lives in the data object below.
//  Edit freely: context, signals, offerings, benefits, deliverables,
//  useCases, tech and faqs all render automatically.
// ---------------------------------------------------------------
export const data = {
  "slug": "data-analytics",
  "title": "Data & Analytics",
  "g": "g6",
  "blurb": "Turn raw data into decisions with modern, AI-ready analytics.",
  "tagline": "Turn raw data into decisions with modern, AI-ready analytics.",
  "context": "Most startups sit on data they can't yet use — spread across spreadsheets and tools that don't talk. We bring it together, make it trustworthy, and turn it into dashboards and decisions, with a foundation that's ready for AI when you are.",
  "signals": [
    "Reporting means someone stitching spreadsheets each month.",
    "Teams argue over whose numbers are right.",
    "You want to use AI but your data isn't ready."
  ],
  "offerings": [
    {
      "name": "Tableau",
      "desc": "Dashboards that turn data into decisions people actually use."
    },
    {
      "name": "Power BI",
      "desc": "Self-service reporting across the whole business."
    },
    {
      "name": "Qlik",
      "desc": "Associative analytics for deeper exploration."
    },
    {
      "name": "Databricks",
      "desc": "Modern data platforms built for scale and machine learning."
    },
    {
      "name": "Alteryx",
      "desc": "Automated data prep and analytics workflows."
    }
  ],
  "benefits": [
    {
      "title": "See clearly",
      "text": "One version of the truth across every team."
    },
    {
      "title": "Decide faster",
      "text": "Answers in minutes, not weeks."
    },
    {
      "title": "AI-ready",
      "text": "A clean foundation built for what comes next."
    },
    {
      "title": "Less manual work",
      "text": "Automated pipelines replace copy-and-paste."
    }
  ],
  "deliverables": [
    "Data audit and source mapping",
    "Cleaned, connected data model",
    "Live dashboards for your key metrics",
    "Automated refresh pipelines",
    "Enablement so your team can self-serve"
  ],
  "useCases": [
    {
      "title": "Scattered spreadsheets",
      "text": "One source of truth across sales, ops and finance."
    },
    {
      "title": "Slow reporting",
      "text": "Live dashboards replace manual monthly decks."
    },
    {
      "title": "Getting AI-ready",
      "text": "A clean data platform to build models on."
    }
  ],
  "tech": [
    "Tableau",
    "Power BI",
    "Qlik",
    "Databricks",
    "Alteryx"
  ],
  "faqs": [
    {
      "q": "Do we need a data team first?",
      "a": "No — we can set the foundation and hand you something your existing team can run."
    },
    {
      "q": "Which tool should we use?",
      "a": "We recommend based on your stack and budget, not a fixed preference."
    },
    {
      "q": "Is our data ready for AI?",
      "a": "We'll assess honestly and get it there if it isn't."
    }
  ]
};

export default function DataAnalytics() {
  return <CapabilityLayout data={data} />;
}
