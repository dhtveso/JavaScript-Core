function gradesToDegrees(grade) {
    const gonMax = 400;
    const gonPercent = 0.4;
    const degreeMax = 360;
    const degreePercent = 0.36;

    if (grade < 0) {
        grade += gonMax;
    }
    let fromGonToDegree = grade / gonPercent * degreePercent;
    let result = fromGonToDegree % degreeMax;

    console.log(result);
}

function gradsToDegr(grad) {
    let diffDeg = 400 / 360;
    let convertGradToDeg = Number(grad) / diffDeg;
    convertGradToDeg = convertGradToDeg % 360;

    if (convertGradToDeg < 0) {
        convertGradToDeg += 360;
    }
    console.log(convertGradToDeg)
}

gradesToDegrees(850);