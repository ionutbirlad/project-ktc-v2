import Button from "../Button/Button";

type ButtonGroupAlignments = "justify" | "start" | "end" | "center" | "stack";
type ButtonGroupProps = {
  alignment: ButtonGroupAlignments;
};

export default function ButtonGroup({ alignment }: ButtonGroupProps) {
  return (
    <div>
      <Button />
      <Button />
    </div>
  );
}
