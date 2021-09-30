export const levenstein = (source, target) => {
    let sourceTokens = source
    let targetTokens = target
    if (typeof source === "string") {
        // CER
        sourceTokens = source.match(/./g)
        targetTokens = target.match(/./g)
    } else if (Array.isArray(source)) {
        // WER
    } else {
        console.log("Not supported type")
        return
    }
    sourceTokens.unshift(0)
    targetTokens.unshift(0)

    if (source.length === 0 || target.length === 0) {
        return Math.max(source.length, target.length);
    }

    let [m, n] = [sourceTokens.length, targetTokens.length];
    let d = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    let history = Array(m + 1).fill(null).map(() => Array(n + 1).fill(null).map(_ => []));
    for (let i = 1; i <= m; i++) {
        d[i][0] = i
        history[i][0] = Array(i).fill(i).map((elem, idx) => [elem, idx, "ins"])
    }

    for (let j = 1; j <= n; j++) {
        d[0][j] = j
        history[0][j] = Array(j).fill(j).map((elem, idx) => [idx, elem, "ins"])
    }

    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= m; i++) {
            let substitutionCost = (sourceTokens[i] === targetTokens[j]) ? 0 : 1
            let values = [{v: d[i - 1][j] + 1, op: "del", his: history[i - 1][j]},
                {v: d[i][j - 1] + 1, op: "ins", his: history[i][j - 1]},
                {v: d[i - 1][j - 1] + substitutionCost, op: "sub", his: history[i - 1][j - 1]}
            ].sort((v1, v2) => (v1.v > v2.v ? 1 : -1))

            d[i][j] = values[0].v
            history[i][j] = [values[0].his]
            if (values[0].op !== "sub" || substitutionCost == 1) {
                history[i][j].push([i, j, values[0].op])
            }
            values = null;
        }
    }
    var result = history[m][n]
    while (result[0].length > 0 && typeof (result[0][0]) !== "number") {
        try{
            var remainders = result.splice(1)
            result = result[0].concat(remainders)
            if (result.length == 87) {
                debugger;
            }
        } catch (e) {
            debugger
        }

    }

    return {distance: d[m][n], editops: result, ratio: (d[m][n] / target.length)}
}
