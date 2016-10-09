describe('app spec', function() {
  context('default', function() {
    beforeEach(function() {
      var html = document.createElement('app')
      document.body.appendChild(html)
      app = riot.mount('app')[0]
    });

    it('has an app var', function() {
      expect(app.app_var).to.exist
    })
  })
})
