"use client";
import { Provider as JotaiProvider, getDefaultStore } from "jotai";
import { Provider } from "react-redux";
import { store } from "./index";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const jotaiStore = getDefaultStore();
  return (
    <JotaiProvider store={jotaiStore}>
      <Provider store={store}>{children}</Provider>
    </JotaiProvider>
  );
};

export default ReduxProvider;
