// const changeHeading = () =>{
//   const heading=document.getElementById('heading')
//   heading.textContent="Yangi sarlavha";
// }
// const btn=document.getElementById('changeHeadingBtn')
// btn.addEventListener('click',changeHeading)

// const changeText = () => {
//   const text1 = document.querySelector("p");
//   text1.innerHTML =
//     "<p>Lorem ipsum dolor sit amet consectetur <br>adipisicing elit. Sapiente, temporibus <br>pariatur impedit error ratione illo! <br>Lorem ipsum dolor sit amet consectetur <br>adipisicing elit. Modi, labore tenetur <br>voluptas aliquid cum quo?</p>";
// };
// const tab1Btn = document.getElementById("tab1");
// tab1Btn.addEventListener("click", changeText);

// const changeText2 = () => {
//   const text2 = document.querySelector("p");
//   text2.textContent = "2-sarlavha";
// };
// const tab2Btn = document.getElementById("tab2");
// tab2Btn.addEventListener("click", changeText2);

// const changeText3 = () => {
//   const text3 = document.querySelector("p");
//   text3.textContent = "Yangi sarlavha3";
// };
// const tab3Btn = document.getElementById("tab3");
// tab3Btn.addEventListener("click", changeText3);

const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const formContainer = document.getElementById('form-container');
const btn= document.querySelector('.btn')

loginBtn.addEventListener('click', () => {
  formContainer.innerHTML = 
    `<form>
      <input type="text" id="username" name="username" placeholder="Username" required>
      <br>
      <input type="password" id="password" name="password" placeholder="Password" required>
      <br>
      <button onclick="change()" class="btn" type="submit">Login</button>
    </form>
  ;`
});

registerBtn.addEventListener('click', () => {
  formContainer.innerHTML = 
    `<form>
      <input type="text" id="username" name="username" placeholder="Username" required>
      <br>
      <input type="email" id="email" name="email" placeholder="Email" required>
      <br>
      <input type="password" id="password" name="password" placeholder="Password" required>
      <br>
      <input type="checkbox" name="Agree" id="" ><label for=""> Agree</label><br>
      <button onclick="change()" class="btn" type="submit">Register</button>
    </form>
  ;`
});

function change(){
  alert('Succesfully Completed');
}