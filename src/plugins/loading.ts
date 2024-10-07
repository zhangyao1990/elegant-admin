import { getLocal } from '@/utils/storage'

// @unocss-include
export function setupLoading() {
  const themeColor = getLocal('themeColor') || '#646cff'
  const loading = `
    <style>
    .elegant-admin-home {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: ${themeColor};
      user-select: none;
      background-color: #fff;
    }

    /**  loading  **/
    .loading-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    .loading-box .loading-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 98px 20px;
    }

    .loading-box .loading-text {
      font-size: 14px;
      color: ${themeColor};
    }

    .dot {
      position: relative;
      box-sizing: border-box;
      display: inline-block;
      width: 32px;
      height: 32px;
      font-size: 32px;
      transform: rotate(45deg);
      animation: ant-rotate 1.2s infinite linear;
    }

    .dot i {
      position: absolute;
      display: block;
      width: 14px;
      height: 14px;
      background-color: ${themeColor};
      border-radius: 100%;
      opacity: 0.3;
      transform: scale(0.75);
      transform-origin: 50% 50%;
      animation: ant-spin-move 1s infinite linear alternate;
    }

    .dot i:nth-child(1) {
      top: 0;
      left: 0;
    }

    .dot i:nth-child(2) {
      top: 0;
      right: 0;
      animation-delay: 0.4s;
    }

    .dot i:nth-child(3) {
      right: 0;
      bottom: 0;
      animation-delay: 0.8s;
    }

    .dot i:nth-child(4) {
      bottom: 0;
      left: 0;
      animation-delay: 1.2s;
    }

    @keyframes ant-rotate {
      to {
        transform: rotate(405deg);
      }
    }

    @keyframes ant-spin-move {
      to {
        opacity: 1;
      }
    }
    #nprogress {
      pointer-events: none;

      .bar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2000;
        width: 100%;
        height: 2px;
        background: ${themeColor};
      }

      .peg {
        position: absolute;
        right: 0;
        display: block;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${themeColor}, 0 0 5px ${themeColor};
        opacity: 1;
        transform: rotate(3deg) translate(0, -4px);
      }

      .spinner {
        position: fixed;
        top: 11px;
        right: 14px;
        z-index: 2000;
        display: block;

        .spinner-icon {
          box-sizing: border-box;
          width: 18px;
          height: 18px;
          border: solid 2px transparent;
          border-top-color: ${themeColor};
          border-left-color: ${themeColor};
          border-radius: 50%;
          animation: nprogress-spinner 400ms linear infinite;
        }
      }
    }

    .nprogress-custom-parent {
      position: relative;
      overflow: hidden;

      #nprogress .spinner,
      #nprogress .bar {
        position: absolute;
      }
    }

    @keyframes nprogress-spinner {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes nprogress-spinner {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
  <div class="elegant-admin-home">
    <div class="loading-box">
      <div class="loading-wrap">
        <span class="dot dot-spin"><i></i><i></i><i></i><i></i></span>
      </div>
    </div>
  </div>
`

  const app = document.getElementById('app')

  if (app) {
    app.innerHTML = loading
  }
}
