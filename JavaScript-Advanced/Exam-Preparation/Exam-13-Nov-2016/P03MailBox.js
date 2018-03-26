class MailBox {
    constructor() {
        this.messages = [];
    }
    
    get messageCount(){
        return this.messages.length
    }

    addMessage(subject, text) {
        this.messages.push({subject, text})
        return this;
    }

    deleteAllMessages() {
        this.messages = [];
    }

    findBySubject(substr) {
        let arr = []
        for (const obj of this.messages) {
            let regex = new RegExp(`${substr}`, 'gi');
            if (regex.test(obj.subject)) {
                arr.push({'subject': obj.subject, 'text': obj.text})
            }
        }
        return arr;
    }

    toString() {
        let result = '';

        if (this.messages.length === 0) {
            result = `* (empty mailbox)`
        } else {
            for (let obj of this.messages) {
                result += `* [${obj.subject}] ${obj.text}\n`
            }
        }

        return result
    }
}

// let mb = new MailBox();
// console.log("Msg count: " + mb.messageCount);
// console.log('Messages:\n' + mb);
// mb.addMessage("meeting", "Let's meet at 17/11");
// mb.addMessage("beer", "Wanna drink beer tomorrow?");
// mb.addMessage("question", "How to solve this problem?");
// mb.addMessage("Sofia next week", "I am in Sofia next week.");
// console.log("Msg count: " + mb.messageCount);
// console.log('Messages:\n' + mb);
// console.log("Messages holding 'rakiya': " +
//     JSON.stringify(mb.findBySubject('rakiya')));
// console.log("Messages holding 'ee': " +
//     JSON.stringify(mb.findBySubject('ee')));

// mb.deleteAllMessages();
// console.log("Msg count: " + mb.messageCount);
// console.log('Messages:\n' + mb);

// console.log("New mailbox:\n" +
//     new MailBox()
//         .addMessage("Subj 1", "Msg 1")
//         .addMessage("Subj 2", "Msg 2")
//         .addMessage("Subj 3", "Msg 3")
//         .toString());
