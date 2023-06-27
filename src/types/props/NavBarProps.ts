import { valuesNavBar } from "../data/ValuesInput";

export default interface navBarProps {
  type: valuesNavBar,
  changeCurrentPane: (product: valuesNavBar) => void,
}