// Sample data array of lawyers with more details
const lawyers = [
    { name: 'Sumit Kumar', registration: 'R12345', license: 'LIC456', years: 20 },
    { name: 'Sunita Sharma', registration: 'R67890', license: 'LIC789', years: 18 },
    { name: 'Aman Patel', registration: 'R23456', license: 'LIC234', years: 30 },
    { name: 'Priya Singh', registration: 'R34567', license: 'LIC345', years: 22 },
    { name: 'Vikram Desai', registration: 'R45678', license: 'LIC456', years: 27 },
    { name: 'Sneha Patel', registration: 'R56789', license: 'LIC567', years: 19 },
    // Additional rows can be added if needed
];

// Pagination variables
let currentPage = 1;
const rowsPerPage = 5;

// Function to render the table based on the current page
function renderTable() {
    const tableBody = document.querySelector('#lawyerTable tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Calculate the starting and ending index for the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentLawyers = lawyers.slice(startIndex, endIndex);

    // Populate the table rows with data
    currentLawyers.forEach(lawyer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${lawyer.name}</td>
            <td>${lawyer.registration}</td>
            <td>${lawyer.license}</td>
            <td>${lawyer.years}</td>
        `;
        row.addEventListener('click', () => {
            // Show confirmation modal
            showConfirmationModal(lawyer.name);
        });
        tableBody.appendChild(row);
    });

    // Update pagination info and button states
    document.getElementById('pageInfo').textContent = `Page ${currentPage}`;
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = endIndex >= lawyers.length;
}

// Event listeners for pagination buttons
document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage * rowsPerPage < lawyers.length) {
        currentPage++;
        renderTable();
    }
});

// Show confirmation modal
function showConfirmationModal(lawyerName) {
    const modal = document.getElementById('confirmationModal');
    const nameSpan = document.getElementById('lawyerName');
    nameSpan.textContent = lawyerName;
    modal.style.display = 'flex';

    // Confirm button action
    document.getElementById('confirmBtn').addEventListener('click', () => {
        modal.style.display = 'none';
        alert(`We have sent your request to ${lawyerName}.`);
    });

    // Cancel button action
    document.getElementById('cancelBtn').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Initial render of the table
renderTable();
