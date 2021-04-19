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

  //   if (lineup.length !== 9) {
  //     return false
  //   }
  let allPositions = lineup.map((player) => {
    return player.position
  })
  const countPosition = (positions, searchPos) => {
    let count = 0
    
    for (let i = 0; i < positions.length; i++) {
      if (positions[i] === searchPos) {
        count++
      }
    }
    return count
  }
  let countP = countPosition(allPositions, "P")
  let countC = countPosition(allPositions, "C")
  let count1B = countPosition(allPositions, "1B")
  let count2B = countPosition(allPositions, "2B")
  let count3B = countPosition(allPositions, "3B")
  let countSS = countPosition(allPositions, "SS")
  let countOF = countPosition(allPositions, "OF")

// = is
// == is equal
// === is exactly equal

  if(countP !== 1 || countC !== 1 || count1B !== 1 || count2B !== 1 || count3B !== 1 || countSS !== 1 || countOF !== 3){
return false
  }

  //   console.log(salarySum)
}

module.exports = validateLineup
