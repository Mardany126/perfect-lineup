// salaryTotal = lineup.map()
//     (lineup) => lineup.salary.reduce
//     if salaryTotal > 45000 {

//     } return false

// const playerAmount = (lineup) => {

//     let teamIds = lineup.map(teamId => teamId.teamIds)

//     let uniqueIds = []
//     teamIds.forEach(teamId => {
//         if (!uniqueIds.includes(teamId)) {
//             uniqueIds.push(studentId)
//         }
//     })
// }

const validateLineup = (lineup) => {
  let salarySum = 0

  for (let i = 0; i < lineup.length; i++) {
    let player = lineup[i]
    salarySum += player.salary
  }
  if (salarySum > 45000) {
    return false
  }

  //   console.log(salarySum)
}

module.exports = validateLineup
