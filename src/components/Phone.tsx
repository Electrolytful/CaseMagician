/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

// custom type to apply to component
// HTMLAttributes extension allowing component to be passed div element functions
interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

export default function Phone({
  imgSrc,
  className,
  dark = false,
  ...props
}: PhoneProps) {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          // if dark mode is enabled for component use the dark edges template, else use white edges
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone template"
        className="pointer-events-none z-50 select-none"
      />

      <div className="absolute -z-10 inset-0">
        <img
          src={imgSrc}
          alt="Custom image of phone case"
          className="object-cover"
        />
      </div>
    </div>
  );
}
