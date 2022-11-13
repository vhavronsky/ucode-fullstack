const mysql = require('mysql2');
const config = require('./config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/user');


let valide;
exports.register = async (req, res) => {
    if(req.method === 'GET') {
        res.sendFile(__dirname + '/public/register.html');
    } else {
        console.log(req.body);
        // Валидация
        valid = await validate(req.body);
        //Создание
        console.log(valid);
        if(valid.status) {
            //создание пользователя
            let user = new User();
            let hashedPassword = await bcrypt.hash(req.body.password, 8)
            let result = user.save({
                login: req.body.login,
                password: hashedPassword,
                name: req.body.name,
                email: req.body.email            
            });
            
            if(result) {
                if(bcrypt.compare(req.body.password, req.body.confirmPass)){
                res.sendFile(__dirname + '/public/registerDone.html') 
                }
            }
        } else {
            res.send(render())
            // ошибкa
        }
    }
}
async function validate(data) {
    let user = new User();
    let status = true;
    let error = '';
    let result = await user.getList({login: data.login});
    if(result.length > 0) {
        status = false;
        error += "Login already used, please change! ";

    };
    let result1 = await user.getList({email: data.email});
    if(result1.length > 0) {
        status = false;
        error += "Email already used, please change! ";
    };

    return {status: !(result.length + result1.length), error: error};
}   

function render (){
     let result = '';
     result += `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Home page</title>
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
         <link rel="stylesheet" href="/style.css">
     </head>
     <body>
         <nav>
            <h4><a href="/">MySQL</a></h4>
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="/user/registretion">Register</a></li>
          </ul>
         </nav>
     
         <div class="container mt-4">
             <div class="card">
                 <div class="card-header">
                     Register form
                 </div>
                 <div class="card-body">
                 <form action="/user/registration" method="POST">
                     <div class="mb-3">
                     <label for="login" class="form-label">Login</label>
                     <input type="text" class="form-control" id="login" name="login" minlength="6" required>
                     </div>
                     <div class="mb-3">
                         <label for="password" class="form-label">Password</label>
                         <input type="password" class="form-control" id="password" name="password" minlength="6" required>
                     </div>
                     <div class="mb-3">
                         <label for="confirmPass" class="form-label">Confirm Password</label>
                         <input type="password" class="form-control" id="confirmPass" name="confirmPass" minlength="6" required>
                     </div>
                     <div class="mb-3">
                         <label for="name" class="form-label">Full name</label>
                         <input type="text" class="form-control" id="name" name="name" minlength="6" required>
                         </div>
                     <div class="mb-3">
                     <label for="email" class="form-label">Email Address</label>
                     <input type="email" class="form-control" id="email" name="email" required>
                     </div>
                 <button type="submit" class="btn btn-primary">Register User</button>
                 </form>
                 </div>
             </div>
            <h4 class="alert alert-danger mt-4">${valid.error}</h4>
         </div>         
         <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
     </body>
     </html>
     `;
     return result
}