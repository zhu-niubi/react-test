const reportWebVitals = onPerfEntry => {

  //检查 onPerfEntry 是否被传递并且是否是一个函数
  if (onPerfEntry && onPerfEntry instanceof Function) {
    //使用动态 import 语法异步加载 web-vitals 库。动态导入可以减少初始加载时间，因为 web-vitals 只有在需要时才会被加载
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      //这些函数会测量不同的性能指标，并在数据准备好时通过 onPerfEntry 回调函数传递结果

      //1.测量累计布局偏移，反映页面在加载过程中出现的视觉稳定性问题
      getCLS(onPerfEntry);
      //2.测量首次输入延迟，反映用户首次交互（如点击、键盘输入）到浏览器能够响应的时间
      getFID(onPerfEntry);
      //3.测量首次内容绘制，反映页面内容开始显示的时间
      getFCP(onPerfEntry);
      //4.测量最大内容绘制，反映页面主要内容完全加载并可见的时间
      getLCP(onPerfEntry);
      //5.测量从浏览器请求到收到服务器响应第一个字节的时间
      getTTFB(onPerfEntry);
    });
  }
};
export default reportWebVitals;
