document.addEventListener('DOMContentLoaded', function () {
  var burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  burgers.forEach(function (burger) {
    burger.addEventListener('click', function () {
      var targetId = burger.dataset.target;
      var target = targetId ? document.getElementById(targetId) : null;

      burger.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', burger.classList.contains('is-active') ? 'true' : 'false');

      if (target) {
        target.classList.toggle('is-active');
      }
    });
  });
});
