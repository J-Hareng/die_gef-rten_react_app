
  

export function check_ram_for_id(){
  try{
  let id = localStorage.getItem("User_id_18324QWehd9UuEds");
  if (id == null || id == undefined || id == "undefined"){ return false; } else { return true; }
  } 
  catch(err){
    return false;
  }
}
export function add_id_to_ram(id){
  localStorage.setItem("User_id_18324QWehd9UuEds", id);
}
export function remove_id_from_ram(){
  localStorage.removeItem("User_id_18324QWehd9UuEds", null)
}
export function get_from_ram_id(){
  let id = localStorage.getItem("User_id_18324QWehd9UuEds");
  console.log(id)
  return id;
}