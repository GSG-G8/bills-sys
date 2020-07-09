export const sortValues = (arr) => {
  const values = [...arr];
  values.sort((a, b) => a - b);
  return values;
};

// this will check if a value lies within the highest  10% of the dataset
// values must be sorted ascendingly
export const checkHighestTen = (values, value) =>
  value > values[0.9 * values.length - 1];

// this will trim the outliers values from both the start and the end of the data array
const trimmer = (bound, data) => {
  const values = [...data];
  for (let i = 0; i < Math.floor(bound); i += 1) {
    values.pop();
    values.shift();
  }
  return values;
};

/*
this will find the outliers values in the dataset and decide the count to trim from both sides
and find the trimmed mean.
NOTE : values must be sorted
*/
export const trimmedMean = (values) => {
  const valuesCount = values.length;
  // this is the trimming proportion, it mean that we want to trim 10% of the dataset
  const proportionTrimmed = 0.1;
  // decides how many values should we trim
  const trimCount = valuesCount * proportionTrimmed;
  // decides how many values will remain after trimming
  const remainingValuesCount = valuesCount - 2 * trimCount;
  const trimmedValues = trimmer(trimCount, values);
  // if the number to trim is not an integer this will handle the issue
  if (!Number.isInteger(trimCount)) {
    trimmedValues[0] *= Math.abs(1 - trimCount);
    trimmedValues[trimmedValues.length - 1] *= Math.abs(1 - trimCount);
  }
  const valuesSum = trimmedValues.reduce((a, b) => a + b);
  return Math.round(valuesSum / remainingValuesCount);
};

// this will find the frequency of each group "how many elements lies within a specific group"
// we need to pass the whole dataset of values and the interval of the group
const findFrequency = (data, interval) =>
  data.filter((e) => e >= interval[0] && e <= interval[interval.length - 1])
    .length;

// this will divide values into groups and find both center and frequency for each group
// NOTE : values must be sorted
export const frequencyGroupsGenerator = (values) => {
  // interval length must be an integer
  const intervalLength = Math.ceil((values[values.length - 1] - values[0]) / 5);
  const groups = [];
  let lowerBound = values[0];
  for (let i = 0; i < 5; i += 1) {
    const upperBound = lowerBound + intervalLength;
    const interval = [lowerBound, upperBound];
    const groupFrequency = findFrequency(values, interval);
    const midInterval = (lowerBound + upperBound) / 2;
    groups.push({
      frequency: groupFrequency,
      center: midInterval,
      interval,
    });
    lowerBound = upperBound + 1;
  }
  return groups;
};

// for the chart component we have five groups, each has a column
// columns will be colored with gradient from green to red
// where the highest frequency will have the green color
export const generateColorsSet = (frequencies) => {
  const colorsSet = [
    '#66caaf',
    '#4dc1a1',
    '#33b994',
    '#1ab086',
    '#00a779',
    '#ff0000',
    '#e60000',
    '#cc0000',
    '#b30000',
    '#990000',
  ];
  const colors = [];
  const j = frequencies.indexOf(Math.max(...frequencies));
  for (let i = 4 - j; i < 4 - j + 5; i += 1) colors.push(colorsSet[i]);
  return colors;
};
