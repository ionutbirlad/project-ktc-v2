import Button from "../Button/Button";

import styles from "./ButtonGroup.module.scss";

type ButtonGroupAlignments = "justify" | "start" | "end" | "center" | "stack";
type ButtonGroupProps = {
  alignment: ButtonGroupAlignments;
};

export default function ButtonGroup({ alignment }: ButtonGroupProps) {
  return (
    <div className={`${styles["button-group"]} ${styles[`button-group--align${alignment}`]}`}>
      <Button>asdasd</Button>
      <Button>asdasd</Button>
    </div>
  );
}
