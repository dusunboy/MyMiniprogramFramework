function getCtx(selector) {
  const pages = getCurrentPages();
  const ctx = pages[pages.length - 1];

  const componentCtx = ctx.selectComponent(selector);
  if (!componentCtx) {
    console.error('无法找到对应的组件，请按文档说明使用组件');
    return null;
  }
  let selectorQuery = wx.createSelectorQuery().in(ctx);
  // 然后逐个取出navbar和header的节点信息
  // 选择器的语法与jQuery语法相同
  selectorQuery.select('#navigation-bar').boundingClientRect();

  return new Promise((resolve, reject) => {
    selectorQuery.exec((res) => {
      if (res[0]) {
        componentCtx.navigationbarHeight = res[0].height
      } else {
        componentCtx.navigationbarHeight = 0
      }
      resolve(componentCtx)
    })
  })
}

function Toast(options) {
  const {
    selector = '#toast'
  } = options;
  getCtx(selector).then(ctx => {
    ctx.handleShow(options);
  })

}

Toast.hide = function (selector = '#toast') {
  getCtx(selector).then(ctx => {
    ctx.handleHide();
  })
};

function Message(options) {
  const {
    selector = '#message'
  } = options;
  getCtx(selector).then(ctx => {
    options.navigationbarHeight = ctx.navigationbarHeight
    ctx.handleShow(options);
  })
}

module.exports = {
  $Toast: Toast,
  $Message: Message
};