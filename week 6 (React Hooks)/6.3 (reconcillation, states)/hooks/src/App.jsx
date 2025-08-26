//----------------UseEffect Hook------------------//
/*
import { useEffect, useState } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(function () {
    setTimeout(() => {
      setBankData({ income: 1000 });
    }, );
  }, []);

  useEffect(function () {
    setTimeout(() => {
      setExchangeData({ returns: 200 });
    }, );
  }, []);

  const incomeTax = (bankData.income + exchangeData) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;
*/

//----------------UseMemo------------------//
/*!SECTION - import { useEffect, useMemo, useState } from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []); // useEffect will only be used when the component is mounted.

  const cryptoReturns = useMemo(
    function () {
      return exchange1Data.returns + exchange2Data.returns;
    },
    [exchange1Data, exchange2Data]
  ); //NOTE - useMemo will only recompute the memoized value when one of the dependencies has changed.

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;
*/

//SECTION - ----------------UseCallback------------------//
//TODO - Use Call Back code

//SECTION - ----------------UseRef------------------//

import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = "10"
    }, 5000);
  }, [])

  const incomeTax = 20000;

  return (
    <div>
        hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App;