const proposalButton = document.querySelector('.proposal-button');

proposalButton.addEventListener('mouseover', function() {
    proposalButton.style.boxShadow = '0 0 15px rgba(255, 111, 97, 0.7), 0 0 25px rgba(255, 111, 97, 0.4)';
});

proposalButton.addEventListener('mouseout', function() {
    proposalButton.style.boxShadow = 'none';
});
