export function startScan() {
  const facebookLink = document.getElementById("facebookLink").value;
  const resultsDiv = document.getElementById("results");

  if (!facebookLink) {
    alert("Vui lòng nhập link Facebook!");
    return;
  }

  resultsDiv.innerHTML = `<p>Đang quét bài viết từ: ${facebookLink}</p>`;

  // Dummy scan functionality (to be replaced with real scanning logic)
  setTimeout(() => {
    resultsDiv.innerHTML = `
      <p>Kết quả quét:</p>
      <ul>
        <li>Bài viết 1: Không vi phạm</li>
        <li>Bài viết 2: Vi phạm (Link: <a href="${facebookLink}">Xem chi tiết</a>)</li>
        <li>Bài viết 3: Không vi phạm</li>
      </ul>
    `;
  }, 2000);
}
