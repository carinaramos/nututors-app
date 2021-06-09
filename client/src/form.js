// need to convert this to tutors

const baseURL = '';
let currentDoc;
let submitType;
let patch_id = "";

const initResetButton = () => {
    // if you want to reset your DB data, click this button:
    document.querySelector('#reset').onclick = ev => {
        fetch(`${baseURL}/reset/`)
            .then(response => response.json())
            .then(data => {
                console.log('reset:', data);
            });
    };
};

const getDocs = () => {
    fetch(`${baseURL}/doctors`)
        .then(request => request.json())
        .then(createListOfDoctors)
        .then(attachEventHandlers)
}

const editDoc = () => {
    document.querySelector('#doctor').innerHTML = `
    
        <form>
            <div id="error"></div>
            <!-- Name -->
            <div>
            <label for="name">Name</label></div>
            <div><input type="text" id="name" value='${currentDoc.name}'>
            </div>

            <!-- Seasons -->
            <div>
            <label for="seasons">Seasons</label></div>
            <div><input type="text" id="seasons" value=${currentDoc.seasons}>
            </div>

            <!-- Ordering -->
            <div>
            <label for="ordering">Ordering</label></div>
            <div><input type="text" value=${currentDoc.ordering} id="ordering">
            </div>

            <!-- Image -->
            <div>
            <label for="image_url">Image</label></div>
            <div><input type="text" id="image_url" value=${currentDoc.image_url}>
            </div>

            <!-- Buttons -->
            <button class="btn btn-main" id="create">Save</button>
            <button class="btn" id="cancel">Cancel</button>
        </form> `;
    document.querySelector('#cancel').onclick = cancelEdit;
    submitType = "PATCH";
    patch_id = currentDoc._id;
    document.querySelector('#create').onclick = verifyAdd;
}
const createListOfDoctors = (data) => {
        const listItems = data.map(item => 
            `<div class="docTitle"><a href="#" data-id=${item._id}>${item.name}</a></div>`
        );
        
    document.querySelector('aside').innerHTML = `
        <button class="btn btn-main" onclick="addNewDoctor()">+</button>
        <div>
            ${listItems.join('')}
        </div>`        
        return data
    }

const attachEventHandlers = (data) => {
    // once the unordered list has been attached to the DOM
    // (by assigning the #artists container's innerHTML),
    // you can attach event handlers to the DOM:
    document.querySelectorAll('aside a').forEach(a => {
        a.onclick = showDetail;
    });
};

const showDetail = (ev) => {
    ev.preventDefault();
    const id = ev.currentTarget.dataset.id;
    fetch(`${baseURL}/doctors/${id}`)
        .then(response => response.json())
        .then(data => {
            document.querySelector('#doctor').innerHTML = `
            <div class="row">
            <h2>${data.name}</h2>
            </div>
            <p>Seasons: ${data.seasons}</p>
            <img class="docImg" src="${data.image_url}"/>
            <div>
            <button class="btn" id="edit">EDIT</button>
            <button class="btn" id="delete">DELETE</button>
            </div>
        `;
        currentDoc = data;
        console.log("currDoc", currentDoc);
            document.querySelector('#edit').onclick = editDoc;
            document.querySelector('#delete').onclick = deleteDoc;
        });
    fetch(`${baseURL}/doctors/${id}/companions`)
        .then(response => response.json())
        .then(data => {
            const compItems = data.map(item => `
                <div class="compCard">
                    <img class="compImg" src="${item.image_url}"/>
                    <a href="#" data-id="${item._id}">${item.name}</a>
                </div>`
            );
        document.querySelector('#companions').innerHTML = `<div>${compItems.join('')}</div>`    
        });
}

const cancelAdd = () => {
    document.querySelector('#doctor').innerHTML = ``
    document.querySelector('#companions').innerHTML = ``
    console.log("cancel add")
}

