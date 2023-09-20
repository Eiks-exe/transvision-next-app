
const items = [
    {
      type: "link",
      label: "Dashboard",
      //icon: MdOutlineSpaceDashboard,
      path: "/pages/Dashboard",
    },
    {
      type: "link",
      label: "Live",
      // icon: MdCalendarToday,
      path: "/pages/Dashboard/Live",
    },
    {
      type: "link",
      label: "Contacts",
      // icon: MdOutlineSupervisorAccount,
      path: "/",
    },
  
    {
      type: "header",
      label: "Account",
    },
  
    {
      type: "link",
      label: "Notifications",
      // icon: MdOutlineNotificationsActive,
      path: "/",
      notifications: 24,
    },
    {
      type: "link",
      label: "Chat",
      // icon: MdOutlineChatBubbleOutline,
      path: "/",
      messages: 8,
    },
    {
      type: "link",
      label: "Settings",
      // icon: MdOutlineSettingsInputComposite,
      path: "/",
    },
  ];

  export default  items