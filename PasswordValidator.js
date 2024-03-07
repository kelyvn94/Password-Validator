const input = document.querySelector('.input');
const seeIcon = document.querySelector('.seeIcon');
const checkedimg = document.getElementById("checkedimg");
var is_visible = false;

const see = () => {
  
}
const check = () => ({    

});
const hide = () => {
  if (is_visible) {
    is_visible = false;
    input.type = "password";
  } else {
    is_visible = true;
    input.type = "text";
  }
};
