function palindrome(word) {
    let numberOfloop = word.length / 2;
    let isPalindrome = true;
    for (let i = 0; i < numberOfloop; i++) {

        if (word[0] != word[word.length -1]) {
            isPalindrome = false;
            break;
        }

        word = word.substring(1, word.length - 1);
    }
    
    console.log(isPalindrome);
}

palindrome('ab')