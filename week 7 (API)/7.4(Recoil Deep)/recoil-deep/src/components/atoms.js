//!SECTION - ATOMS BELOW
/*
import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 102,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
}); */

//!SECTION - SELECTORS BELOW
/*
export const totalNotificationsSelector = selector({
    key:"totalNotificationsSelector",
    get:({get}) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const messagesAtomCount = get(messagesAtom);
        const notificationsAtomCount = get(notificationsAtom);

        return networkAtomCount + jobsAtomCount + messagesAtomCount + notificationsAtomCount;
    }
}) */

//!SECTION -  ASYNCHHROUNS DATA QUERIES

import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
  key: "notifications",
  default: selector({
    get: async () => {
      const response = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return response.data;
    },
  }),
});

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get:({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.networks + allNotifications.jobs + allNotifications.messaging + allNotifications.notifications;
    }
})