import React from 'react'

function ActorItem({actor: {fullName}}) {
  return (
    <div>
        {fullName}
    </div>
  )
}

export default ActorItem