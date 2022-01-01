var Links = {
  setColor: function (color) {
    //     var alist = document.querySelectorAll("a");
    //     var i = 0;
    //     while (i < alist.length) {
    //       alist[i].style.color = color;
    //       i = i + 1;
    //     }
    $("a").css("color", color);
  },
};

var Body = {
  setColor: function (color) {
    //document.querySelector("body").style.color = color;
    $("body").css("color", color);
  },
  setBackgroundColor: function (color) {
    //document.querySelector("body").style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },
};
//$('body') body의 css를 변경하겠다.
//"backgroundcolor"는 속성,프로퍼티라고 보면되고 color는 파라미터,입력값

function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";

    Links.setColor("white");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
}
//웹페이지가 1억개라면
//<script></script>안의내용을 하나하나 배포하는것도문제지만
//그중 뭐 powderblue의 색을 바꾸어줘라 같은 변경사항이생기면 더 문제
//그러므로 이런식으로 독립된 파일로 빼서 적용시키는것.
