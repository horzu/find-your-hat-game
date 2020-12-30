const assert = require('assert');
const rooster = require('../deneme');

describe('Rooster', () => {
  describe('annonceDawn', () => {
    before( () => {
      console.log('What does the Rooster say?');
    });
    
    afterEach( () => {
      console.log('cock-a-doodle-doo!');
    });
  
    it('returns a rooster call', () => {
      // setup
      let expected = 'cock-a-doodle-doo';

      //exercise
      let actual = Rooster.announceDawn();

      //verify
      assert.strictEqual(actual, expected);

    });
      it('returns its argument as a string', () => {
      //setup
      let time = Rooster.timeAtDawn(5);
      //exercise
      let actual = '5';
      //verify
      assert.strictEqual(actual, time);
    });

      it('throws an error if passed a number less than 0', () => {
      //setup
      let hour = -1;
      let expected = RangeError
            
      //verify
      assert.throws(() => {
      Rooster.timeAtDawn(hour); //exercise
      },
      expected);
    });
      it('throws an error if passed a number more than 23', () => {
      //setup
      let hour = 24;
      let expected = RangeError
            
      //verify
      assert.throws(() => {
      Rooster.timeAtDawn(hour); //exercise
      },
      expected);
    });
  });
});