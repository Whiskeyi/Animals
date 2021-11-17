 // data() {
  //   return {
  //     bgColor: ''
  //   }
  // },
  // created() {
  //   setInterval(this.changeBgColor(),1000)
  // },
  // methods: {
  //   changeBgColor() {
  //     let arrColor = ["#FC9F4D", "#E98B2A", "#90B44B", "#4D5139", "#1C1C1C", "#4F4F48",
  //                     "#FF5E99", "#828282", "#52433D", "#947A6D", "#080808", "#0C0C0C",
  //                     "#434343", "#B19693", "#434343", "#EFBB24", "#90B44B", "#373C38",
  //                     "#BDC0BA", "#BDC0BA", "#BDC0BA", "#434343","#BDC0BA", "#BDC0BA"]
  //     window.console.log(arrColor[Math.floor(Math.random() * arrColor.length) - 1])
  //   }
  // }
  let divEle = document.getElementsByClassName("bg")[0];

  setInterval(function () {
      divEle.classList.remove("bgc-1");},2000);

  // 设置1秒后执行func函数（只调用一次）
  setTimeout(func,1000);

  function func() {
      setInterval(function () {
          divEle.classList.add("bgc-1")},2000)
  }