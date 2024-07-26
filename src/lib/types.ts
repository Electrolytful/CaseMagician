import { HTMLAttributes } from "react";

// HTMLAttributes extension allowing component to be passed div element functions
export interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export interface UserReview {
  children: React.ReactNode;
  imgSrc: string;
  name: string;
  verified?: boolean;
}

export interface UserReviews {
  userImages: string[];
  userReviews: number;
  stars: number;
}

export interface CheckList {
  checkArray: string[];
}
