const months = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "Jun",
  7: "Jul",
  8: "Aug",
  9: "Sep",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

function publishedAtToDateObj(timestamp) {
  const year = parseInt(timestamp.slice(0, 4));
  const month = parseInt(timestamp.slice(5, 7));
  const day = parseInt(timestamp.slice(8, 10));

  return { year: year, month: month, day: day };
}

function publishedAtToMDY(timestamp) {
  const dateObj = publishedAtToDateObj(timestamp);
  const monthStr = months[dateObj.month];
  return `${monthStr} ${dateObj.day}, ${dateObj.year}`;
}

function publishedAtToHowLongSince(timestamp) {
  const dateObj = publishedAtToDateObj(timestamp);
  const date = new Date();
  const currentDate = {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    day: date.getUTCDay(),
  };
  console.log(currentDate);

  let howLong;
  if (currentDate.year > dateObj.year) {
    const yearDiff = currentDate.year - dateObj.year;
    howLong = yearDiff > 1 ? `${yearDiff} years ago` : "1 year ago";
  } else if (currentDate.month > dateObj.month) {
    const monthDiff = currentDate.month - dateObj.month;
    howLong = monthDiff > 1 ? `${monthDiff} months ago` : "1 month ago";
  } else if (currentDate.day > dateObj.month) {
    const dayDiff = currentDate.day - dateObj.day;
    howLong = dayDiff > 1 ? `${dayDiff} days ago` : "1 day ago";
  } else {
    howLong = "Less than a day ago";
  }
  return howLong;
}

publishedAtToHowLongSince("2020-12-31T09:12:39Z");

export { publishedAtToMDY, publishedAtToHowLongSince };
