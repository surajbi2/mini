window.onload = function() {
    alert('Sorry if there are any grammar mistakes');
};

const proposalButton = document.querySelector('.proposal-button');

// Add hover effects
proposalButton.addEventListener('mouseover', function() {
    proposalButton.style.boxShadow = '0 0 15px rgba(255, 111, 97, 0.7), 0 0 25px rgba(255, 111, 97, 0.4)';
});

proposalButton.addEventListener('mouseout', function() {
    proposalButton.style.boxShadow = 'none';
});

// Add click event for alert
proposalButton.addEventListener('click', function() {
    alert('Will you marry me? 💍❤️');
});
