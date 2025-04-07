
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23600, hash: '41acd2a2d053b156ea7b1cf91b49b993e0ce9949c16c362ad4d00f87dd4227e3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17138, hash: '9b0c7dac271b69f91d595f386c803712b35fdafa9822aab3414a16c3b65c2fd5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-CZFEFHVG.css': {size: 7084, hash: 'sbi7SkH0n4Q', text: () => import('./assets-chunks/styles-CZFEFHVG_css.mjs').then(m => m.default)}
  },
};
