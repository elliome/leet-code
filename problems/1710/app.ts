function maximumUnits(boxTypes: number[][], truckSize: number): number {
    let remainingBoxes = truckSize;
    let units = 0;
    const sortedBoxTypes = boxTypes.sort((a, b) => a[1] - b[1]);

    while (remainingBoxes > 0) {
        const nextBoxType = sortedBoxTypes.pop();
        if (!nextBoxType) {
            break;
        }
        if (nextBoxType[0] < remainingBoxes) {
            units += nextBoxType[1] * nextBoxType[0];
            remainingBoxes -= nextBoxType[0];
        } else {
            units += nextBoxType[1] * remainingBoxes;
            remainingBoxes = 0;
        }
    }

    return units;
}
