//--------------------Find/Findindex--------------------//

//findUserByUsername//
function findUserByUsername(array, value){
    return array.find(function(string){
        return string.value === value;
    });
}

//removeUser//
function removeUser(array, name) {
    let findIndex = array.findIndex(function(user){
      return user.name === name;
    })
    if(findIndex === -1) return;
  
    return array.splice(findIndex,1)[0];
  }

  //--------------------End--------------------//