(function () {
  'use strict';

  function decorate(root) {
    root.classList.add('yf-runtime-mounted');
    var pathname = window.location.pathname.replace(/\/+$/, '') || '/';
    root.classList.remove('yf-route-home', 'yf-route-stocks', 'yf-route-pools', 'yf-route-vaults');
    root.classList.add(pathname === '/' ? 'yf-route-home' : pathname.indexOf('/stocks') === 0 ? 'yf-route-stocks' : pathname.indexOf('/pools') === 0 ? 'yf-route-pools' : pathname.indexOf('/staking') === 0 ? 'yf-route-vaults' : 'yf-route-home');

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

    var topBar = root.querySelector('.yf-runtime-bar');
    if (topBar) {
      var topWallet = topBar.querySelector('.yf-runtime-wallet');
      var appWallet = Array.prototype.slice.call(root.querySelectorAll('button')).find(function (button) {
        return button !== topWallet && /0x|connect|unlock/i.test(button.textContent || '');
      });
      if (appWallet && topWallet) topWallet.onclick = function () { appWallet.click(); };
      Array.prototype.slice.call(topBar.querySelectorAll('.yf-runtime-nav a')).forEach(function (link) {
        var linkPath = (new URL(link.href, window.location.origin)).pathname.replace(/\/+$/, '') || '/';
        var active = linkPath === '/' ? pathname === '/' : pathname === linkPath || pathname.indexOf(linkPath + '/') === 0;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }

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
      '<a class="yf-runtime-brand" href="/" aria-label="YieldForge home">' +
        '<img class="yf-runtime-emblem" src="/images/yieldforge-logo.png" alt="">' +
        '<span class="yf-runtime-brand-copy"><img src="/images/LogoTextNewDark.png" alt="YieldForge"><small>FORGE PROTOCOL</small></span>' +
      '</a>' +
      '<nav class="yf-runtime-nav">' +
        '<a href="/">Home</a>' +
        '<a href="/stocks/">Stock Staking</a>' +
        '<a href="/pools/">Token Staking</a>' +
      '</nav>' +
      '<div class="yf-runtime-network"><span class="yf-runtime-network-dot"></span><span>Robinhood</span></div>' +
      '<div class="yf-runtime-spacer"></div>' +
      '<button class="yf-runtime-wallet">Connect wallet</button>';

    root.insertBefore(bar, root.firstChild);
    decorate(root);

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
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style']
  });
})();
