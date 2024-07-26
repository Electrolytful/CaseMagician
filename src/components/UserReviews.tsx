/* eslint-disable @next/next/no-img-element */
import { Star } from "lucide-react";
import { type UserReviews } from "@/lib/types";

// component that renders a neat user reviews section, including pictures of some users and the amount of positive reviews and avg rating
export default function UserReviews({
  userImages,
  userReviews,
  stars,
}: UserReviews) {
  // makes sure that whatever value is provided will always be 1 <= value >= 5
  let starsToBeRendered: number;

  if (stars <= 1) {
    starsToBeRendered = 1;
  } else if (stars >= 5) {
    starsToBeRendered = 5;
  } else {
    starsToBeRendered = stars;
  }

  return (
    <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
      <div className="flex -space-x-4">
        {userImages.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="user image"
            className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
          />
        ))}
      </div>

      <div className="flex flex-col justify-between items-center sm:items-start">
        <div className="flex gap-0.5">
          {/* rendering the number of stars by creating an array with the amount to be rendered and mapping through it */}
          {[...Array(starsToBeRendered)].map((e, index) => (
            <Star
              key={index}
              className="h-4 w-4 text-green-600 fill-green-600"
            />
          ))}
        </div>

        <p>
          <span className="font-semibold">{userReviews}</span> Positive Reviews
        </p>
      </div>
    </div>
  );
}
