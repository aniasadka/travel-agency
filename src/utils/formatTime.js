//export const formatTime = () => 'formatted time';
export const formatTime = (param) => {

  const seconds = Math.floor((parseInt(param)) % 60);
  const minutes = Math.floor(((parseInt(param)) / 60) % 60);
  const hours = Math.floor((parseInt(param)) / 3600);

  const time =
    hours.toString().padStart(2, '0') + ':' +
    minutes.toString().padStart(2, '0') + ':' +
    seconds.toString().padStart(2, '0');

  if (param === undefined || (typeof (param) != 'number') || param < 0) {
    return null;
  } else {
    return time;
  }

};

/*
function leftFillNum(num, targetLength) {
    return num.toString().padStart(targetLength, 0);
}
parseInt(param): param as number
*/
