// // Regular expression for email validation
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// // Regular expression for phone number validation 
// const phoneRegex = /^\d{10}$/;

// document.getElementById("submitButton").addEventListener("click", submitForm);


// function submitForm() {
//   const form = document.getElementById("studentForm");
//   const emailInput = document.getElementById("email");
//   const phoneInput = document.getElementById("phone");

//   if (form.checkValidity() === false) {
//     event.preventDefault();
//     event.stopPropagation();
//   }

//   form.classList.add("was-validated");

//   if (form.checkValidity()) {
//     const name = document.getElementById("name").value;
//     const email = emailInput.value;
//     const phone = phoneInput.value;
//     const city = document.getElementById("city").value;
//     const state = document.getElementById("state").value;
//     const country = document.getElementById("country").value;
//     const gender = document.getElementById("gender").value;

//     // Validate email using regex
//     if (!emailRegex.test(email)) {
//       emailInput.classList.add("is-invalid");
//       return;
//     } else {
//       emailInput.classList.remove("is-invalid");
//     }

//     // Validate phone number using regex
//     if (!phoneRegex.test(phone)) {
//       phoneInput.classList.add("is-invalid");
//       return;
//     } else {
//       phoneInput.classList.remove("is-invalid");
//     }

//         const student = {
//           name,
//           email,
//           phone,
//           city,
//           state,
//           country,
//           gender,
//         };

//         // Save student object to local storage
//         let students = JSON.parse(localStorage.getItem("students")) || [];
//         students.push(student);
//         localStorage.setItem("students", JSON.stringify(students));
        
//         // // Close the modal
//         // const modal = new bootstrap.Modal(document.getElementById("formModal"));
//         // modal.hide();

//         $("#formModal").modal("hide");
            
//        // Reset the form
//         form.reset();
//         form.classList.remove("was-validated");

//         // Update the table with the stored data
//         updateTable();

//         // Reset the form
//         form.reset();
        
//       }
//     }

//     function updateTable() {
//       const students = JSON.parse(localStorage.getItem("students")) || [];
//       const tableBody = document.getElementById("studentTableBody");

//       // Clear the table body
//       tableBody.innerHTML = "";

//       // Generate table rows for each student
//       students.forEach((student, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//           <td>${index + 1}</td>
//           <td>${student.name}</td>
//           <td>${student.email}</td>
//           <td>${student.phone}</td>
//           <td>${student.city}</td>
//           <td>${student.state}</td>
//           <td>${student.country}</td>
//           <td>${student.gender}</td>
//           <td>
//             <button type="button" class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
//           </td>
//         `;

//         tableBody.appendChild(row);
//       });
//     }


//     function deleteStudent(index) {
//       const confirmModal = new bootstrap.Modal(document.getElementById("confirmModal"), {
//         backdrop: "static",
//         keyboard: false
//       });

//       const confirmModalYesBtn = document.getElementById("confirmModalYesBtn");

//       confirmModalYesBtn.onclick = function () {
//         let students = JSON.parse(localStorage.getItem("students")) || [];
//         students.splice(index, 1);
//         localStorage.setItem("students", JSON.stringify(students));
//         updateTable();
//         confirmModal.hide();
//       };

//       confirmModal.show();
//     }


//     // function deleteStudent(index) {
//     //   const confirmation = window.confirm("Are you sure you want to delete the row?");
//     //   if (confirmation) {
//     //     let students = JSON.parse(localStorage.getItem("students")) || [];
//     //     students.splice(index, 1);
//     //     localStorage.setItem("students", JSON.stringify(students));
//     //     updateTable();
//     //   }
//     // }



//     // Update the table when the page loads
//     updateTable();





// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Regular expression for phone number validation 
const phoneRegex = /^\d{10}$/;

document.getElementById("submitButton").addEventListener("click", submitForm);


function submitForm() {
  const form = document.getElementById("studentForm");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  form.classList.add("was-validated");

  if (form.checkValidity()) {
    const name = document.getElementById("name").value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
    const gender = document.getElementById("gender").value;

    // Validate email using regex
    if (!emailRegex.test(email)) {
      emailInput.classList.add("is-invalid");
      return;
    } else {
      emailInput.classList.remove("is-invalid");
    }

    // Validate phone number using regex
    if (!phoneRegex.test(phone)) {
      phoneInput.classList.add("is-invalid");
      return;
    } else {
      phoneInput.classList.remove("is-invalid");
    }

        const student = {
          name,
          email,
          phone,
          city,
          state,
          country,
          gender,
        };

        // Save student object to local storage
        let students = JSON.parse(localStorage.getItem("students")) || [];
        students.push(student);
        localStorage.setItem("students", JSON.stringify(students));
        
        // // Close the modal
        // const modal = new bootstrap.Modal(document.getElementById("formModal"));
        // modal.hide();

        $("#formModal").modal("hide");
            
       // Reset the form
        form.reset();
        form.classList.remove("was-validated");

        // Update the table with the stored data
        updateTable();

        // // Reset the form
        // form.reset();
        
      }
    }


    function updateTable() {
      const students = JSON.parse(localStorage.getItem("students")) || [];
      const tableBody = document.getElementById("studentTableBody");

      // Clear the table body
      tableBody.innerHTML = "";

      // Generate table rows for each student
      students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.phone}</td>
          <td>${student.city}</td>
          <td>${student.state}</td>
          <td>${student.country}</td>
          <td>${student.gender}</td>
          <td>
            <button type="button" class="btn btn-danger btn-sm delete-btn" onclick="toggleDelete(${index})">Delete</button>
            <button type="button" class="btn btn-success btn-sm tick-btn" onclick="confirmDelete(${index})">Yes</button>
            <button type="button" class="btn btn-secondary btn-sm close-btn" onclick="cancelDelete(${index})">No</button>
          </td>
        `;

        // Hide "Tick" and "Close" buttons by default
        row.querySelector(".tick-btn").style.display = "none";
        row.querySelector(".close-btn").style.display = "none";

        tableBody.appendChild(row);
      });
    }

    function toggleDelete(index) {
      const row = document.getElementById("studentTableBody").children[index];
      const deleteBtn = row.querySelector(".delete-btn");
      const tickBtn = row.querySelector(".tick-btn");
      const closeBtn = row.querySelector(".close-btn");

      // Toggle button visibility
      deleteBtn.style.display = "none";
      tickBtn.style.display = "inline-block";
      closeBtn.style.display = "inline-block";
    }

    function confirmDelete(index) {
      // Implement the logic to delete the row permanently from local storage and update the table here
      // For example:
      let students = JSON.parse(localStorage.getItem("students")) || [];
      students.splice(index, 1);
      localStorage.setItem("students", JSON.stringify(students));
      updateTable();
    }

    function cancelDelete(index) {
      const row = document.getElementById("studentTableBody").children[index];
      const deleteBtn = row.querySelector(".delete-btn");
      const tickBtn = row.querySelector(".tick-btn");
      const closeBtn = row.querySelector(".close-btn");

      // Toggle button visibility
      deleteBtn.style.display = "inline-block";
      tickBtn.style.display = "none";
      closeBtn.style.display = "none";
    }

    
    updateTable();
 
