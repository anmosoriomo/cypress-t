type Information = {
  name: string,
  lastName: string,
  email: string,
  gender: string,
  mobileNumber: number,
  hobbies: string[],
  currentAddress: string,
//   location: {
//     state: "Rajasthan",
//     city: "Jaipur",
//   },
};

type FormFields = {
  nameInput: string,
  lastNameInput: string,
  emailInput: string,
  genderInput: string,
  mobileNumberInput: string,
  hobbiesInput: string,
  addresInput: string,
  // location: {state: string, city: string,},
};

const personalInformation: Information = {
  name: "Holmes",
  lastName: "Salazar",
  email: "hibarras@email.com",
  gender: "Male",
  mobileNumber: 3656589156,
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
//   location: {
//     state: "Rajasthan",
//     city: "Jaipur",
//   },
};

export {Information, personalInformation, FormFields};
