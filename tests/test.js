
export function test(message, callback){
    try {
        callback();
        console.log('\x1b[32m%s\x1b[0m', message + ' ✔ passed');
    } catch (error) {
        console.log('\x1b[31m%s\x1b[0m', message + ' ✘ failed');
        console.log('expected: ' + error, 'received: ' + error);
        console.log(error.stack);
    }
}

export function expect(value){
    return {
        toBe: (expected) => {
            if(value !== expected){
                const str = '✘ Test Failed. '+'Expected: \"'+expected+'\", but received: \"'+value+'\"';
                console.log('\x1b[31m%s\x1b[0m', str);
            }
        }
    }
}