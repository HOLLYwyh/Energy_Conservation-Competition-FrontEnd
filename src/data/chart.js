let tempData = [1000, 900, 400, 500, 700, 650, 820]
let tempData1 = [789.7, 311.6, 418.5, 551.7, 1532.7, 1354.9, 1260]
let tempData2 = [631.9, 724.6, 1130.2, 586.8, 1052.3, 1225.6, 1120]
let numbers = [59, 271]

function setData (index, value) {
  tempData[index] = value
}

function getData (index) {
  return tempData[index]
}

function setData1 (index, value) {
  tempData1[index] = value
}

function getData1 (index) {
  return tempData1[index]
}

function setData2 (index, value) {
  tempData2[index] = value
}

function getData2 (index) {
  return tempData2[index]
}

function setNumber (index, value) {
  numbers[index] = value
}

function getNumber (index) {
  return numbers[index]
}

export {
  setData,
  getData,
  setData1,
  getData1,
  getData2,
  setData2,
  setNumber,
  getNumber
}
