// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick= (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
const productCards = document.querySelectorAll('.product-card');

// Menambahkan event listener pada setiap produk
productCards.forEach((productCard) => {
  const starIcons = productCard.querySelectorAll('.product-stars .star-full:not(.item-detail-button .star-full)');
  let selectedStars = 0; // Jumlah bintang yang dipilih

  // Menambahkan event listener pada elemen kontainer produk
  productCard.addEventListener('click', (event) => {
    const clickedStar = event.target;

    // Memeriksa apakah yang diklik adalah ikon bintang
    if (starIcons[0].parentNode.contains(clickedStar)) {
      const clickedIndex = Array.from(starIcons).indexOf(clickedStar);

      // Toggle seleksi pada ikon bintang yang diklik
      for (let i = 0; i < starIcons.length; i++) {
        if (i <= clickedIndex) {
          starIcons[i].classList.add('star-selected');
        } else {
          starIcons[i].classList.remove('star-selected');
        }
      }

      selectedStars = clickedIndex + 1; // Mengupdate jumlah bintang yang dipilih
    }
  });

  // Menambahkan event listener untuk menghapus seleksi saat mengklik area di luar ikon bintang
  productCard.addEventListener('mouseleave', () => {
    for (let i = 0; i < starIcons.length; i++) {
      if (i < selectedStars) {
        starIcons[i].classList.add('star-selected');
      } else {
        starIcons[i].classList.remove('star-selected');
      }
    }
  });
});
});
<!-- My Javascript -->
  // Feather Icons
  feather.replace();

  // Tambahkan event listener untuk tombol "add to cart"
  const addToCartButtons = document.querySelectorAll('.product-icons a:first-child');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      const productTitle = productCard.querySelector('.product-content h3').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;

      addToShoppingCart(productTitle, productPrice);
    });
  });

  // Tambahkan event listener untuk tombol "remove-item"
  const removeItemButtons = document.querySelectorAll('.remove-item');
  removeItemButtons.forEach(button => {
    button.addEventListener('click', () => {
      const cartItem = button.closest('.cart-item');
      cartItem.remove();
    });
  });

  // Fungsi untuk menambahkan item ke shopping cart
  function addToShoppingCart(title, price) {
    const shoppingCart = document.querySelector('.shopping-cart');
    const newItem = document.createElement('div');
    newItem.classList.add('cart-item');

    const itemContent = `
      <img src="coffe.jpg" alt="${title}" />
      <div class="item-detail">
        <h3>${title}</h3>
        <div class="item-price"span>${price}</div>
      </div>
      <i data-feather="trash-2" class="remove-item"></i>
    `;

    newItem.innerHTML = itemContent;

    shoppingCart.appendChild(newItem);

    function kirimWhatsApp() {
            // Mengambil data dari input
            var nama = document.getElementById("namaInput").value;
            var email = document.getElementById("emailInput").value;
            var noHP = document.getElementById("noHPInput").value;

            // Format pesan yang ingin Anda kirim
            var pesan = "Nama: " + nama + "\nEmail: " + email + "\nNo HP: " + noHP;

            // Ganti nomor WhatsApp dengan nomor tujuan Anda
            var nomorWhatsApp = "0895323449673";

            // Membuat URL untuk mengirim pesan WhatsApp
            var waURL = "https://api.whatsapp.com/send?phone=" + nomorWhatsApp + "&text=" + encodeURIComponent(pesan);

            // Buka tautan WhatsApp dalam tab baru
            window.open(waURL);
    }

    // Tambahkan event listener untuk tombol "remove-item" pada item baru
    newItem.querySelector('.remove-item').addEventListener('click', () => {
      newItem.remove();
    });
  }
  



