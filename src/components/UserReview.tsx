/* eslint-disable @next/next/no-img-element */
import { type UserReview } from "@/lib/types";
import { Star, Check } from "lucide-react";

// reusable component for rendering user reviews, verified purchase prop is defaulted to true
export default function UserReview({
  children,
  imgSrc,
  name,
  verified = true,
}: UserReview) {
  return (
    <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
      <div className="flex gap-0.5 mb-2">
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
      </div>
      <div className="text-lg leading-8">
        <p>{children}</p>
      </div>
      <div className="flex gap-4 mt-2">
        <img
          src={imgSrc}
          alt="user"
          className="rounded-full h-12 w-12 object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          {verified && (
            <div className="flex gap-1.5 items-center text-zinc-600">
              <Check className="h-4 w-4 stroke-[3px] text-green-600" />
              <p className="text-sm">Verified purchase</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
