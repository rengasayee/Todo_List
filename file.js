// // const addItem = document.getElementById('add');
// // const task = document.getElementById('task');

// // task.innerHTML = addItem.value;

// document.getElementById('todo-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const addItem = document.getElementById('add');
//     const content = document.getElementById('content');

//     if (addItem.value.trim() !== "") {
//         const taskContainer = document.createElement('div');
//         taskContainer.className = 'task-container';

//         const task = document.createElement('p');
//         task.innerText = addItem.value;

//         const editButton = document.createElement('button');
//         editButton.className = 'edit';
//         editButton.innerText = 'Edit';
//         editButton.addEventListener('click', function() {
//             const newTask = prompt("Edit your task:", task.innerText);
//             if (newTask !== null) {
//                 task.innerText = newTask;
//             }
//         });

//         const deleteButton = document.createElement('button');
//         deleteButton.className = 'delete';
//         deleteButton.innerText = 'Delete';
//         deleteButton.addEventListener('click', function() {
//             content.removeChild(taskContainer);
//         });

//         taskContainer.appendChild(task);
//         taskContainer.appendChild(editButton);
//         taskContainer.appendChild(deleteButton);

//         content.appendChild(taskContainer);

//         addItem.value = '';
//     }
// });


// app.js
window.onload = () => {
	const form1 = document.querySelector("#addForm");

	let items = document.getElementById("items");
	let submit = document.getElementById("submit");

	let editItem = null;

	form1.addEventListener("submit", addItem);
	items.addEventListener("click", removeItem);
};

function addItem(e) {
	e.preventDefault();

	if (submit.value != "Submit") {
		console.log("Hello");

		editItem.target.parentNode.childNodes[0].data
			= document.getElementById("item").value;

		submit.value = "Submit";
		document.getElementById("item").value = "";

		document.getElementById("lblsuccess").innerHTML
			= "Text edited successfully";

		document.getElementById("lblsuccess")
						.style.display = "block";

		setTimeout(function() {
			document.getElementById("lblsuccess")
							.style.display = "none";
		}, 3000);

		return false;
	}

	let newItem = document.getElementById("item").value;
	if (newItem.trim() == "" || newItem.trim() == null)
		return false;
	else
		document.getElementById("item").value = "";

	let li = document.createElement("li");
	li.className = "list-group-item";

	let deleteButton = document.createElement("button");

	deleteButton.className =
		"btn-danger btn btn-sm float-right delete";

	deleteButton.appendChild(document.createTextNode("Delete"));

	let editButton = document.createElement("button");

	editButton.className =
			"btn-success btn btn-sm float-right edit";

	editButton.appendChild(document.createTextNode("Edit"));

	li.appendChild(document.createTextNode(newItem));
	li.appendChild(deleteButton);
	li.appendChild(editButton);

	items.appendChild(li);
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.classList.contains("delete")) {
		if (confirm("Are you Sure?")) {
			let li = e.target.parentNode;
			items.removeChild(li);
			document.getElementById("lblsuccess").innerHTML
				= "Text deleted successfully";

			document.getElementById("lblsuccess")
						.style.display = "block";

			setTimeout(function() {
				document.getElementById("lblsuccess")
						.style.display = "none";
			}, 3000);
		}
	}
	if (e.target.classList.contains("edit")) {
		document.getElementById("item").value =
			e.target.parentNode.childNodes[0].data;
		submit.value = "EDIT";
		editItem = e;
	}
}

function toggleButton(ref, btnID) {
	document.getElementById(btnID).disabled = false;
}
