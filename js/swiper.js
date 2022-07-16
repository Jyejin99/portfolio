var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const myTextarea = document.getElementById("text");

// button 클릭 이벤트
document.getElementById("copybtn").onclick = () => {
  // textarea의 내용을 복사한다.
  window.navigator.clipboard.writeText(myTextarea.textContent).then(() => {
    // 복사가 완료되면 호출된다.
    alert("복사완료");
  });
}
