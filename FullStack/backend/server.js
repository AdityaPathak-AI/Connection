import express from "express";
const app = express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// });

//Jokes
app.get("/api/v1/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a Joke",
    },
    {
      id: 2,
      title: "A joke",
      content: "This is a Joke",
    },
    {
      id: 3,
      title: "A joke",
      content: "This is a Joke",
    },
    {
      id: 4,
      title: "A joke",
      content: "This is a Joke",
    },
    {
      id: 5,
      title: "A joke",
      content: "This is a Joke",
    },
    {
      id: 6,
      title: "A joke",
      content: "This is a Joke",
    },
    {
      id: 7,
      title: "A joke",
      content: "Thala for a reason",
    },
  ];
  res.send(jokes);
});

// const port = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () => {
  console.log("Serve at http://localhost:3000");
});
