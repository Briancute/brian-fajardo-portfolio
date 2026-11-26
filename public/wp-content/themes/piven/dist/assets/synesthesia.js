// Magnetic Precision Cursor & Contextual Reticle
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

function injectStyles() {
  const style = document.createElement('style');
  style.id = 'synesthesia-styles';
  style.textContent = `
    .syn-cursor {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 95;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.25s ease;
      mix-blend-mode: difference;
    }
    .syn-cursor.is-visible {
      opacity: 1;
    }
    html.has-viewer .syn-cursor,
    html.is-privacy .syn-cursor {
      opacity: 0 !important;
    }
    .syn-cursor__ring {
      position: absolute;
      top: 0;
      left: 0;
      width: 28px;
      height: 28px;
      margin: -14px 0 0 -14px;
      border-radius: 999px;
      border: 1.25px solid rgba(255, 255, 255, 0.72);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: width 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                  height 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                  margin 0.28s cubic-bezier(0.22, 1, 0.36, 1),
                  border-color 0.25s ease,
                  background-color 0.25s ease;
    }
    .syn-cursor.is-hover .syn-cursor__ring {
      width: 44px;
      height: 44px;
      margin: -22px 0 0 -22px;
      background: rgba(255, 255, 255, 0.08);
      border-color: #fff;
    }
    .syn-cursor.is-card .syn-cursor__ring {
      width: 68px;
      height: 26px;
      margin: -13px 0 0 -34px;
      background: rgba(255, 255, 255, 0.92);
      border-color: transparent;
    }
    .syn-cursor__label {
      font-family: "TT Norms Pro", system-ui, sans-serif;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.1em;
      color: #0e0c0b;
      opacity: 0;
      transition: opacity 0.18s ease;
      white-space: nowrap;
    }
    .syn-cursor.is-card .syn-cursor__label {
      opacity: 1;
    }
    .syn-cursor__dot {
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 4px;
      margin: -2px 0 0 -2px;
      border-radius: 50%;
      background: #fff;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
    .syn-cursor.is-card .syn-cursor__dot {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);
}

function initMagneticCursor() {
  if (!finePointer || reducedMotion) return;

  const cursor = document.createElement('div');
  cursor.className = 'syn-cursor';
  cursor.setAttribute('aria-hidden', 'true');
  cursor.innerHTML = `<div class="syn-cursor__ring"><span class="syn-cursor__label">EXPLORE</span></div><div class="syn-cursor__dot"></div>`;
  document.body.appendChild(cursor);

  const ring = cursor.querySelector('.syn-cursor__ring');
  const dot = cursor.querySelector('.syn-cursor__dot');
  const label = cursor.querySelector('.syn-cursor__label');

  let mx = innerWidth / 2;
  let my = innerHeight / 2;
  let rx = mx;
  let ry = my;
  let visible = false;

  addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        visible = true;
        cursor.classList.add('is-visible');
      }
      const target = e.target;
      const canvasEl = target?.closest?.('.works__canvas');
      const interactive = target?.closest?.('a, button, [data-work]');
      if (canvasEl && canvasEl.classList.contains('is-pointing')) {
        cursor.classList.add('is-card');
        cursor.classList.remove('is-hover');
        label.textContent = canvasEl.classList.contains('is-zoom')
          ? 'ZOOM'
          : document.documentElement.dataset.screen === 'case'
            ? 'NEXT'
            : 'OPEN';
      } else if (interactive) {
        cursor.classList.add('is-hover');
        cursor.classList.remove('is-card');
      } else {
        cursor.classList.remove('is-hover', 'is-card');
      }
    },
    { passive: true }
  );

  document.addEventListener('mouseleave', () => {
    visible = false;
    cursor.classList.remove('is-visible');
  });

  const stepCursor = () => {
    rx += (mx - rx) * 0.22;
    ry += (my - ry) * 0.22;
    ring.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0)`;
    dot.style.transform = `translate3d(${mx.toFixed(1)}px, ${my.toFixed(1)}px, 0)`;
    requestAnimationFrame(stepCursor);
  };
  requestAnimationFrame(stepCursor);
}

function initCursorOnly() {
  if (document.getElementById('synesthesia-styles')) return;
  injectStyles();
  initMagneticCursor();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCursorOnly);
} else {
  initCursorOnly();
}
