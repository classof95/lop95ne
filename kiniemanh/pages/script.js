const container = document.querySelector('.gallery-container');
const slides = document.querySelectorAll('.gallery-slide');
let currentIndex = 0;
let startY = 0;

// Lắng nghe sự kiện touchstart
container.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

// Lắng nghe sự kiện touchend
container.addEventListener('touchend', (e) => {
  const endY = e.changedTouches[0].clientY;
  const diff = endY - startY;
  
  if (Math.abs(diff) > 50) {  // Ngưỡng cảm ứng
    if(diff < 0) {
      // Vuốt lên: chuyển sang slide tiếp theo
      changeSlide('next');
    } else {
      // Vuốt xuống: chuyển sang slide trước đó
      changeSlide('prev');
    }
  }
});

function changeSlide(direction) {
  // Thêm hiệu ứng motion blur cho container
  container.classList.add('motion-blur');
  
  // Loại bỏ lớp active của slide hiện tại
  slides[currentIndex].classList.remove('active');
  
  // Cập nhật index dựa trên hướng vuốt
  if(direction === 'next') {
    currentIndex = (currentIndex + 1) % slides.length;
  } else {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }
  
  // Hiển thị slide mới
  slides[currentIndex].classList.add('active');
  
  // Sau khi animation xong (300ms), gỡ bỏ lớp motion-blur
  setTimeout(() => {
    container.classList.remove('motion-blur');
  }, 300);
}
