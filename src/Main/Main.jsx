function Main() {
    return (
        <div>
            <h1 className="text-4xl text-center">Welcome to Always Greener Lawn Care</h1>
            <p className="text-center">We are a full-service lawn care company that specializes in making your lawn look its best.</p>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-4xl w-80">Professional Lawn Care Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo metus, tincidunt eu condimentum sit amet, lacinia id augue. Nulla vitae venenatis mauris, at dignissim neque. Duis a dui egestas purus tincidunt vehicula a eget ante. Vestibulum ut tristique erat. Cras aliquet tempus congue. Maecenas in ipsum rutrum, tempor ligula non, mattis augue. Donec dignissim urna non est rhoncus, id elementum enim mattis. Nam molestie mauris est, quis gravida elit condimentum vitae. </p>
                    <button className="bg-green-700 text-white p-4 rounded-lg font-bold cursor-pointer">GET IN TOUCH</button>
                </div>
                <img src="https://images.unsplash.com/photo-1630709437002-0e8edf73f8f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGF3biUyMGNhcmV8ZW58MHx8MHx8fDA%3D" alt="lawn care" />
            </div>
        </div>
    )
}

export default Main;
