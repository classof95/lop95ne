// Chạy sau khi DOM load
document.addEventListener("DOMContentLoaded", () => {
  // chọn tất cả link trong menu
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // chặn load ngay lập tức
      const url = link.getAttribute("href"); // lấy đường dẫn trong href

      // thêm class fade-out để chạy animation
      document.body.classList.add("fade-out");

      // chờ 1 giây rồi mới chuyển trang
      setTimeout(() => {
        window.location.href = url;
      }, 1000); // nhớ trùng với thời gian trong CSS
    });
  });
});
