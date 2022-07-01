function nearestValidPoint(x: number, y: number, points: number[][]): number {
    const pointsAndDistances: { point: number[]; distance: number }[] = [];
    points.forEach((point) => {
        let distance = Number.MAX_VALUE;

        if (point[0] == x) {
            distance = y - point[1];
            if (distance < 0) {
                distance = distance * -1;
            }
        }

        if (point[1] == y) {
            let tempDistance = x - point[0];
            if (tempDistance < 0) {
                tempDistance = tempDistance * -1;
            }

            if (tempDistance < distance) {
                distance = tempDistance;
            }
        }

        pointsAndDistances.push({ point, distance });
    });

    let shortestIndex = -1;
    let shortestDistance = Number.MAX_VALUE;

    pointsAndDistances.forEach((pointAndDistance, index) => {
        if (
            pointAndDistance.distance != -1 &&
            pointAndDistance.distance < shortestDistance
        ) {
            shortestDistance = pointAndDistance.distance;
            shortestIndex = index;
        }
    });

    return shortestIndex;
}
