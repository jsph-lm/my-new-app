console.clear();
const app = document.getElementById("app");

const facebookPost = {
  user: {
    profilePicture:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    firstName: "Joe",
    lastName: "Goldberg"
  },
  datePosted: "14.03.2023",
  text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  views: 3,
  Comments: [
    {
      user: {
        profilePicture:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        firstName: "Steven",
        lastName: "Jacobson"
      },
      text: "nice one",
      datePosted: "15.03.2023",
      replies: [
        {
          user: {
            profilePicutre:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            firstName: "Jenny",
            lastName: "Skye"
          },
          text: "cool",
          datePosted: "15.03.2023"
        }
      ]
    }
  ]
};

app.innerHTML += `
  <div>${facebookPost.user.firstName}</div>
  <div>${facebookPost.user.lastName}</div>
    <div>${facebookPost.datePosted}</div>
  <div>${facebookPost.text}</div>
 
  `;

// exmample image: https://www.google.com/imgres?imgurl=https%3A%2F%2Fnapoleoncat.com%2Fwp-content%2Fuploads%2F2022%2F07%2Ffacebook-interactive-posts-innocents-fb-post.jpg&tbnid=0aqIx0JGhnmcUM&vet=12ahUKEwip0Ifgpur9AhVQvicCHT25CGQQMygVegUIARCKAg..i&imgrefurl=https%3A%2F%2Fnapoleoncat.com%2Fblog%2Ffacebook-interactive-posts%2F&docid=41IexaheooD2SM&w=842&h=632&q=facebook%20post&ved=2ahUKEwip0Ifgpur9AhVQvicCHT25CGQQMygVegUIARCKAg#imgrc=Rw-2PLhui1PDDM&imgdii=ZvQpSlW3Li41JM
