document.addEventListener('DOMContentLoaded', () => {
      const confettiContainer = document.getElementById('confetti-container');

      function createConfettiPiece() {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.width = `${Math.random() * 10 + 5}px`;
        piece.style.height = `${Math.random() * 10 + 5}px`;
        piece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        piece.style.top = `${Math.random() * 100}%`;
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.opacity = `${Math.random()}`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        piece.style.transition = `transform 2s ease-out, opacity 2s ease-out`;
        
        confettiContainer.appendChild(piece);

        setTimeout(() => {
          piece.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
          piece.style.opacity = '0';
          setTimeout(() => confettiContainer.removeChild(piece), 2000);
        }, 100);
      }

      for (let i = 0; i < 100; i++) {
        setTimeout(createConfettiPiece, i * 50);
      }
});

 // Get the modal
        var modal = document.getElementById("myModal");

        // Get the images and insert them inside the modal
        var img1 = document.getElementById("image1");
        var img2 = document.getElementById("image2");
        var img3 = document.getElementById("image3"); 
        var img4 = document.getElementById("image4");
        var img5 = document.getElementById("image5");
        var img6 = document.getElementById("image6");
        var img7 = document.getElementById("image7");
        var img8 = document.getElementById("image8");
        var modalImg = document.getElementById("modalImg");
        var modalTitle = document.getElementById("modalTitle");
        var modalTitle2 = document.getElementById("modalTitle2");
        var modalItem = document.getElementById("modalItem");
        var modalDescription = document.getElementById("modalDescription");
        var modalLocation = document.getElementById("modalLocation");
        var modalDistance = document.getElementById("modalDistance");

        img1.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Laptop";
            modalItem.innerText = "iPhone 12 Pro Max";
            modalDescription.innerText = "This is a detailed description of the iPhone 12 Pro Max. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "Dasmariñas, Cavite";
            modalDistance.innerText = "0.5 km";
}
        
        img2.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Headphones";
            modalItem.innerText = "Apple Airpods Pro";
            modalDescription.innerText = "This is a detailed description of the Apple Airpods Pro. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "Imus, Cavite";
            modalDistance.innerText = "1.5 km";
}
        img3.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Bag";
            modalItem.innerText = "LV Trainer White Black Panda";
            modalDescription.innerText = "This is a detailed description of the LV Trainer White Black Panda. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "Bacoor, Cavite";
            modalDistance.innerText = "2.5 km";
}
        img4.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Bike";
            modalItem.innerText = "Sony PlayStation 5 Disc Console";
            modalDescription.innerText = "This is a detailed description of the Sony PlayStation 5 Disc Console. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "General Trias, Cavite";
            modalDistance.innerText = "2 km";
}
        img5.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Tablets";
            modalItem.innerText = "Sony WH-1000XM5";
            modalDescription.innerText = "This is a detailed description of the Sony WH-1000XM5. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "Indang, Cavite";
            modalDistance.innerText = "1.7 km";
}
        img6.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Cellphone";
            modalItem.innerText = "MacBook Air M2";
            modalDescription.innerText = "This is a detailed description of the MacBook Air M2. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "Tanza, Cavite";
            modalDistance.innerText = "3.5 km";
}
        img7.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Motor";
            modalItem.innerText = "Low-End Mountain Bike";
            modalDescription.innerText = "This is a detailed description of the Low-End Mountain Bike. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "Silang, Cavite";
            modalDistance.innerText = "0.9 km";
}
        img8.onclick = function () {
            modal.classList.remove('hidden');
            modalImg.src = this.src;
            modalTitle.innerText = "Shoes";
            modalItem.innerText = "Crossbody Bag Shoulder Strap";
            modalDescription.innerText = "This is a detailed description of the Crossbody Bag Shoulder Strap. It includes information about its features, specifications, condition, and any other relevant details.";
            modalLocation.innerText = "Carmona, Cavite";
            modalDistance.innerText = "3 km";
        }


        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.classList.add('hidden');
        }

        // Close the modal when clicking outside of the modal content
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.classList.add('hidden');
            }
        }

        // Favorite button functionality
        var favoriteBtn = document.getElementById("favoriteBtn");

        favoriteBtn.onclick = function () {
            var item = {
                image: modalImg.src,
                title: modalItem.innerText,
                location: modalLocation.innerText,
                distance: modalDistance.innerText,
                description: modalDescription.innerText
            };

            if (!isInFavorites(item)) {
                addToFavorites(item);
                alert("Added to favorites!");
            } else {
                alert("Item is already in favorites!");
            }
        }

        function addToFavorites(item) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.push(item);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        function isInFavorites(item) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            return favorites.some(function (favorite) {
                return favorite.title === item.title;
            });
        }
    
