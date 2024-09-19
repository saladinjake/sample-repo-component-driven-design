export interface IStatusProps {
  text: string;
  active?: "active" | boolean;
  inactive?: "inactive" | boolean;
  spaceBetweenTextAndIcon?: string;
  status?: "active" | "inactive" | "pending";
}
