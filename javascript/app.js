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


//     // To Filter Table Rows
    
//     function searchTickets() {
//   const input = document.getElementById("ticketSearch");
//   const filter = input.value.toLowerCase();
//   const table = document.querySelector(".radio-table");
//   const rows = table.getElementsByTagName("tr");

//   for (let i = 1; i < rows.length; i++) {
//     const cells = rows[i].getElementsByTagName("td");
//     let rowText = "";
//     for (let j = 0; j < cells.length; j++) {
//       rowText += cells[j].textContent.toLowerCase() + " ";
//     }

//     rows[i].style.display = rowText.includes(filter) ? "" : "none";
//   }
// }

// // Reset Search Function

// function resetSearch() {
//   // 1. Clear the search input
//   document.getElementById("ticketSearch").value = "";

//   // 2. Show all rows
//   const rows = document.querySelectorAll(".radio-table tbody tr");
//   rows.forEach(row => {
//     row.style.display = "";
//     row.classList.remove("selected"); // 4. Remove highlight
//   });

//   // 3. Uncheck all radio buttons
//   const radios = document.querySelectorAll('input[type="radio"][name="ticketSelect"]');
//   radios.forEach(radio => {
//     radio.checked = false;
//   });
// }

function loadTicketDetails(radioBtn) {
    const row = radioBtn.closest('tr');
    if (!row) {
        alert("Unable to load ticket details.");
        return;
    }

    const cells = row.getElementsByTagName('td');

    // Map values from the table to modal inputs
    document.getElementById('edit-ticket-id').value = cells[1].textContent;
    document.getElementById('edit-subject').value = cells[2].textContent;
    document.getElementById('edit-category').value = cells[3].textContent;
    document.getElementById('edit-priority').value = cells[4].textContent;
    document.getElementById('edit-status').value = cells[5].textContent.toLowerCase(); // for dropdown match
    document.getElementById('edit-assigned').value = cells[6].textContent;
    document.getElementById('edit-createdby').value = cells[7].textContent;
    document.getElementById('edit-location').value = cells[8].textContent;
    document.getElementById('edit-phone').value = cells[9].textContent;
    document.getElementById('edit-date').value = cells[10].textContent;

    // Show the modal
    const modal = document.getElementById("editModal");
    modal.style.display = "block";
}

// Expose it to the global scope so inline onclick works
window.loadTicketDetails = loadTicketDetails;