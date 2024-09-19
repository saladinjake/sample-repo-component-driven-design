export interface AvatarProps extends IStyledAvatarProps {
  /**
   * The image source of the avatar if type is image
   */
  src?: any;
  /**
   * The name  of the avatar,
   */
  name?: string;

  text?: string;

  type: "image" | "text";
}

export interface IStyledAvatarProps {
  /**
   * Type shape of the avatar. Default is square
   */
  shape?: Shape;
  /**
   * Describes how big the avatar is
   */
  size?: Size;
  backgroundColor?: string;
  color?: string;
}

export type Size = "sm" | "md" | "lg";
export type Shape = "square" | "rounded";
