export const handleErrorResponse = (error) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data.message || 'An error occurred';
      switch (status) {
        case 400:
          alert(`Validation Error: ${message}`);
          break;
        case 401:
          alert('Unauthorized: Please log in again.');
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          window.location.reload();
          break;
        case 403:
          alert('Forbidden: You do not have permission to perform this action.');
          break;
        case 404:
          alert('Not Found: The requested resource was not found.');
          break;
        case 409:
          alert(`Conflict: ${message}`);
          break;
        default:
          alert(`Error (${status}): ${message}`);
          break;
      }
    } else {
      alert(`Error: ${error.message}`);
    }
  };