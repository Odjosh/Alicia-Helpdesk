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


document.querySelectorAll(".edit-btn").forEach(button => {
  button.addEventListener("click", function () {
    const row = this.closest("tr");
    const cells = row.querySelectorAll("td");

    // Populate all modal fields
    document.getElementById("edit-ticket-id").value = cells[0].textContent.trim();
    document.getElementById("edit-subject").value = cells[1].textContent.trim();
    document.getElementById("edit-category").value = cells[2].textContent.trim();
    document.getElementById("edit-priority").value = cells[3].textContent.trim();
    document.getElementById("edit-status").value = cells[4].textContent.trim();
    document.getElementById("edit-assigned").value = cells[5].textContent.trim();
    document.getElementById("edit-createdby").value = cells[6].textContent.trim();
    document.getElementById("edit-location").value = cells[7].textContent.trim();
    document.getElementById("edit-phone").value = cells[8].textContent.trim();
    document.getElementById("edit-date").value = cells[9].textContent.trim();

    document.getElementById("edit-update").value = ""; // Clear previous update
    document.getElementById("editModal").style.display = "block";
  });
});

document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Example payload
  const ticketUpdate = {
    id: document.getElementById("edit-ticket-id").value,
    status: document.getElementById("edit-status").value,
    update: document.getElementById("edit-update").value
  };

  console.log("Submitting update:", ticketUpdate);

  alert("Changes saved (not yet connected to backend)");
  document.getElementById("editModal").style.display = "none";
});
