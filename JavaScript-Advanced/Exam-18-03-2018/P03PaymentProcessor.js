class PaymentProcessor {
    constructor(option) {
        this.options = {types: ["service", "product", "other"], precision: 2}
        if (option) {
            for (let obj in this.options) {
                if (option.hasOwnProperty(obj)) {
                    this.options[obj] = option[obj]
                }
            }
        }
        this.payments = [];
    }
    // TODO: implement this class
    registerPayment(id, name, type, value) {
        this._checkId(id);
        this._checkName(name);

        if (typeof value !== 'number') {
            throw new Error();
        }

        if (!this.options['types'].includes(type)) {
            throw new Error();
        }
        
        let checkforPay = this.payments.filter(x => x.id === id)

        if (checkforPay.length > 0) {
            throw new Error()
        }

        
        let currentPayment = {id, name, type, value}
        this.payments.push(currentPayment);
    }

    deletePayment(id) {
        this._checkId();
        let currentPayment = this.payments.filter(x => x.id === id)
        if (currentPayment.length === 0) {
            throw new Error()
        }

        let allPayments = this.payments.filter(x => x.id !== id)
        this.payments = allPayments;
    }

    get(id) {
        this._checkId();
        let currentPayment = this.payments.filter(x => x.id === id)

        if (currentPayment.length === 0) {
            throw new Error()
        }
        return `Details about payment ID: ${currentPayment[0].id}
        - Name: ${currentPayment[0].name}
        - Type: ${currentPayment[0].type}
        - Value: ${currentPayment[0].value.toFixed(this.options['precision'])}
        `
        
    }

    setOptions(options) {
        for (let obj in this.options) {
            if (options.hasOwnProperty(obj)) {
                if (obj === 'precision') {
                    if (typeof options[precision] !== 'number') {
                        throw new Error();
                    }
                }
                this.options[obj] = options[obj]
            }
        }
    }

    toString() {
        let sum = 0;
        for (let obj of this.payments) {
            sum += obj['value']
        }
        return `Summary:\n- Payments: ${this.payments.length}\n- Balance: ${sum.toFixed(this.options.precision)}` 
    }

    _checkId(id){
        if (id === '') {
            throw new Error();
        }
    }

    _checkName(name){
        if (name === '') {
            throw new Error();
        }
    }
}

// const generalPayments = new PaymentProcessor();
// generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
// generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
// console.log(generalPayments.toString());

// // Should throw an error (invalid type)
// //generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// // Should throw an error (ID not found)
// generalPayments.deletePayment('E027');
// // Should throw an error (ID not found)
// generalPayments.get('E027');

// generalPayments.deletePayment('E028');
// console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());
