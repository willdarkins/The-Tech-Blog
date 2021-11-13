async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-url"]').value;
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/post/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#edit-btn').addEventListener('submit', editFormHandler);
  