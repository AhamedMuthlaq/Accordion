import { useContext } from "react";
import { FeatureContext } from "./context";
import ThemeToggle from "../ThemeToggle";
import TicTacToe from "../tic-tac-toe";
import LoadMore from "../LoadMore";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureContext);

  const componentsToRender = [
    {
      key: "showThemeSwitch",
      component: <ThemeToggle />,
    },
    {
      key: "showTicTac",
      component: <TicTacToe />,
    },
    {
      key: "showLoadMore",
      component: <LoadMore />,
    },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {componentsToRender.map((component) =>
        enabledFlags[component.key] ? component.component : null
      )}
    </div>
  );
}
