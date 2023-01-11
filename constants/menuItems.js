//List of all Side Bar Icons

// import {
//   DashboardIcon,
//   VendingIcon,
//   LockerIcon,
//   //...
  // OthersIcon,
// } from "../public/assets/svgs/index";

//List of Menu show in sidebar & use in layout/AdminLayout/sidebar/SidebarNav.js

const menuItems = [
  {
    id: "1",
    title: "Dashboard",
    to: "/",
    // icon: DashboardIcon,
  },

  {
    id: "2",
    title: "Product",
    to: "/",
    // icon: OthersIcon,
    items: [
      {
        id: "2.1",
        title: "Product Listing",
        to: "/product-listing",
        // icon: OthersIcon,
      },
      {
        id: "2.2",
        title: "Inventory",
        to: "/inventory",
        // icon: OthersIcon,
      },
      {
        id: "2.3",
        title: "Send Inventory",
        to: "/send-inventory",
        // icon: OthersIcon,
      },
    ],
  },
  {
    id: "3",
    title: "Order",
    to: "/",
    // icon: OthersIcon,
    items: [
      {
        id: "3.1",
        title: "Order Listing",
        to: "/order-listing",
        // icon: OthersIcon,
      },
      {
        id: "3.2",
        title: "Shipment",
        to: "/shipment",
        // icon: OthersIcon,
      },
    ],
  },

  {
    id: "4",
    title: "Promotions",
    to: "/",
    // icon: OthersIcon,
    items: [
      {
        id: "4.1",
        title: "Campaigns",
        to: "/campaigns",
        // icon: OthersIcon,
      },
      {
        id: "4.2",
        title: "Bundles",
        to: "/bundles",
        // icon: OthersIcon,
      },
    ],
  },
  {
    id: "5",
    title: "Logistics",
    to: "/",
    // icon: OthersIcon,
    items: [
      {
        id: "5.1",
        title: "Vending Machines",
        to: "/vending-machine",
        // icon: VendingIcon,
      },
      {
        id: "5.2",
        title: "Lockers",
        to: "/locker",
        // icon: LockerIcon,
      },
    ],
  },
  {
    id: "6",
    title: "Warehouses",
    to: "/",
    // icon: OthersIcon,
    items: [
      {
        id: "6.1",
        title: "WH Listing",
        to: "/warehouse-listing",
        // icon: OthersIcon,
      },
      {
        id: "6.2",
        title: "WH Inventory",
        to: "/warehouse-inventory",
        // icon: OthersIcon,
      },
    ],
  },
  {
    id: "7",
    title: "Financial",
    to: "/",
    // icon: OthersIcon,
    items: [
      {
        id: "7.1",
        title: "My Account",
        to: "/my-account",
        // icon: OthersIcon,
      },
      {
        id: "7.2",
        title: "Transaction",
        to: "/transaction",
        // icon: OthersIcon,
      },
    ],
  },
 
];

export default menuItems;
