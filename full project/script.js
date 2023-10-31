
const words = {
    default_order: "Заказать",
    after_order: "->.....",
    order_accepted: "Ваш заказ принят!"
};

// function order() {
//     alert("adad");
//     el.text = words.order;
// }

// document.getElementByClassName('#btn_order').onclick = order;

$(document).ready(function(){
    $(".btn_order").hover(function(){
      $(this).text(words.after_order);
    });

    $(".btn_order").mouseleave(function(){
        $(this).text(words.default_order);
      });

    $("#h2_t").click(function(){
      
      $(".btn_submit_order").css("margin-top", "1%");
      var s = new Audio("2e371cbd1ce9be1.mp3");
      s.loop = false;
      s.play();
    });

    $(".btn_submit_order").hover(function(){
      $(this).animate({left: '40%', "background": "red"});
      var s = new Audio("6bcd1de1994ed0b.mp3");
      s.loop = false;
      s.play();
    });
  });
