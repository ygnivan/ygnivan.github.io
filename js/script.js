$(document).ready(function () {
  $(".burger__btn").click(function () {
    $(".burger__btn").toggleClass("open");
    $(".burger__menu").toggleClass("open-menu");
  });

  $(".burger__menu").click(function () {
    $(this).removeClass("open-menu");
    $(".burger__btn").removeClass("open");
  });

  const tabs = document.querySelectorAll("[data-tab-value]");
  const tabInfos = document.querySelectorAll("[data-tab-info]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabValue);

      tabInfos.forEach((tabInfo) => {
        tabInfo.classList.remove("active");
      });
      target.classList.add("active");
      $(".tooth__area").css("display", "none");

      if ($(window).width() < 600) {
        $(".tooth__info").css("display", "block");
      }
    });

    $(".close__btn").click(function () {
      $(".tooth__info").css("display", "none");
    });
  });
});
