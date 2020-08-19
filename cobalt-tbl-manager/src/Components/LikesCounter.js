import React from 'react'
import { useState } from 'react'

function LikesCounter() {

    const [count, updateCount] = useState(0)

    return (
        <>
        <button onClick={() => { updateCount(count + 1 )}}> Like </button><button onClick={() => { updateCount(count - 1 )}}> Dislike </button>
        <p>{count}</p>
        </>

    )
}

export default LikesCounter
