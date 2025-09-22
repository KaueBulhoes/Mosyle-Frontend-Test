const deviceTypes = [
  {
    name: "iOS / iPadOS / watchOS",
    shortName: "iOS / iPadOS",
    icon: "📱",
    count: 2,
  },
  {
    name: "macOS",
    shortName: "macOS",
    icon: "💻",
    count: 148,
  },
  {
    name: "tvOS",
    shortName: "tvOS",
    icon: "📺",
    count: 0,
  },
  {
    name: "visionOS",
    shortName: "visionOS",
    icon: "🥽",
    count: 0,
  },
];

const dashboardData = {
  alerts: [
    {
      icon: "🔋",
      text: "Your Push Certificate is configured",
      count: null,
    },
    {
      icon: "🚫",
      text: "No connection",
      count: 9,
    },
    {
      icon: "🎗",
      text: "Apple ID not Logged",
      count: 7,
    },
    {
      icon: "⚠️",
      text: "OS update",
      count: 4,
    },
    {
      icon: "👤",
      text: "Enrollment Last 3 days",
      count: 3,
    },
    {
      icon: "📦",
      text: "App Catalog Server Offline",
      count: 1,
    },
    {
      icon: "✅",
      text: "MDM Approval required",
      count: 0,
    },
    {
      icon: "👥",
      text: "Group Admin without User Group to manage",
      count: 0,
    },
    {
      icon: "🔢",
      text: "Duplicate Serial Numbers",
      count: 0,
    },
    {
      icon: "📚",
      text: "Apps and Books licenses almost full",
      count: 0,
    },
    {
      icon: "💾",
      text: "Storage almost full",
      count: 0,
    },
    {
      icon: "🔧",
      text: "MDM profile removed",
      count: 0,
    },
  ],
  quickAccess: [
    {
      icon: "📲",
      text: "Install Apps",
    },
  ],
  tickets: [
    {
      status: "Closed",
      id: "#82513",
      description: "Test On Prem",
      date: "01/15/2023",
    },
    {
      status: "Closed",
      id: "#47510",
      description: "Paulo Testing on-premises",
      date: "12/05/2019",
    },
  ],
  security: {
    compliance: [
      {
        type: "macOS",
        percentage: 94,
        status: "green",
      },
      {
        type: "iOS",
        percentage: 50,
        status: "red",
      },
    ],
    infections: {
      findings: 0,
      devices: 0,
    },
  },
  subscription: {
    plan: "Mosyle Fuse",
    expirationDate: "12/31/2024",
    daysLeft: 286,
    licensesUsed: 150,
    licensesTotal: 150,
  },
};
