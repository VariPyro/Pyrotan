       <script>
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          console.log('Service Worker registrado correctamente. Alcance: ', registration.scope);
        })
        .catch(function(error) {
          console.log('Error al registrar el Service Worker: ', error);
        });
    });
  }
</script>
