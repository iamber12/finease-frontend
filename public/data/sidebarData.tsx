export const sidebarDataLender = [
  {
    id: 1,
    title: "Navigation",
    items: [
      {
        id: 1,
        name: "My Dashboard",
        icon: <i className="las la-home"></i>,
        submenus: [],
        url: "/main/dashboard",
      },
      {
        id: 2,
        name: "My Proposals",
        icon: <i className="las la-file-invoice"></i>,
        submenus: [
          { title: "Proposal Dashboard", url: "/proposals" },
          { title: "New Proposal", url: "/proposals/new" },
        ],
      },
      {
        id: 3,
        name: "Transactions",
        icon: <i className="las la-exchange-alt"></i>,
        submenus: [],
      },
      {
        id: 7,
        name: "Messaging",
        icon: <i className="las la-file-invoice"></i>,
        submenus: [{ title: "Chats", url: "/messaging/chats" }],
      },
      {
        id: 9,
        name: "Reports",
        icon: <i className="las la-chart-pie"></i>,
        submenus: [],
      },
      {
        id: 10,
        name: "Profile",
        icon: <i className="las la-user-circle"></i>,
        submenus: [],
      },
      {
        id: 12,
        name: "Support",
        icon: <i className="las la-handshake"></i>,
        submenus: [
          { title: "Help Center", url: "/support/help-center" },
          { title: "Privacy Policy", url: "/support/privacy-policy" },
          { title: "Contact Us", url: "/support/contact-us" },
        ],
      },
    ],
  },
];

export const sidebarDataBorrower = [
  {
    id: 1,
    title: "Navigation",
    items: [
      {
        id: 1,
        name: "My Dashboard",
        icon: <i className="las la-home"></i>,
        submenus: [],
        url: "/main/dashboard",
      },
      {
        id: 2,
        name: "My Requests",
        icon: <i className="las la-file-invoice"></i>,
        submenus: [
          { title: "Request Dashboard", url: "/main/requests" },
          { title: "New Request", url: "/main/request/new" },
        ],
      },
      {
        id: 3,
        name: "Transactions",
        icon: <i className="las la-exchange-alt"></i>,
        submenus: [],
      },
      {
        id: 3,
        name: "Loan Agreements",
        icon: <i className="las la-file"></i>,
        submenus: [],
        url: "/main/agreements",
      },
      {
        id: 7,
        name: "Messaging",
        icon: <i className="las la-comments"></i>,
        submenus: [{ title: "Chats", url: "/messaging/chats" }],
      },
      {
        id: 9,
        name: "Reports",
        icon: <i className="las la-chart-pie"></i>,
        submenus: [],
      },
      {
        id: 10,
        name: "Profile",
        icon: <i className="las la-user-circle"></i>,
        submenus: [],
      },
      {
        id: 12,
        name: "Support",
        icon: <i className="las la-handshake"></i>,
        submenus: [
          { title: "Help Center", url: "/support/help-center" },
          { title: "Privacy Policy", url: "/support/privacy-policy" },
          { title: "Contact Us", url: "/support/contact-us" },
        ],
      },
    ],
  },
];
