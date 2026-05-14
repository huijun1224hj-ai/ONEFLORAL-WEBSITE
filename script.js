const waText = encodeURIComponent('Hi One Floral, I would like to order / enquire about flowers.');
const waLink = `https://wa.me/${SHOP.whatsapp}?text=${waText}`;
document.getElementById('orderBtn').href = waLink;
document.getElementById('contactBtn').href = waLink;

const grid = document.getElementById('productGrid');
grid.innerHTML = PRODUCTS.map(item => `
  <article class="product-card">
    <img src="${item.image}" alt="${item.titleEN}">
    <div class="product-info">
      <h3>${item.titleCN}</h3>
      <p>${item.titleEN}</p>
      <p>${item.category}</p>
    </div>
  </article>
`).join('');
