(function(){
  // Photo slots: click to add your own photo, or set data-src on the <label class="slot"> to use a file path.
  document.querySelectorAll('.slot').forEach(function(slot){
    var input = slot.querySelector('input'), img = slot.querySelector('img');
    function show(src){ img.src = src; slot.classList.add('has-img'); }
    if (slot.dataset.src) show(slot.dataset.src);
    input.addEventListener('change', function(){
      var f = input.files && input.files[0];
      if (f) show(URL.createObjectURL(f));
    });
  });

  // Mobile menu
  var burger = document.getElementById('burger'), menu = document.getElementById('menu');
  burger.addEventListener('click', function(){
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', function(e){ if (e.target.tagName === 'A'){ menu.classList.remove('open'); burger.setAttribute('aria-expanded','false'); } });

  function closeMenu(){ menu.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', function(){ if (window.innerWidth > 1100) closeMenu(); });

  // Cart
  var n = 0, sum = 0, count = document.getElementById('count'), total = document.getElementById('total');
  document.getElementById('addBtn').addEventListener('click', function(e){
    n += 1; sum += parseFloat(e.currentTarget.dataset.price);
    count.textContent = n; total.textContent = '$' + Math.round(sum);
  });
})();
