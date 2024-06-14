import getHealth from '../health';

describe('Testing the getHealth function', () => {
    test.each([
        [{ health: 90 }, 'зелёный'],
        [{ health: 45 }, 'жёлтый'],
        [{ health: 10 }, 'красный'],
        [{ health: -10 }, new Error('The object value is a negative number')],
        [{ health: 'abc' }, new Error('The value of the object is not a number')],
    ])('the value of health in an object %s with an indication %j', (objHealth, indication) => {
        if (indication instanceof Error) {
            expect(() => getHealth(objHealth)).toThrowError(indication);
        } else {
            expect(getHealth(objHealth)).toBe(indication);
        }
    });
});
