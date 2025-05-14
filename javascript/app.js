const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=>{
       ul.classList.remove('show') 
       ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSubMenu(button) {
     button.nextElementSibling.classList.toggle('show')
     button.classList.toggle('rotate') 

     if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
     }
}

 document.addEventListener("DOMContentLoaded", function () {
      const rows = document.querySelectorAll("#ticket-table-body tr");

      rows.forEach(row => {
        const priorityCell = row.cells[3];
        if (priorityCell) {
          const priority = priorityCell.textContent.trim().toLowerCase();

          switch (priority) {
            case "low":
              priorityCell.classList.add("priority-low");
              break;
            case "medium":
              priorityCell.classList.add("priority-medium");
              break;
            case "high":
              priorityCell.classList.add("priority-high");
              break;
            case "critical":
              priorityCell.classList.add("priority-critical");
              break;
          }
        }
      });
    });


    // To Filter Table Rows
    
    function searchTickets() {
  const input = document.getElementById("ticketSearch");
  const filter = input.value.toLowerCase();
  const table = document.querySelector(".radio-table");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    let rowText = "";
    for (let j = 0; j < cells.length; j++) {
      rowText += cells[j].textContent.toLowerCase() + " ";
    }

    rows[i].style.display = rowText.includes(filter) ? "" : "none";
  }
}

// Reset Search Function

function resetSearch() {
  // 1. Clear the search input
  document.getElementById("ticketSearch").value = "";

  // 2. Show all rows
  const rows = document.querySelectorAll(".radio-table tbody tr");
  rows.forEach(row => {
    row.style.display = "";
    row.classList.remove("selected"); // 4. Remove highlight
  });

  // 3. Uncheck all radio buttons
  const radios = document.querySelectorAll('input[type="radio"][name="ticketSelect"]');
  radios.forEach(radio => {
    radio.checked = false;
  });
}

function loadTicketDetails(radio) {
  const ticketId = radio.closest('tr').dataset.ticketId;

  // Optional: visually mark selected
  document.querySelectorAll('.radio-table tbody tr').forEach(row => row.classList.remove('selected'));
  radio.closest('tr').classList.add('selected');

  // Show the modal
  document.getElementById('editModal').classList.remove('hidden');

  // Fetch ticket details
  fetch(`get_ticket.php?id=${ticketId}`)
    .then(response => response.json())
    .then(data => {
      // Fill read-only fields
      document.getElementById('edit-ticket-id').value = data.id || '';
      document.getElementById('edit-subject').value = data.subject || '';
      document.getElementById('edit-category').value = data.category || '';
      document.getElementById('edit-priority').value = data.priority || '';
      document.getElementById('edit-assigned').value = data.assigned_to || '';
      document.getElementById('edit-createdby').value = data.created_by || '';
      document.getElementById('edit-location').value = data.location || '';
      document.getElementById('edit-phone').value = data.phone_number || '';
      document.getElementById('edit-date').value = data.date_created || '';

      // Fill editable status
      document.getElementById('edit-status').value = data.status || 'Open';

      // Clear previous update message
      document.getElementById('edit-update').value = '';
    })
    .catch(error => {
      console.error('Error loading ticket:', error);
      alert('Unable to load ticket details.');
    });
}

function closeModal() {
  document.getElementById('editModal').classList.add('hidden');
}