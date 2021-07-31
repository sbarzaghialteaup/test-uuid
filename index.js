const uuid = require('uuid');
const Short = require('short-uuid');
const ShortId = require('short-unique-id');

const { PerformanceObserver, performance } = require('perf_hooks');

function prepareMeasurement() {
    
    const perfObserver = new PerformanceObserver((items) => {
        items.getEntries().forEach((entry) => {
          console.log(entry)
          performance.clearMarks();
        })
      })
    
      perfObserver.observe({ entryTypes: ["measure"], buffer: true })

}
async function main() {

    prepareMeasurement();

    console.log('\nuuid: rfc4122 version 4 (32 char, 128 bit):');
    
    performance.mark('A');
    for (let index = 0; index < 1000000; index++) {
        const u1 = uuid.v4();
    }
    performance.measure('uuid.v4() creation', 'A');
    
    performance.mark('A');
    console.log('\nshort-uuid: flickrBase58 encode of rfc4122 version 4 (22 char, 176 bit):');
    for (let index = 0; index < 1000000; index++) {
        const us = Short.generate();
    }
    performance.measure('Short.generate() creation', 'A');
    
    console.log('\nshort-unique-id: random UUID containing the timestamp (15 char, 120 bit):');
    const uid = new ShortId();
    
    performance.mark('A');
    for (let index = 0; index < 1000000; index++) {
        const idWithTimestamp = uid.stamp(15)
    }
    performance.measure('uid.stamp() creation', 'A');

}

main();
