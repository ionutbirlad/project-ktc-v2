import type { AvatarProps } from "./Avatar.types";

export default function Avatar({
  size = "medium",
  variant = "circle",
  className,
  ...props
}: AvatarProps) {
  return <div>AVATAR HERE</div>;
}
