function maxArea(
    h: number,
    w: number,
    horizontalCuts: number[],
    verticalCuts: number[]
): bigint {
    horizontalCuts.push(h);
    verticalCuts.push(w);

    horizontalCuts = horizontalCuts.sort((a, b) => a - b);
    verticalCuts = verticalCuts.sort((a, b) => a - b);

    let width = 0n;
    let height = 0n;

    for (let i = 0; i < horizontalCuts.length; i++) {
        let tempWidth = BigInt(
            horizontalCuts[i] - (horizontalCuts?.[i - 1] ?? 0)
        );
        width = width < tempWidth ? tempWidth : width;
    }

    for (let i = 0; i < verticalCuts.length; i++) {
        let tempHeight: bigint = BigInt(
            verticalCuts[i] - (verticalCuts?.[i - 1] ?? 0)
        );
        height = height < tempHeight ? tempHeight : height;
    }

    return (height * width) % 1000000007n;
}
