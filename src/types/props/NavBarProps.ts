import { valuesNavBar } from "../data/ValuesInput";

export default interface navBarProps {
  type: valuesNavBar,
  func: () => void,
  changeCurrentPane: (product: valuesNavBar) => void,
}