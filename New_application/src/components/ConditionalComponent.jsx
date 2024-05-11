import Welcome from "./welcome";
import Code from "./code";
export default function ConditionalComponent() {
  let message;

  const display = true;
  return display ? <Welcome /> : <Code />;
}
