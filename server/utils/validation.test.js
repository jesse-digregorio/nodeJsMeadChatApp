const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var testString = 17;

        var result = isRealString(testString);
        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var testString = '      ';

        var result = isRealString(testString);
        expect(result).toBe(false);
    });

    it('should allow string with non-whitespace characters', () => {
        var testString = '  marmalade ';

        var result = isRealString(testString);
        expect(result).toBe(true);
    });
});
