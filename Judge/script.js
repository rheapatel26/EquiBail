// Sample data array of lawyers with Indian names and data
const lawyers = [
    { id: 1, name: 'Rajesh Kumar', completed: 20 },
    { id: 2, name: 'Sunita Sharma', completed: 18 },
    { id: 3, name: 'Aman Pandey', completed: 30 },
    { id: 4, name: 'Priya Singh', completed: 22 },
    { id: 5, name: 'Vikram Desai', completed: 27 },
    { id: 6, name: 'Sneha Patel', completed: 19 },
    { id: 7, name: 'Ravi Mehta', completed: 34 },
    { id: 8, name: 'Neha Kapoor', completed: 20 },
    { id: 9, name: 'Anil Agarwal', completed: 15 },
    { id: 10, name: 'Pooja Joshi', completed: 28 },
    { id: 11, name: 'Sanjay Leela', completed: 12 },
    { id: 12, name: 'Divya Bharti', completed: 24 },
    // Additional rows can be added if needed
];

// Pagination variables
let currentPage = 1;
const rowsPerPage = 10; // Set to 10 rows per page

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
            <td>${lawyer.id}</td>
            <td>${lawyer.name}</td>
            <td>${lawyer.completed}</td>
        `;
        row.addEventListener('click', () => {
            // Redirect to the details page with the lawyer's ID
            window.location.href = `details.html?id=${lawyer.id}`;
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

// Initial render of the table
renderTable();
