// - named export
export const range = (start, end, step = 1) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  let output = [];
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

