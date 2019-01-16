import React from 'react'
function Article() {
    const body = <section>body section </section>
    return(
        <div className='hello' style={{color:'blue'}}>
            <h2> Information </h2>
            {body}
            <h3>creation date: {(new Date()).toDateString()}</h3>
        </div>
    )
}

export default Article