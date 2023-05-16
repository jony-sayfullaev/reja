console.log("frontend js");

const createField = document.getElementById("create-field");
const itemList = document.getElementById("item-list");

function createItemTemplate(item) {
  const listItem = document.createElement("li");
  listItem.classList.add(
    "list-group-item",
    "list-group-item-info",
    "d-flex",
    "align-items-center",
    "justify-content-between"
  );

  const itemText = document.createElement("span");
  itemText.classList.add("item-text");
  itemText.innerText = item.reja;

  const buttonContainer = document.createElement("div");

  const editButton = document.createElement("button");
  editButton.classList.add("edit-me", "btn", "btn-secondary", "btn-sm", "mr-1");
  editButton.setAttribute("data-id", item._id);
  editButton.innerText = "O'zgartirish";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-me", "btn", "btn-danger", "btn-sm");
  deleteButton.setAttribute("data-id", item._id);
  deleteButton.innerText = "Ochirish";

  buttonContainer.appendChild(editButton);
  buttonContainer.appendChild(deleteButton);

  listItem.appendChild(itemText);
  listItem.appendChild(buttonContainer);

  return listItem;
}

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = { reja: createField.value };

  axios
    .post("/create-item", formData)
    .then((response) => {
      const newItem = createItemTemplate(response.data);
      itemList.appendChild(newItem);

      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.error("Error creating item:", err);
    });
});
