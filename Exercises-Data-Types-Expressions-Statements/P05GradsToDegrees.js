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

gradesToDegrees(-50);