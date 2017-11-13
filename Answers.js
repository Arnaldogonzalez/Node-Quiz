1- Node.js is an open source server framework.
2- Yes, because only node.js packages comes with NPM.
3- res.sendFile()
4- bodyParser.json returns middleware that only parses json.
  Basically tells the system that you want json to be used
5- This function is responsible for serving static files.
7- The Event Loop is a queue of callback functions.
8- A function called at the completion of a given task.
9- When you excecute something synchronously you wait for it to finish before moving on to another task.
  When you excecute something asynchronously, you can move on to another task before it finishes.
10- The package.json is the root of the project. All the installed npm packages are stored in it.
11- fs module is used for file based operations.
12- open()
13- Because represents the name of the directory that the currently executing script resides in.
14- Yes
15- Node.JS solves this problem of supporting large number of concurrent users with good performance without blocking all server resources on single I/O operation.
16-ExpressJS
17-lionRouter.get('/:id', (req, res) => {
  Lion.findById(req.params.id, (err, lion) => {
    if (err) {
      res.send(err);
    }
    res.json(lion);
  });
});
18-Create, Recover, Update, Delete
19- Node.js was originally written by Ryan Dahl in 2009
20-exportando en el archivo donde esta y importandolo en el otro
