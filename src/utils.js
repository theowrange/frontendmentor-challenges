import format from 'date-fns/format';

const range = (start, end, step = 1) => {
  let output = [];

  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export { range };

/*
  This convenient helper function takes an
  ISO date string, and formats it like:

  March 14th, 2024 at 11:09 AM
*/
export function formatDate(date) {
  return format(new Date(date), "MMMM do 'at' hh:mm b");
}
