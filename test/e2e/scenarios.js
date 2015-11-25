describe('kokbokApp', function() {
  describe('Recepie list', function() {
    beforeEach(function() {
      browser.get('index.html');
    });

    it('should only show braxpudding when searching for brax', function() {
      var recepieList = element.all(by.repeater('repecie in recepies'));
      var query = element(by.model('query'));

      expect(recepieList.count()).toBe(2);

      query.sendKeys('brax');
      expect(recepieList.count()).toBe(1);

      query.clear();
      expect(recepieList.count()).toBe(2);
    });
  });
});
