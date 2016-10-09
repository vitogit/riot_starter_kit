<app>
  <a href="#" onclick={app_method}>This is the {this.app_var} tag</a>

  <script>
    this.app_var = 'example'
    this.app_method = function app_method(event) {
      alert('hello')
    }
  </script>

</app>
