// jo Cards h voh sare cards ko show krra h or jo Card h voh ek card ko dikhanege
import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {
  let courses = props.courses;
  let category=props.category;
  const[likedCourses,setLikedCourses]=useState([]);// starting me koi bhi course liked nhi h 


  // aab hare pas hr type ka data h buisennss ,design ,development
  //hme in sb data ke liye card banane h joki hm map function ke through se banane ge
  //   jo hmara  api h usme alg alg araay me card ka data pda h lekin hmne ek hi array me sbhi ka data chahye like buisenss,design, devevlopemnt

  // We can only apply map function to the array.
  function getCourses() {
    // Hm voi card render krna  chahte h joki category based ho 
    if(category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else{
      // hm specific array of courses set krenge

      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {/*Hr ek data ko map kro or us data ke liye card bana diye   */}
{/* get courses() ek single array ke aandr sb data mil jaega or uske andr hr ek course ke liye Card Create krna h */}
      
      
      {
        getCourses().map((course) => {
        return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
      })
      }
    </div>
  );
};

export default Cards;
