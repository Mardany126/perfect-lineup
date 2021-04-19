const validateLineup = (lineup) => {
  let salarySum = 0

  for (let i = 0; i < lineup.length; i++) {
    let player = lineup[i]
    salarySum += player.salary
  }
  if (salarySum > 45000) {
    return false
  }

  let allPositions = lineup.map((player) => {
    return player.position
  })
  const countItem = (items, searchTerm) => {
    let count = 0

    for (let i = 0; i < items.length; i++) {
      if (items[i] === searchTerm) {
        count++
      }
    }
    return count
  }
  let countP = countItem(allPositions, "P")
  let countC = countItem(allPositions, "C")
  let count1B = countItem(allPositions, "1B")
  let count2B = countItem(allPositions, "2B")
  let count3B = countItem(allPositions, "3B")
  let countSS = countItem(allPositions, "SS")
  let countOF = countItem(allPositions, "OF")


  if (
    countP !== 1 ||
    countC !== 1 ||
    count1B !== 1 ||
    count2B !== 1 ||
    count3B !== 1 ||
    countSS !== 1 ||
    countOF !== 3
  ) {
    return false
  }

  let allTeamIds = lineup.map((player) => {
    return player.teamId
  })
  for (let i = 0; i < allTeamIds.length; i++) {
    let idToSearchFor = allTeamIds[i]
    let countOfId = countItem(allTeamIds, idToSearchFor)
    if (countOfId > 2) {
      return false
    }
  }
  let allGameIds = lineup.map((player) => {
    return player.gameId
  })
  for (let i = 0; i < allGameIds.length; i++) {
    let idToSearchFor = allGameIds[i]
    let countOfId = countItem(allGameIds, idToSearchFor)
    if (countOfId > 3) {
      return false
    }
  }
  return true
  //   console.log(salarySum)
}

module.exports = validateLineup
