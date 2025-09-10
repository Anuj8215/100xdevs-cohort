//!SECTION : We Did Atoms Only
/*
import { useRecoilValue } from "recoil";
import { networkAtom } from "./components/atoms";
import { RecoilRoot } from "recoil";
import { jobsAtom } from "./components/atoms";
import { messagesAtom } from "./components/atoms";
import { notificationsAtom } from "./components/atoms";


function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobsAtom);
  const messagesAtomCount = useRecoilValue(messagesAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);

  return (
    <>
      <button> Home( {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}) </button>
      <button> My Network( {networkNotificationCount}) </button>
      <button>Jobs({jobAtomCount})</button>
      <button>Messages({messagesAtomCount})</button>
      <button> Notifications( {notificationsAtomCount}) </button>
      <button> Me </button>
    </>
  );
}

export default App; */

//!SECTION : SELECTORS
/*
import { useRecoilValue } from "recoil";
import { RecoilRoot } from "recoil";
import { networkAtom, jobsAtom, messagesAtom, notificationsAtom, totalNotificationsSelector } from "./components/atoms";


function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobsAtom);
  const messagesAtomCount = useRecoilValue(messagesAtom);
  const notificationsAtomCount = useRecoilValue(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  return (
    <>
      <button> Home( {networkNotificationCount >= 100 ? "99+" : networkNotificationCount}) </button>
      <button> My Network( {networkNotificationCount}) </button>
      <button>Jobs({jobAtomCount})</button>
      <button>Messages({messagesAtomCount})</button>
      <button> Notifications( {notificationsAtomCount}) </button>
      <button> Me ({totalNotifications})</button>
      
    </>
  );
}

export default App;
*/
//!SECTION - ASYNCHRONOUS DATA QUERIES

import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import {notifications, totalNotificationSelector } from "./components/atoms";
import { useEffect } from "react";
import axios from "axios";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications").then((res) => {
      setNetworkCount(res.data);
    });
  }, [setNetworkCount]);

  return (
    <>
      <button>Home</button>

      <button>
        My network (
        {networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
