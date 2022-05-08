export const normalizeNumber = (number) => {
  if (number < 1000) {
    return number;
  }
  const numberArr = Array.from(number.toString());

  if (number > 1000 && number < 10000) {
    return numberArr[0] + "." + numberArr[1] + "k";
  }

  if (number > 10000 && number < 100000) {
    return numberArr[0] + numberArr[1] + "." + numberArr[2] + "k";
  }

  if (number > 100000 && number < 1000000) {
    return (
      numberArr[0] + numberArr[1] + numberArr[2] + "." + numberArr[3] + "k"
    );
  }

  if (number > 1000000 && number < 10000000) {
    return numberArr[0] + "." + numberArr[1] + "M";
  }
};

const normalizeMessage = (message) => {};
