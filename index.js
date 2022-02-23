function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;
}

function distanceTravelledInFeet(pickupLocation, dropoffLocation) {
    return Math.abs(pickupLocation - dropoffLocation) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance > 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;        
    } else if (distance > 400) {
        return (distance - 400) * 0.02;
    } else {
        return 0;
    }
}