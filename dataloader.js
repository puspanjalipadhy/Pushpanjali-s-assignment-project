let usersData = [
  {
    email: "abc@abc.com",
    password: "1234",
  },
  {
    email: "xyz@xyz.com",
    password: "5678",
  },
//   {
//     email: "pp@pp.com",
//     password: "1111",
//   },
//   {
//     email: "zz@zz.com",
//     password: "2222",
//   },
//   {
//     email: "aa@aa.com",
//     password: "3333",
//   },
//   {
//     email: "bb@bb.com",
//     password: "4444",
//   },
//   {
//     email: "cc@cc.com",
//     password: "5555",
//   },
//   {
//     email: "dd@dd.com",
//     password: "6666",
//   },
];

let emailData = [
  {
    id: 1,
    from: "xyz@xyz.com",
    to: "abc@abc.com",
    subject: "hello abc",
    body: "hello abc",
  },
  {
    id: 2,
    from: "pp@pp.com",
    to: "xyz@xyz.com",
    subject: "hello xyz",
    body: "hello xyz",
  },
  {
    id: 3,
    from: "aa@aa.com",
    to: "bb@bb.com",
    subject: "hello hi",
    body: "how are you",
  },
  {
    id: 4,
    from: "cc@cc.com",
    to: "xyz@xyz.com",
    subject: "hi xyz",
    body: "hi xyz",
  },
  {
    id: 5,
    from: "xyz@xyz.com",
    to: "bb@bb.com",
    subject: "hello hi",
    body: "how are you",
  },
  {
    id: 6,
    from: "bb@bb.com",
    to: "zz@zz.com",
    subject: "hello hi",
    body: "how are you",
  },
  {
    id: 7,
    from: "cc@cc.com",
    to: "pp@pp.com",
    subject: "hello hi",
    body: "how are you",
  },
  {
    id: 8,
    from: "aa@aa.com",
    to: "abc@abc.com",
    subject: "hi abc",
    body: "hi abc",
  },
];

const init = () => {
  console.log("init called...");
  users = localStorage.usersData;
  if (!users) {
    localStorage.usersData = JSON.stringify(usersData);
  }

  mails = localStorage.mails;
  if (!mails) {
    localStorage.mails = JSON.stringify(emailData);
  }
};
