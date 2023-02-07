const openFormButton = document.getElementById('openFormButton');
const newPostForm = document.getElementById('newPostForm');
const postsContainer = document.getElementById('postsContainer');
const submitButton = document.querySelector('form button[type="submit"]');

openFormButton.addEventListener('click', function() {
  newPostForm.style.display = 'block';
});

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

  const photo = document.getElementById('photoInput').files[0];
  const heading = document.getElementById('headingInput').value;
  const description = document.getElementById('descriptionInput').value;

  const postHTML = `
    <div class="post">
      <h2>${heading}</h2>
      <img src="${URL.createObjectURL(photo)}" alt="${heading}">
      <p>${description}</p>
    </div>
  `;

  postsContainer.insertAdjacentHTML('beforeend', postHTML);
  newPostForm.reset();
  newPostForm.style.display = 'none';
});
