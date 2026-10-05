(function () {
  'use strict';

  function decorate(root) {
    root.classList.add('yf-runtime-mounted');

    /* The original shell is a fixed 240px div, not a nav. Give it a stable
       class so the new shell can remove it without touching React logic. */
    Array.prototype.slice.call(root.querySelectorAll('div,nav,aside')).forEach(function (el) {
      var rect = el.getBoundingClientRect();
      var style = window.getComputedStyle(el);
      if (style.position === 'fixed' && rect.left < 8 && rect.width >= 180 && rect.width <= 300 && rect.height > 300) {
        el.classList.add('yf-legacy-sidebar');
        if (el.parentElement) {
          el.parentElement.classList.add('yf-shell-no-sidebar');
          Array.prototype.slice.call(el.parentElement.children).forEach(function (child) {
            if (child !== el && child.getBoundingClientRect().width > 400) child.classList.add('yf-legacy-content');
          });
        }
      }
    });

    var art = root.querySelector('img.banner');
    if (art) {
      art.classList.add('yf-banner-art');
      var parent = art.parentElement;
      while (parent && parent !== root) {
        var parentRect = parent.getBoundingClientRect();
        if (parentRect.width > 700 && parentRect.height > 170) {
          parent.classList.add('yf-hero-art');
          break;
        }
        parent = parent.parentElement;
      }
    }

    /* Promote the real React cards to stable visual roles. */
    Array.prototype.slice.call(root.querySelectorAll('h1,h2,h3')).forEach(function (heading) {
      var text = (heading.textContent || '').trim().toLowerCase();
      var card = heading.parentElement;
      while (card && card !== root) {
        var r = card.getBoundingClientRect();
        var bg = window.getComputedStyle(card).backgroundColor;
        if (r.width > 280 && r.height > 120 && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') break;
        card = card.parentElement;
      }
      if (!card || card === root) return;
      if (text.indexOf('token & stock') !== -1) card.classList.add('yf-stake-card');
      else if (text.indexOf('forge stats') !== -1) card.classList.add('yf-stats-card');
      else if (text.indexOf('total value locked') !== -1) card.classList.add('yf-tvl-card');
      else if (text.indexOf('forge supply') !== -1 || text.indexOf('forge emission') !== -1) card.classList.add('yf-emission-card');
    });
  }

  function boot() {
    var root = document.querySelector('#root');
    if (!root) return;
    if (document.querySelector('.yf-runtime-bar')) {
      decorate(root);
      return;
    }

    var bar = document.createElement('header');
    bar.className = 'yf-runtime-bar';

    bar.innerHTML =
      '<a class="yf-runtime-brand" href="/">' +
        '<img src="/images/LogoTextNewDark.png" alt="YieldForge">' +
      '</a>' +
      '<nav class="yf-runtime-nav">' +
        '<a href="/">Home</a>' +
        '<a href="/stocks/">Stock Staking</a>' +
        '<a href="/staking/">Token Staking</a>' +
      '</nav>' +
      '<div class="yf-runtime-spacer"></div>' +
      '<button class="yf-runtime-wallet">Connect wallet</button>';

    root.insertBefore(bar, root.firstChild);
    decorate(root);

    var wallet = Array.prototype.slice.call(
      root.querySelectorAll('button')
    ).find(function (button) {
      return /0x|connect|unlock/i.test(button.textContent || '');
    });

    if (wallet) {
      bar.querySelector('.yf-runtime-wallet').onclick = function () {
        wallet.click();
      };
    }

    Array.prototype.slice.call(root.querySelectorAll('nav')).forEach(function (nav) {
      if (nav !== bar.querySelector('.yf-runtime-nav')) {
        nav.classList.add('yf-runtime-side');
      }
    });

    decorate(root);
  }

  boot();

  new MutationObserver(boot).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
