$(function () {
  $(".js-text_field").on("keyup", function () {
    var title = $.trim($(this).val());
    $.ajax({
      type: "GET",
      url: "/messages/searches",
      data: "title=" + title,
      dataType: "json",
    })
      // 以下を追加
      .done(function (data) {
        $(".js-messages li").remove();

        // 以下のコードを追加する
        $(data).each(function (i, message) {
          $(".js-messages").append(
            `<li class="message"><a href="/messages/${message.id}">${message.title}</a></li>`
          );
        });
      });
  });
});
