export type IDashboardCardProps = {
  title: string;
  value: any;
  color?: string;
  width?: string;
  height?: string;
};

export type ILinkCardProps = {
  title: string;
  description?: string;
  link: string;
  color?: string;
  width?: string;
  Icon?: any;
  disabled?: boolean;
};

export type ICheckboxCardProps = {
  title: string;
  description: string;
  color?: string;
  width?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: any) => void;
};

export type ProfileCardProps = {
  name: string;
  email: string;
  role: string;
  handleRoleDisplay: () => void;
  handleProfileDisplay: () => void;
  handleLogout: () => void;
};

export type CardProps = {
  width?: string;
  height?: string;
  children?: any;
};
