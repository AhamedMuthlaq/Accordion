import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const FeatureContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState(null);

  async function fetchFeatureFlags() {
    try {
      setLoading(true);
      const response = await featureFlagsDataServiceCall();

      if (response) {
        setEnabledFlags(response);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      throw new Error(err.message);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);
  return (
    <FeatureContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureContext.Provider>
  );
}
