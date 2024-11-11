// Khai báo cho các bộ chọn

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Nếu btn có sự kiện click thì dùng hàm arrow function
btn.addEventListener("click", () => {
  search.classList.toggle("active"); //toggle => tùy vào trạng thái để kích hoạt active
  // Nếu có sắc thì sẽ loại bỏ và ngược lại
  input.focus(); // Khi active xong chuột sẽ nháy ở input

  //   OK đã xong. Chỉnh transition ở CSS sao cho mượt mà
});
