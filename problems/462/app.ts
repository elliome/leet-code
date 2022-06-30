function minMoves2(nums: number[]): number {
    const sortedList = nums.sort((a, b) => a - b);
    const median = sortedList[Math.floor(sortedList.length / 2)];

    let moves = 0;
    nums.forEach((num) => {
        let distance = num - median;
        if (distance < 0) {
            distance *= -1;
        }
        moves += distance;
    });

    return moves;
}
