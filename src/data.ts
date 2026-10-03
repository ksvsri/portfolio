export const projects = [
  {
    id: '01',
    name: 'EasyPay',
    subtitle: 'Making every transaction count.',
    category: 'PAYMENTS · FULL STACK',
    description:
      'A digital payment application connecting secure transactions, intuitive payment workflows, and event-driven services.',
    problem: 'Bring everyday payment workflows into one coherent application.',
    solution:
      'Developed payment features across React and Spring Boot, with reactive backend development, Kafka communication and persistent transaction data.',
    stack: ['Java', 'Spring Boot', 'React', 'WebFlux', 'Kafka', 'PostgreSQL', 'Caffeine'],
    features: [
      'UPI integration',
      'Payment requests',
      'Scheduled payments',
      'Multiple-recipient payments',
      'Transaction history & analytics',
    ],
    focus:
      'Reactive backend development, event-driven communication, persistent transaction data, caching, and payment workflow design.',
    flow: ['React client', 'Spring Boot', 'Payment services', 'Kafka', 'PostgreSQL'],
  },
  {
    id: '02',
    name: 'Assessment Portal',
    subtitle: 'Clarity in every assessment.',
    category: 'ASSESSMENT · MONITORING',
    description:
      'An assessment and proctoring platform that brings monitoring, event handling, and AI-assisted questions together.',
    problem:
      'Help assessors follow candidate activity and manage proctoring events with useful context.',
    solution:
      'Built a polling-based monitoring dashboard, live video and snapshot capture, warning cooldowns, and LLM-assisted question generation and selection.',
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Kafka', 'Caffeine', 'LLM'],
    features: [
      'Monitoring dashboard',
      'Live video & snapshots',
      'Proctoring event handling',
      'Warning & cooldown logic',
      'LLM-assisted coding questions',
      'Dynamic question selection',
    ],
    focus:
      'Fresh monitoring information, meaningful proctoring events, repeated-warning prevention, and dynamic question selection.',
    flow: ['Candidate UI', 'Backend services', 'Monitoring', 'Event processing', 'PostgreSQL'],
  },
];
export const nodes = [
  {
    name: 'React',
    tag: 'INTERFACE',
    description:
      'The user-facing layer. React and TypeScript turn application state into responsive, understandable experiences.',
  },
  {
    name: 'API Gateway',
    tag: 'ENTRY POINT',
    description:
      'An illustrative entry point for routing requests to the appropriate backend service.',
  },
  {
    name: 'Spring Boot',
    tag: 'APPLICATION',
    description:
      'Java application services expose APIs and coordinate business workflows. WebFlux supports reactive, non-blocking backend development.',
  },
  {
    name: 'Microservices',
    tag: 'BUSINESS LOGIC',
    description:
      'Focused services separate responsibilities and communicate through defined APIs and events.',
  },
  {
    name: 'Apache Kafka',
    tag: 'EVENT STREAM',
    description:
      'Event-driven communication lets services exchange events without tying every operation to a synchronous request.',
  },
  {
    name: 'PostgreSQL',
    tag: 'PERSISTENCE',
    description: 'Persistent relational storage for application and transaction data.',
  },
  {
    name: 'Caffeine',
    tag: 'CACHE',
    description:
      'An application cache for frequently accessed data, with deliberate expiry and invalidation.',
  },
  {
    name: 'Authentication',
    tag: 'SECURITY',
    description:
      'An illustrative access boundary. Jasypt and Argon2 are part of my security and encryption toolkit.',
  },
  {
    name: 'LLM Service',
    tag: 'AI INTEGRATION',
    description: 'LLM-assisted coding-question generation supports varied assessment content.',
  },
  {
    name: 'Monitoring',
    tag: 'OBSERVABILITY',
    description: 'Dashboards and event context help make application behavior understandable.',
  },
];
export const approach = [
  [
    'Understand',
    'Translate business needs into clear requirements and define what a useful outcome looks like.',
  ],
  ['Model', 'Identify entities, relationships, API contracts, events, and the flow of data.'],
  ['Design', 'Choose architecture, communication patterns, and persistence around the problem.'],
  ['Build', 'Implement maintainable backend services and thoughtful frontend components.'],
  ['Test', 'Validate functionality, reliability, and performance with appropriate tools.'],
  ['Optimize', 'Measure bottlenecks before changing how the system behaves.'],
];
export const skills = [
  ['Backend', 'Java 8+', 'Spring Boot', 'Spring WebFlux', 'Microservices'],
  [
    'Frontend',
    'React.js',
    'TypeScript',
    'JavaScript',
    'HTML / CSS',
    'Tailwind CSS',
    'Bootstrap',
    'Figma',
  ],
  ['Data', 'PostgreSQL', 'MySQL', 'SQL'],
  ['Events', 'Apache Kafka'],
  ['Performance', 'JMeter', 'k6', 'Caffeine'],
  ['Infrastructure', 'Docker', 'Podman'],
  ['Security', 'Jasypt', 'Argon2'],
  ['AI', 'LLM integration'],
];
export const notes = [
  [
    'Why event-driven architecture?',
    'A request does not always need to wait for every downstream action. Events can separate those responsibilities—but delivery guarantees and failure handling still need deliberate design.',
  ],
  [
    'Where does caching help?',
    'Start with a repeated read and a clear tolerance for stale data. A cache is useful when its expiry and invalidation rules are as intentional as its lookup.',
  ],
  [
    'Reactive vs. traditional APIs',
    'Non-blocking work is useful when waiting on I/O dominates. The choice should follow the workload, and a reactive chain needs care to avoid blocking calls.',
  ],
  [
    'Where should business logic live?',
    'Keep HTTP concerns at the controller boundary. Put workflow decisions in services so the same behavior can be reasoned about and tested independently.',
  ],
];
