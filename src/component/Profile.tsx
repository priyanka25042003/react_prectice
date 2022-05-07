import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Profile() {
    const [loggedIn, setLoggedIn] = useState(3)

    //1,2,3
    return (
        <div>
            {loggedIn==1?
            <h1>Wlcome User1</h1>
            :loggedIn==2?<h1>Welcome User2</h1>
            :<h1>Welcome User3</h1>}
        </div>
    )
}


export default Profile;
