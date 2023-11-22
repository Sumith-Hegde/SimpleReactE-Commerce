import "./Profile.css"

const Profile = ({ name, email, address, profileImageUrl }) => {
    return (
        <main className="container mt-4">
            <div className="row">
                <div className="col-md-6 details profileWidth">
                    <h2>User Profile</h2>
                    <hr />
                    <img src={process.env.PUBLIC_URL + profileImageUrl} alt="Profile" className="img-fluid" />

                    <div className="text-start">
                        <ul>
                            <li><strong>Name:</strong> {name}</li>
                            <li><strong>Email:</strong> {email}</li>
                            <li><strong>Address:</strong> {address}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile