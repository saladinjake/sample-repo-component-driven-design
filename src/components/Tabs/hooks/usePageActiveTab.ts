import { useState, useEffect } from "react";

const usePageActiveTab = () => {
  const [history, setHistory] = useState({});

  useEffect(() => {
    const storedItem = sessionStorage.getItem("tab_history");

    if (storedItem) {
      setHistory(JSON.parse(storedItem));
    }
  }, []);

  useEffect(() => {
    if (Object.keys(history).length) {
      storePageActiveTab(JSON.stringify(history));
    }
  }, [history]);

  const getPageActiveTab = (url: string) => {
    const storedItem = sessionStorage.getItem("tab_history");

    if (storedItem) {
      return JSON.parse(storedItem)[url];
    }

    return null;
  };

  const hasPageActiveTab = (url: string) => {
    return !!getPageActiveTab(url);
  };

  const setPageActiveTab = (url: string, activeTab: string | number) => {
    setHistory((state) => ({ ...state, [url]: activeTab }));
  };

  const storePageActiveTab = (payload: string) => {
    sessionStorage.setItem("tab_history", payload);
  };

  return {
    hasPageActiveTab,
    getPageActiveTab,
    setPageActiveTab,
  };
};

export default usePageActiveTab;
