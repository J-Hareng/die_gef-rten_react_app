const URL = "http://localhost:8080"
//what the server wants

//     id: Option<ObjectId>,
//     name: String,
//     teams: Option<Vec<String>>,
//     is_active: bool,
//     is_admin: bool,
//     password: String,

export function create_user(name, password){
    const user = {
        name: name,
        password: password,
        is_active: false,
        is_admin: false,   
    }
    return user
}
export async function check_user(name){
    let url = URL+"/users_taken/"+name

    try {
        let res = await fetch(url)
        let data = await res.json();
        console.log(data)
        if (await data == "1"){
            return true;
        }else{
            return false;
        }
    } catch (e) {
        console.log(e)
    }
    
}

export async function add_user(user) {
    if(user.name == undefined || user.password == undefined) { return; } // Check if user is valid
    else{ //sends user
        const url = URL + '/add_user';
        const userTaken = await check_user(user.name)
        console.log(userTaken);
        if (!userTaken){
            try{
                let res = await fetch(url, {    
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                console.log(res)
                let resJSON = await res.json()
                return resJSON;
            } catch(error) {
                console.error(`Constom error at 'add_user' \n ERROR: ` + error);
            };
        }
        else {
            console.error("USER TAKEN")
        }

    }
};




export default async function get_user(id){
    const url = URL + "/user/" + id;
    try {
        let res = await fetch(url)
        let user = await res.json()
        return user
    } catch (err){
        console.error(`Constom error at 'get_user' \n ERROR: ` + err);
    }
}




export async function update_user(user){
    if (user.id == undefined) { return; }
    const url = URL + "/user/" + user.id;
    try {
        let res = await fetch(url ,{
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        let updated_user = await res.json();
        return updated_user;
        
    } catch(error) {
        console.error(`Constom error at 'update_user' \n ERROR: ` + error);
    };
}


export async function delete_user(id){
    if (id == undefined) { return; }
    const url = URL + "/user/" + id;
    try {
        let res = fetch(url ,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        let msg = await res.json()
        return msg;
        
    } catch(error) {
        console.error(`Constom error at 'delete_user' \n ERROR: ` + error);
    };
}

export async function get_users(){
    const url = URL + "/users";
    try {
        let res = await fetch(url)
        let user = await res.json()
        return user;
    } catch (err){
        console.error(`Constom error at 'get_user' \n ERROR: ` + err);
        
    }

}
export async function login_user(name, password){
    const url = "http://localhost:8080/user_login"
    const data_tosend = {name: name, password: password}
    
    
    try {
        let res = await fetch(url ,{
            method: 'POST',
            body: JSON.stringify(data_tosend),
            headers: {
              'Content-Type': 'application/json'
            },

          })
        let msg = await res.json()
        return msg;
        
    } 
    catch(error) {
        console.error(`Constom error at 'login_user' \n ERROR: ` + error.message);
        return "none";
    };
}   

