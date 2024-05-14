import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
// import { useState } from "react";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses; // liked courses ki help se hme track h ki kon konse course liked h or kon kon se nhi.
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    // hm kasie pta lga skte h ki voh clicked ya like h ya ni to hme ise store krna pdega
    // essa state variable h jisme hmne sare liked courses store kr rkhe h
    if (likedCourses.includes(course.id)) {
      // agr usme course ki id pde h toh course like hua wa h
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      // Phle wala course liked nhi h
      // Nhi h to hme insert krna h ye course liked courses me
      if (likedCourses.length === 0) {
        // agr lenght khali h
        setLikedCourses([course.id]);
      } else {
        // non-empty phle se
        setLikedCourses((prev) => [...prev, course.id]); // prev state me prev state +courseid ko insert kra.
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-ms overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} />

        <div className=" w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px] grid place-items-center">
          <button onClick={clickHandler}>
            {
              /* {<FcLike fontSize="1.75rem" />}
               */
              likedCourses.includes(course.id) ? (
                <FcLike fontSize="1.75rem" />
              ) : (
                <FcLikePlaceholder fontSize="1.75rem" />
              )
            }
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg  leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
