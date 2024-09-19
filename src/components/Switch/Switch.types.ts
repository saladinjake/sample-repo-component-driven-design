export interface ISwitchProps {
  value: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  state?: "active" | "destructive";
  size?: "sm" | "md" | "lg";
  color?: string;
}
