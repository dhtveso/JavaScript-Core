function makeTemplate(arr) {
    let xmlOpenTag = '<?xml version="1.0" encoding="UTF-8"?>';
    let quizOpenTag = '<quiz>';
    let quizCloseTag = '</quiz>'
    
    console.log(xmlOpenTag);
    console.log(quizOpenTag);
    for (let i = 1; i <= arr.length; i++) {
        if (i % 2 == 0) {
            qAndA(arr[i -1], false)
        } else{
            qAndA(arr[i -1], true)
        }
    }

    console.log(quizCloseTag);
    
    function qAndA(sentence, iSQuestion) {
        if (iSQuestion === true) {
            console.log('   <question>');
            console.log(`       ${sentence}`);
            console.log('   </question>');
        } else{
            console.log('   <answer>');
            console.log(`       ${sentence}`);
            console.log('   </answer>');
        }
    }
}