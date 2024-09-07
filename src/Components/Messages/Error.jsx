import React from 'react'

function Error({error}) {
  return (
<>
{error &&
        <div class="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show" role="alert">
          {error}
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

      }
</>
  )
}

export default Error
