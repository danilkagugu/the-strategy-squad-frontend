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
        // console.log(getString[key]);
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

// export function convertMonthsStrToNumber(str) {
//   const getNumber = {
//     January: "01",
//     February: "02",
//     March: "03",
//     April: "04",
//     May: "05",
//     June: "06",
//     July: "07",
//     August: "08",
//     September: "09",
//     October: "10",
//     November: "11",
//     December: "12",
//   };

//   if (typeof str === "string") {
//     return getNumber[str];
//   } else {
//     return;
//   }
// }
