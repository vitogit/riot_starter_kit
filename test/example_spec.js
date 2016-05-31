describe('Example spec', function() {
  context('default', function() {
    beforeEach(function() {
      var html = document.createElement('example-tag')
      document.body.appendChild(html)
      tag = riot.mount('example-tag')[0]  
    });    

    it('has an example var', function() {
      expect(tag.example_var).to.exist
    })
  })
})