const verifyAdd = (ev) => {
    ev.preventDefault();
    // get data from the form
    const data = {
        name: document.getElementById('name').value,
        seasons: document.getElementById('seasons').value.split(','),
        ordering: document.getElementById('ordering').value,
        image_url: document.getElementById('image_url').value
    }
    console.log("data from form", data);
    let valid = true;
    let season_list_bad = false;
    // error if name is empty
    if (data.name == "") {
        valid = false;
    }
    if (data.seasons == "") {
        valid = false;
    }
    if (data.ordering == "") {
        valid = false;
    }

    if (data.seasons != "") {
        const season_list = data.seasons;
        for (i = 0; i < season_list.length; i++) {
            if (isNaN(season_list[i]) || parseInt(season_list[i] <= 0)) {
                season_list_bad = true;
                valid = false;
            }
        }
    }

    if (data.image_url == "" || data.image_url == "") {
        console.log("Image URL is a required field.");
        valid = false;
    }
    // if all inputs are good, make a post request
    if (valid == true) {
        console.log("form inputs are all good");
        // get rid of error message
        document.querySelector("#error").innerHTML = "";

        // send post request
        fetch(`${baseURL}/doctors/${patch_id}`, {
            method: `${submitType}`, 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                // send to catch block:
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .then(data => {
            console.log('Success:', data);
            // add new doc to aside panel
            currentDoc = data;
            getDocs();
            // display their details where the form was
            document.querySelector('#doctor').innerHTML = `
            <button class="btn" id="edit">edit</button>
            <button class="btn" id="delete">delete</button>
            <h2>${data.name}</h2>
            <p>${data.seasons}</p>
            <img class="docImg" src="${data.image_url}"/>
            <br>
        `;
            document.querySelector('#edit').onclick = editDoc;
            document.querySelector('#delete').onclick = deleteDoc;
        })
            
        
        .catch(err => {
            console.error(err);
            alert('Error!');
        });
        ev.preventDefault();
       
        
    }
    else {
        // post an error message
        let invalid = "";
        if (data.name == "") {
            document.querySelector("#error").innerHTML = "Invalid name.";
        }
        else if (data.seasons == "" || season_list_bad == true) {
            document.querySelector("#error").innerHTML = "Invalid seasons.";
        }
        else if (data.ordering == "") {
            document.querySelector("#error").innerHTML = "Invalid ordering.";
        }
        else if (data.image_url == "") {
            document.querySelector("#error").innerHTML = "Invalid image URL.";
        }
        document.getElementById("error").style.backgroundColor = "red";
    }
}

const deleteDoc = () => {
    const st = `${currentDoc.name}`;
    const data = {
        name: currentDoc.name,
        seasons: currentDoc.seasons,
        ordering: currentDoc.ordering,
        image_url: currentDoc.image_url
    }
    if (window.confirm("Do you really want to delete " + st + "?")) {
        console.log("confirm delete");
        // send DELETE request
        fetch(`${baseURL}/doctors/${currentDoc._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(getDocs)
            .then(document.querySelector('#doctor').innerHTML = "")
            .then(document.querySelector('#companions').innerHTML = "");
        
    }
}
const cancelEdit = () => {
    document.querySelector('#doctor').innerHTML = `
            <button class="btn" id="edit">edit</button>
            <button class="btn" id="delete">delete</button>
            <h2>${currentDoc.name}</h2>
            <p>Seasons: ${currentDoc.seasons}</p>
            <img class="docImg" src="${currentDoc.image_url}"/>
            <br>
        `;
    document.querySelector('#edit').onclick = editDoc;
    document.querySelector('#delete').onclick = deleteDoc;
}
const addNewDoctor = () => {

    fetch(`${baseURL}/doctors`)
        .then(response => response.json())
        .then(data => {
            
    document.querySelector('#doctor').innerHTML = `
        <form>
            <div id="error"></div>
            <!-- Name -->
            <div>
            <label for="name">Name</label><div>
            <div><input type="text" id="name">
            </div>

            <!-- Seasons -->
            <div>
            <label for="seasons">Seasons</label></div>
            <div><input type="text" id="seasons">
            </div>

            <!-- Ordering -->
            <div>
            <label for="ordering">Ordering</label></div>
            <div><input type="text" value=${data.length+1} id="ordering">
            </div>

            <!-- Image -->
            <div>
            <label for="image_url">Image</label></div>
            <div><input type="text" id="image_url">
            </div>

            <!-- Buttons -->
            <button class="btn btn-main" id="create">Save</button>
            <button class="btn" id="cancel">Cancel</button>
        </form> `;
        document.querySelector('#companions').innerHTML = "";
        document.querySelector('#cancel').onclick = cancelAdd;
        submitType = "POST";
        patch_id = "";
        document.querySelector('#create').onclick = verifyAdd;
    })

    
    
}
// invoke these functions when the page loads:
initResetButton();
getDocs();
