// array of courses
// each course will have  sem info and course name
const allCourses = [
    { id: 1, name: "course-1", sem: "semester1" },
    { id: 2, name: "course-2", sem: "semester1" },
    { id: 3, name: "course-3", sem: "semester1" },
    { id: 4, name: "course-4", sem: "semester1" },
    { id: 5, name: "course-5", sem: "semester1" },
    { id: 6, name: "course-6", sem: "semester2" },
    { id: 7, name: "course-7", sem: "semester2" },
    { id: 8, name: "course-8", sem: "semester2" },
    { id: 9, name: "course-9", sem: "semester2" },
    { id: 10, name: "course-10", sem: "semester2" },
  ];
  
  // map of courses and prof names
  let courseIdVsProf = new Map();
  courseIdVsProf.set(1, "first prof");
  courseIdVsProf.set(2, "second prof");
  courseIdVsProf.set(3, "third prof");
  courseIdVsProf.set(4, "fourth prof");
  courseIdVsProf.set(5, "fifth prof");
  courseIdVsProf.set(6, "sixth prof");
  courseIdVsProf.set(7, "seventh prof");
  courseIdVsProf.set(8, "eighth prof");
  courseIdVsProf.set(9, "ninth prof");
  courseIdVsProf.set(10, "tenth prof");
  
  // assume single user  with id 1
  
  let users = [];
  
  // we will be having the map of userId + sem   vs list of courses Enrolled 
  let coursesEnrolledByStudentWithSem = new Map();
  coursesEnrolledByStudentWithSem.set(1, []);
  coursesEnrolledByStudentWithSem.set(2, []);
  coursesEnrolledByStudentWithSem.set(3, []);
  coursesEnrolledByStudentWithSem.set(4, []);
  coursesEnrolledByStudentWithSem.set(5, []);
  
  //   -----------------  functions --------------------------------
  export function getCourseNamesBySemester(semester) {
    let res = [];
    allCourses.forEach((course) => {
      if (course.sem === semester) {
        res.push(course);
      }
    });
    return Array.from(res);
  }
  
  export function getProfByCourseId(courseId) {
    return courseIdVsProf.get(courseId);
  }
  