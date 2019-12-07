const Exercise = require('./Exercise');

describe('Exercise model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const exercise = new Exercise({
        pushups: 12,
        situps: 22,
        burpees: 3
      });
      const { errors } = exercise.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });
  describe('pushups', () => {
    it('is required', () => {
      const exercise = new Exercise({
        name: 'pushups',
        situps: 0,
        burpees: 0
      });
      const { errors } = exercise.validateSync();
      expect(errors.exercise.message).toEqual('Path `pushups` is required.');
    });
  });
})
;
