function Dashboard({onLogout}) {
    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>Dashboard</h1>
                <p>Welcome to your dashboard! Here you can manage your account and view your activity.</p>
                <button onClick={onLogout} style={{margin:"20px"}}>Logout</button>
            </div>
        </>
    );
}
export default Dashboard;
