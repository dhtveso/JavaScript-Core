function constructionCrew(input) {
    if (input.handsShaking) {
        input.bloodAlcoholLevel += input.weight * input.experience * 0.1;
        input.handsShaking = false;
    }

    return input;
}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true }
  ))