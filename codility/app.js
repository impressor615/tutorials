const INPUT = ["#FFFF00", "#FF0"];


const solution = () => {
  let result = '';
  const hexColor = '#FFFF00';
  if (hexColor.length === 4) {
    return hexColor;
  } else {
    result += `${hexColor.slice(1, 3)[0]}${hexColor.slice(3, 5)[0]}${hexColor.slice(5)[0]}`
  }
  console.log(result);
};

solution();
