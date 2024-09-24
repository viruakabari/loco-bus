document.addEventListener('DOMContentLoaded', function () {
    // Side Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sideMenu = document.getElementById('side-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mainContent = document.getElementById('main-content');

    menuToggle.addEventListener('click', function () {
        sideMenu.style.left = '0';
        mainContent.style.marginLeft = '250px';
    });

    closeMenuBtn.addEventListener('click', function () {
        sideMenu.style.left = '-250px';
        mainContent.style.marginLeft = '0';
    });

    // Sample Bus Data
    const buses = [
        { id: 1, name: "Loco Express", time: "08:00 AM", availableSeats: 20 },
        { id: 2, name: "Super Fast", time: "09:30 AM", availableSeats: 15 },
        { id: 3, name: "Comfort Travel", time: "10:00 AM", availableSeats: 10 },
    ];

    const busList = document.getElementById('bus-list');
    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const source = document.getElementById('source').value;
        const destination = document.getElementById('destination').value;
        const travelDate = document.getElementById('travel-date').value;

        // Clear previous results
        busList.innerHTML = '';

        // Filter buses (In real app, fetch from backend)
        buses.forEach(bus => {
            const busItem = document.createElement('div');
            busItem.classList.add('bus-item');
            busItem.innerHTML = `
                <h3>${bus.name} - ${bus.time}</h3>
                <p>Seats Available: ${bus.availableSeats}</p>
                <button class="btn" data-bus-id="${bus.id}">Book Now</button>
            `;
            busList.appendChild(busItem);
        });

        // Add event listener to "Book Now" buttons
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function() {
                const busId = this.getAttribute('data-bus-id');
                const selectedBus = buses.find(bus => bus.id == busId);
                alert(`You have booked ${selectedBus.name} for ${travelDate}.`);
            });
        });
    });
});
