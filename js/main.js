import { projects } from "./data.js";

(function () {
  "use strict";

  var isMobile = {
    any: function () {
      return /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(
          navigator.userAgent
      );
    },
  };

  var fullHeight = function () {
    if (!isMobile.any()) {
      $(".js-fullheight").css("height", $(window).height());
      $(window).resize(function () {
        $(".js-fullheight").css("height", $(window).height());
      });
    }
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            i++;
            $(this.element).addClass("item-animate");
            setTimeout(function () {
              $("body .animate-box.item-animate").each(function (k) {
                var el = $(this);
                setTimeout(function () {
                  el.addClass("fadeInUp animated");
                  el.removeClass("item-animate");
                }, k * 200, "easeInOutExpo");
              });
            }, 100);
          }
        },
        { offset: "85%" }
    );
  };

  var burgerMenu = function () {
    $(".js-colorlib-nav-toggle").on("click", function (event) {
      event.preventDefault();
      var $this = $(this);
      $("body").toggleClass("offcanvas");
      $this.toggleClass("active");
    });
  };

  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("body").removeClass("offcanvas");
        $(".js-colorlib-nav-toggle").removeClass("active");
      }
    });
  };

  $(function () {
    fullHeight();
    contentWayPoint();
    burgerMenu();
    mobileMenuOutsideClick();
    renderProjects();
    bindVideoModal();
  });
})();

/* -------------------
   CONFIDENTIAL UNLOCK
-------------------- */
function unlockConfidential() {
  const pwd = prompt("Enter password:");
  if (pwd === "blue123") {
    document.querySelectorAll(".confidential").forEach((el) => {
      el.style.display = "block";
    });
  } else {
    alert("Wrong password.");
  }
}

/* -------------------
   VIDEO MODAL
-------------------- */
function openVideo(src, title) {
  const modal = document.getElementById("videoModal");
  const video = modal.querySelector("video");
  const caption = modal.querySelector(".caption");

  video.src = src;
  caption.textContent = title;
  modal.style.display = "flex";
  video.play();
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const video = modal.querySelector("video");
  modal.style.display = "none";
  video.pause();
  video.src = "";
}

function bindVideoModal() {
  document.querySelector("#videoModal .close").addEventListener("click", closeVideo);
}

/* -------------------
   PROJECT RENDERING
-------------------- */
function renderProjects() {
  const container = document.getElementById("projects-accordion");
  if (!container) return;

  projects.forEach((cat) => {
    const catDiv = document.createElement("div");
    catDiv.className =
        "project-category" + (cat.confidential ? " confidential" : "");
    if (cat.confidential) catDiv.style.display = "none";

    const header = document.createElement("div");
    header.className = "project-header";
    header.textContent = cat.category;
    header.onclick = () => {
      const content = catDiv.querySelector(".project-content");
      content.style.display =
          content.style.display === "block" ? "none" : "block";
    };
    catDiv.appendChild(header);

    const content = document.createElement("div");
    content.className = "project-content";

    cat.groups.forEach((group) => {
      const groupDiv = document.createElement("div");
      groupDiv.className = "project-group";

      const title = document.createElement("h4");
      title.textContent = group.title;
      groupDiv.appendChild(title);

      const grid = document.createElement("div");
      grid.className = "video-grid";

      group.videos.forEach((v) => {
        const thumb = document.createElement("div");
        thumb.className = "video-thumb";
        thumb.innerHTML = `<img src="${v.thumb}" alt="${v.title}"><span>${v.title}</span>`;
        thumb.onclick = () => openVideo(v.src, v.title);
        grid.appendChild(thumb);
      });

      groupDiv.appendChild(grid);
      content.appendChild(groupDiv);
    });

    catDiv.appendChild(content);
    container.appendChild(catDiv);
  });
}
