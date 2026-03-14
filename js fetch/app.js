let list = document.getElementById('list')
    
fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
            res.map(item => {
                list.innerHTML += `
                <div style="display: flex; justify-content: center; gap: 10px; padding: 0 20px">
                    <div style="background-color: rgb(214, 211, 204);">
                        <div style="padding: 10px 15px 20px;">
                            <h1>${item.name}</h1>
                            <h3 style="color: white">${item.username}</h3>
                            <p style="color: rgb(66, 64, 64); font-style: italic;">${item.email}</p>
                            <p style="color: white; font-style: italic;font-weight : bold">ADDRESS</p>
                            <p style="color: rgb(66, 64, 64);">${item.address.street} -- ${item.address.suite}</p>
                            <p style="color: rgb(66, 64, 64);">${item.address.city} -- ${item.address.zipcode}</p>
                            <p style="color: rgb(66, 64, 64);">${item.address.geo.lat}</p>
                            <p style="color: rgb(66, 64, 64);">${item.address.geo.lng}</p>
                        </div>
                    </div>
                </div>
                `
            })
        })
    