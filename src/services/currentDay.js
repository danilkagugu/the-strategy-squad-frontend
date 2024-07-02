export function currentDay() {
  let data = new Date();
  let year = data.getFullYear();
  let month = String(data.getMonth() + 1).padStart(2, "0");
  let day = String(data.getDate()).padStart(2, "0");
  let currentDay = `${year}-${month}-${day}`;
  return currentDay;
}

export function currentTime() {
  let data = new Date();
  let hours = String(data.getHours()).padStart(2, "0");
  let minutes = String(data.getMinutes()).padStart(2, "0");
  let currentTime = `${hours}:${minutes}`;
  return currentTime;
}

export function numberOfDay(str) {
  const array = str.split("");
  if (array[0] === "0") {
    return array[1];
  }
  return str;
}

export function convertMonthsNumberToStr(num) {
  const getString = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  const keys = Object.keys(getString);

  if (typeof num === "number") {
    for (const key of keys) {
      if (key === String(num).padStart(2, "0")) {
        return getString[key];
      }
    }
  } else if (typeof num === "string") {
    for (const key of keys) {
      if (key === num.padStart(2, "0")) {
        return getString[key];
      }
    }
  } else {
    return;
  }
}

export function convertTimeToAMPM(str) {
  const array = str.split(":");

  if (Number(array[0]) === 0) {
    const newTime = `${String(Number(array[0]) + 12).padStart(2, "0")}:${
      array[1]
    } AM`;
    return newTime;
  }

  if (Number(array[0]) < 12) {
    const newTime = `${array[0]}:${array[1]} AM`;
    return newTime;
  }

  if (Number(array[0]) === 12) {
    const newTime = `${String(array[0]).padStart(2, "0")}:${array[1]} PM`;
    return newTime;
  }

  if (Number(array[0]) > 12) {
    const newTime = `${String(array[0] - 12).padStart(2, "0")}:${array[1]} PM`;
    return newTime;
  }
}

export function convertTime(str) {
  const array = str.split(" ");
  if (array[1] === "AM") {
    const arrTime = array[0].split(":");

    if (Number(arrTime[0]) === 12) {
      const newTime = `${String(Number(arrTime[0]) - 12).padStart(2, "0")}:${
        arrTime[1]
      }`;
      return newTime;
    }

    if (Number(arrTime[0]) < 12) {
      return array[0];
    }
    return;
  }

  if (array[1] === "PM") {
    const arrTime = array[0].split(":");

    if (Number(arrTime[0]) === 12) {
      return `${String(arrTime[0]).padStart(2, "0")}:${arrTime[1]}`;
    }

    if (Number(arrTime[0]) < 12) {
      return `${String(Number(arrTime[0]) + 12).padStart(2, "0")}:${
        arrTime[1]
      }`;
    }
  }
}
