$(document).ready(function() {
  // Show the add advertisement form when the button is clicked
  $("#add-ad-button").click(function() {
    let form = `
      <form id="add-ad-form">
        <div>
          <label for="photo">Photo:</label>
          <input type="text" id="photo" name="photo">
        </div>
        <div>
          <label for="heading">Heading:</label>
          <input type="text" id="heading" name="heading">
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea id="description" name="
