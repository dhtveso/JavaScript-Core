var expect = require('chai').expect;
let PaymentPackage = require('../P02/class');

describe("Example Test", function () {
    let pmp;
    beforeEach(function () {
        pmp = new PaymentPackage('Pesho', 100);
    })
    
    it("Shoud have all properties", function () {
        expect(pmp.constructor.name).to.equal('PaymentPackage')
    })

    it("Shoud have all properties", function () {
        expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.equal(true)
        expect(typeof pmp).to.equal('object')
    })

    it("validate name ", function () {
        expect(() => pmp = new PaymentPackage(12, 12)).to.throw(Error)
    })

    it("validate name ", function () {
        expect(() => pmp = new PaymentPackage(12, 12, 122)).to.throw(Error)
    })

    it("validate name ", function () {
        expect(() => pmp = new PaymentPackage()).to.throw(Error)
    })
    it("validate name ", function () {
        expect(() => pmp = new PaymentPackage([12], 12)).to.throw(Error)
    })
    it("validate name ", function () {
        expect(() => pmp = new PaymentPackage({}, 12)).to.throw(Error)
    })
    it("validate name empty string", function () {
        expect(() => pmp = new PaymentPackage('', 12)).to.throw(Error)
    })

    it("validate value []", function () {
        expect(() => pmp = new PaymentPackage('ASD', [12])).to.throw(Error)
    })

    it("validate value string 11", function () {
        expect(() => pmp = new PaymentPackage('ASD', '11')).to.throw(Error)
    })

    it("validate value -1", function () {
        expect(() => pmp = new PaymentPackage('ASD', -1)).to.throw(Error)
    })

    it("validate value -1", function () {
        expect(() => pmp = new PaymentPackage('ASD', null)).to.throw(Error)
    })
    it("validate value -1", function () {
        expect(() => pmp = new PaymentPackage(null, -1)).to.throw(Error)
    })

    it("validate active -1", function () {
        expect(() => pmp.value = null).to.throw(Error)
    })
    
    it("validate name ", function () {
        expect(pmp.name).to.equal('Pesho')
    })

    it("validate value ", function () {
        expect(pmp.value).to.equal(100)
    })
    it("validate value ", function () {
        pmp.value = 11.1
        expect(pmp.value).to.equal(11.1)
    })
    it("validate value ", function () {
        pmp.VAT = 1.111123123123123123
        expect(pmp.VAT).to.equal(1.111123123123123123)
    })

    it("validate vat -1", function () {
        expect(() => pmp.VAT = 'asd').to.throw(Error)
    })
    it("validate vat -1", function () {
        expect(() => pmp.VAT = []).to.throw(Error)
    })
    it("validate vat -1", function () {
        expect(() => pmp.VAT = {}).to.throw(Error)
    })
    it("validate vat -1", function () {
        expect(() => pmp.VAT = [11]).to.throw(Error)
    })
    it("validate vat -1", function () {
        expect(() => pmp.VAT = -1).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.VAT = null).to.throw(Error)
    })
    it("validate vat ", function () {
        pmp.VAT = 0;
        expect(pmp.VAT).to.equal(0)
        expect(pmp._VAT).to.equal(0)
    })
    it("validate vat ", function () {
        pmp.VAT = 1.1;
        expect(pmp.VAT).to.equal(1.1)
        expect(pmp._VAT).to.equal(1.1)
    })
    

    it("validate active -1", function () {
        expect(() => pmp.active = 'asd').to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.active = []).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.active = -1).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.active = null).to.throw(Error)
    })

    it("validate vat ", function () {
        pmp.active = true;
        expect(pmp.active).to.equal(true)
    })
    it("validate vat ", function () {
        pmp.active = false;
        expect(pmp.active).to.equal(false)
    })

    it("validate vat ", function () {
        pmp = new PaymentPackage('[]', 1)
        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];
      
        expect(pmp.toString()).to.equal(output.join('\n'))
    })

    it("validate active -1", function () {
        expect(() => pmp.value = 'asd').to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.value = []).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.value = -1).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.value = null).to.throw(Error)
    })

    it("validate active -1", function () {
        expect(() => pmp.name = 11).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.name = []).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.name = -1).to.throw(Error)
    })
    it("validate active -1", function () {
        expect(() => pmp.name = null).to.throw(Error)
    })

    it("validate vat ", function () {
        pmp.vat = 20;
        expect(pmp.vat).to.equal(20)
    })
    it("validate vat ", function () {
        pmp.vat = 22.2;
        expect(pmp.vat).to.equal(22.2)
    })

    it("validate vat ", function () {
        pmp.value = 100;
        pmp.vat = 22.2;
        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];

        expect(pmp.toString()).to.equal(output.join('\n'))
    })
    it("validate vat ", function () {
        pmp.name = 'Stefcho'
        pmp.value = 0;
        pmp.vat = 0;
        pmp.active = false;

        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];
          
        expect(pmp.toString()).to.equal(output.join('\n'))
    })

    it("validate vat ", function () {
        pmp.name = 'K'
        pmp.value = 0;
        pmp.vat = 0;
        pmp.active = true;
        
        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];
          
        expect(pmp.toString()).to.equal(output.join('\n'))
    })

    it("validate vat ", function () {
        pmp.name = 'K'
        pmp.value = 0;
        pmp.vat = 1;
        pmp.active = true;
        
        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];
          
        expect(pmp.toString()).to.equal(output.join('\n'))
    })
    it("validate vat ", function () {
        pmp.name = 'k'
        pmp.value = 1;
        pmp.vat = 0;
        pmp.active = true;
        
        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];
          
        expect(pmp.toString()).to.equal(output.join('\n'))
    })

    it("validate vat ", function () {
        pmp.active = false;
        
        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];
          
        expect(pmp.toString()).to.equal(output.join('\n'))
        expect(pmp.active).to.equal(false)
        expect(pmp.value).to.equal(100)
        expect(pmp.VAT).to.equal(20)
    })

    it("validate vat ", function () {
        const output = [
            `Package: ${pmp.name}` + (pmp.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${pmp.value}`,
            `- Value (VAT ${pmp.VAT}%): ${pmp.value * (1 + pmp.VAT / 100)}`
          ];
          
        expect(pmp.toString()).to.equal(output.join('\n'))
    })

})
