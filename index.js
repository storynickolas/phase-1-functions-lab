// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
  let numBlock
  distance > 42 ? numBlock = distance - 42 : numBlock = 42 - distance
  return numBlock
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(block1, block2) {
  return Math.abs((block2 - block1) * 264)
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(destination, start);
  if(distance <= 400) {
    return 0;
  }
  else if(distance < 2000) {
    return (distance - 400) * 0.02;
  }
  else if(distance > 2000 && distance < 2500) {
    return 25;
  }
  else {
    return 'cannot travel that far';
  }
}
