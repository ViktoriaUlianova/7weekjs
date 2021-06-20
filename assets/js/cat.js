class Cat {


    constructor(catName, userName, phoneNumber, breed, gender, comment) {
        this.catName = catName;
        this.userName = userName;
        this.phoneNumber = phoneNumber;
        this.breed = breed;
        this.gender = gender;
        this.comment = comment;
    }

}

let formCat = document.getElementById('form');

formCat.addEventListener('submit', (ev) => {
    ev.preventDefault();
    let catNameForm = document.getElementById('name').value;
    let userNameForm = document.getElementById('name2').value;
    let phoneNumberForm = document.getElementById('phone').value;
    let breedForm = document.getElementById('breed').value;
    let genderForm = document.getElementById('gender').value;
    let commentForm = document.getElementById('comment').value;

    let catForm = new Cat(catNameForm, userNameForm, phoneNumberForm, breedForm, genderForm, commentForm);
    console.log(catForm);
})