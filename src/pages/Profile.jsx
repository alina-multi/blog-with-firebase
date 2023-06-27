export default function Profile({currentUser}) {
    return (
    
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Profile</h1>
                    <p>Username: {currentUser.displayName}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>Verified: {currentUser.emailVerified ? "Yes" : "No"}</p>
                </div>
            </div>
        </div>
            
    )
        
        

}