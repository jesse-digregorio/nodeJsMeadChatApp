var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object.', () => {
        var from = 'some person';
        var text = 'some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe('generateLocationMessage', () => {
    it('should generate a correct location object', () => {
        var from = 'some person';
        var bogusLat = 19;
        var bogusLong = 17;
        var message = generateLocationMessage(from, bogusLat, bogusLong);

        var expectedUrl = `https://www.google.com/maps?q=${bogusLat},${bogusLong}`

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from });
        expect(message.url).toBe(expectedUrl);
    });
});
