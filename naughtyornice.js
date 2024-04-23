function naughtyOrNice(data) {
  // Initiate counters for naughty and nice occurences
      let naughtyCount = 0;
      let niceCount = 0;

  // Loop through each month
  for (const month in data) {
  // Loop through eaach day in the month
  for (const day in data[month]) {
      // Check if the person was naughty or nice
      if (data[month][day] === 'Naughty') {
      // Increment the naughtyNUmber
          naughtyCount++;
      } else if (data[month][day] === 'Nice') {
      // Increment the niceNumber
          niceCount++;
      }
    }
  }

  // Determine whether person is generally naughty or nice
  if (naughtyCount > niceCount) {
      return 'Naughty!';
  } else if (niceCount > naughtyCount) {
      return 'Nice!';
  } else if (naughtyCount === niceCount) {
      return 'Nice!';
  }
  }

  // Example of year info
  const yearInfo = {
  January: {
      '1': 'Naughty', '2': 'Naughty', '31': 'Nice'
  },
  February: {
      '1': 'Nice', '2': 'Naughty', '28': 'Nice'
  },
  December: {
      '1': 'Nice', '2': 'Nice', '31': 'Naughty'
  }
  };

console.log(naughtyOrNice(yearInfo));