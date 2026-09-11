export const company = {
  name: "Kaliyugaa",
  product: "AGS3",
  productLong: "Kaliyugaa AGS3",
  tagline: "The operating system for modern BPO.",
  lede: "Specialist agents handle customer care, tech support, voice and non-voice work. Live feedback then steers the floor — quality, staffing, and the next playbook.",
  email: "briefings@kaliyugaa.com",
  city: "Bengaluru",
  region: "India",
} as const;

export const nav = [
  { to: "/ags3", label: "AGS3" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const capabilities = [
  "Customer care",
  "BPO operations",
  "Tech & IT support",
  "Voice",
  "Non-voice",
  "Market analysis",
  "Agentic optimization",
] as const;

export const services = [
  {
    id: "customer-care",
    number: "01",
    title: "Customer care",
    lede: "First contact, retention, and recovery — handled by agents that already know the account.",
    body: "AGS3 runs inbound and outbound care across chat, email, and voice. It greets, authenticates, resolves, and only escalates when judgment needs a person. Every contact writes back into the customer record and the floor model.",
    points: [
      "Omnichannel intake with a single customer memory",
      "Policy-aware resolution, not script recitation",
      "Supervised handoff to human specialists",
    ],
  },
  {
    id: "bpo",
    number: "02",
    title: "BPO operations",
    lede: "Back-office work that used to need a bench now runs as a supervised queue.",
    body: "Claims, KYC, order ops, billing exceptions, and catalog work move through specialist agents with audit trails. Kaliyugaa does not rent seats. We install a system that takes the volume and shows you how it is doing.",
    points: [
      "Exception-first queues instead of linear headcount",
      "Dual-control on money, PII, and irreversible actions",
      "Shift-ready reporting for operations leadership",
    ],
  },
  {
    id: "tech-it",
    number: "03",
    title: "Tech & IT support",
    lede: "L1 and L2 that actually close tickets — with runbooks the agents follow, and update.",
    body: "Password, access, device, network, and SaaS issues are diagnosed against your CMDB and knowledge base. AGS3 proposes the fix, executes approved actions, and files a clean ticket. Recurring incidents become playbooks automatically.",
    points: [
      "Identity-aware troubleshooting",
      "Approved remote actions with a paper trail",
      "Incident patterns fed into market and product feedback",
    ],
  },
  {
    id: "voice",
    number: "04",
    title: "Voice",
    lede: "Live conversation, not an IVR maze. Agents that listen, speak, and know when to stop.",
    body: "AGS3 voice agents carry the call: intent, verification, resolution, wrap-up. They stay inside your tone and compliance envelope. Silence, frustration, and repeat callers are treated as signals, not noise.",
    points: [
      "Low-latency speech with barge-in",
      "Real-time QA against policy, not after-the-fact sampling",
      "Warm transfer with a spoken brief, not a cold dump",
    ],
  },
  {
    id: "non-voice",
    number: "05",
    title: "Non-voice",
    lede: "Chat, email, social, and ticket work on one floor — same memory, same standards.",
    body: "Async channels get the same agent mesh as voice. Drafts, macros, and knowledge are generated in your voice, then sent or held for review by rule. Backlogs shrink because the system works the queue, not a roster.",
    points: [
      "Unified queue across chat, mail, and case systems",
      "Tone-matched replies with citation to policy",
      "SLA clocks the system actually respects",
    ],
  },
  {
    id: "market-analysis",
    number: "06",
    title: "Market analysis through feedback",
    lede: "Every contact is a sample of the market. AGS3 treats it that way.",
    body: "We do not wait for a quarterly survey. Calls, chats, tickets, and CSAT comments are clustered into product, pricing, and operations themes. Leadership gets a daily brief: what broke, what is rising, what to change on the floor.",
    points: [
      "Theme detection across voice and text",
      "Root-cause tied to playbooks and staffing",
      "Closed-loop recommendations, not a slide dump",
    ],
  },
] as const;

export const layers = [
  {
    number: "01",
    name: "Sense",
    title: "Intake that already understands",
    body: "Voice, chat, email, tickets, and product telemetry arrive as one stream. AGS3 identifies the customer, the intent, and the risk before a single action is taken.",
  },
  {
    number: "02",
    name: "Act",
    title: "Specialist agents, not a general chatbot",
    body: "Care, billing, tech, KYC, and collections are separate agents with separate tools. They collaborate, they do not improvise outside policy, and they escalate with a brief a human can use.",
  },
  {
    number: "03",
    name: "Steer",
    title: "The floor learns from itself",
    body: "Quality, AHT, FCR, and feedback themes write back into routing, staffing, and playbooks. This is the agentic loop: the system that runs the work also improves the work.",
  },
] as const;

export const metrics = [
  { value: "3", label: "Operating layers", hint: "Sense, Act, Steer" },
  { value: "6", label: "Service lines", hint: "Care to market analysis" },
  { value: "24/7", label: "Floor coverage", hint: "Voice and non-voice" },
  { value: "1", label: "System of record", hint: "Every contact, one memory" },
] as const;

export const principles = [
  {
    title: "Agents with jobs",
    body: "A general model with a prompt is not an operation. Each AGS3 agent has a role, tools, a supervisor, and a kill switch.",
  },
  {
    title: "Humans on the exceptions",
    body: "People take judgment, empathy, and irreversible actions. The system takes volume. That split is designed, not hoped for.",
  },
  {
    title: "Feedback is an input",
    body: "Surveys, silence, repeats, and social mentions are routed into the same loop that runs the floor. Analysis is not a side team.",
  },
  {
    title: "Audit over theatre",
    body: "Every action is attributable. Clients see the queue, the policy hit, and the outcome — not a demo that vanishes after the pitch.",
  },
] as const;

export const faqs = [
  {
    q: "What does AGS3 actually replace?",
    a: "The first wave is L1 care, tech support, and back-office queues — the work that is high-volume, policy-bound, and expensive to staff overnight. It does not replace your operations leaders. It gives them a floor that reports the truth.",
  },
  {
    q: "How is this different from a chatbot or an IVR?",
    a: "Chatbots deflect. IVRs route. AGS3 performs the work: authenticated actions in your systems, wrap-up, QA, and a feedback loop into staffing and product. Voice and non-voice share one memory.",
  },
  {
    q: "Where do people still sit?",
    a: "On exceptions, regulated actions, and the relationships that need a named human. Kaliyugaa designs the split with you. Headcount usually moves up the stack, not out the door overnight.",
  },
  {
    q: "Can it use our existing telephony and ticketing?",
    a: "Yes. AGS3 connects to the floor you already have — CCaaS, ITSM, CRM, billing — rather than asking you to rip it out. We add the agent mesh and the steering layer on top.",
  },
  {
    q: "How does market analysis come out of support?",
    a: "Every contact is tagged for theme, severity, and product surface. AGS3 clusters those tags daily and recommends floor and product changes. That brief is the same system, not a consultancy add-on.",
  },
] as const;

export const interests = [
  "AGS3 briefing",
  "Customer care",
  "BPO operations",
  "Tech & IT support",
  "Voice",
  "Non-voice",
  "Market analysis",
  "Partnership",
] as const;
