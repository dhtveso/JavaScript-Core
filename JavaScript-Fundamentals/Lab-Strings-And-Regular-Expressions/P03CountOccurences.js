function countOccurence(target, inputString) {
    let count = 0;
    let index = 0;

    while (true) {
        let index = inputString.indexOf(target);
        if (index < 0) {
            break;
        }
        count++;

        inputString = inputString.substring(index + 1);
    }

    console.log(count);
}

countOccurence('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')