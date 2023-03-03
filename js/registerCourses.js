import { getCourseNamesBySemester, getProfByCourseId } from "../index.js";
let form = document.querySelector(".semester-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event.target[0]);
  let val = form.elements["semester"].value;

  let courses = getCourseNamesBySemester("semester" + val);

  let coursesList = document.querySelector(".courses-list");

  // add courses to the list
  coursesList.innerHTML = "";

  console.log(courses);
  for (let course of courses) {
    coursesList.innerHTML += `<li ><input name="test" value=${
      course.name
    } type="checkbox"/> <b>${course.name} </b>   by  <b> ${getProfByCourseId(
      course.id
    )}</b> </li>`;
  }
  if (coursesList.innerHTML.length > 0) {
    coursesList.innerHTML += "<button type=`submit`>Submit</button>";
  } else {
    coursesList.innerHTML = "No Courses Found";
  }
});

let coursesForm = document.querySelector(".courses-form");

console.log(coursesForm);

coursesForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let elems = event.target.elements;

  // select the courses which we are sleected and append them to the last
  let listOfSelectedCourses = document.querySelector(".courses-selected-list");
  listOfSelectedCourses.innerHTML = "";

  let cnt = 0;
  for (let elem of elems) {
    if (elem.checked) {
      listOfSelectedCourses.innerHTML += `<li> ${elem.value} </li>`;
      cnt++;
    }
    
    listOfSelectedCourses.innerHTML = "";
    return;
  }
});
