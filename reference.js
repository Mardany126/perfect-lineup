const grades = [{
    studentId: 2,
    grade: 80,
    assignmentId: 289,
  },
  {
    studentId: 3,
    grade: 40,
    assignmentId: 289,
  },
  {
    studentId: 4,
    grade: 99,
    assignmentId: 289,
  },
  {
    studentId: 2,
    grade: 85,
    assignmentId: 289,
  },
  ]
  // Create a function that takes in a list of grades and returns true if there are no duplicate studentIds
  // and false if there are duplicates
  const verifyStudentId = (grades) => {
    // create a list of only our studentIds
    let studentIds = grades.map(grade => grade.studentId)
    // Filter out all the duplicates and get a list of unique Ids
    let uniqueIds = []
    studentIds.forEach(studentId => {
      if (!uniqueIds.includes(studentId)) {
        uniqueIds.push(studentId)
      }
    })