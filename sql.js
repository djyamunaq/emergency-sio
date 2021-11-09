var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('users.db')

db.serialize(function () {

  // Questions for teachers table
  db.run("CREATE TABLE questions (username INT, content TEXT, teacher TEXT)");

  //TEACHERS TABLE
  db.run("CREATE TABLE teacher (username TEXT, password TEXT,name TEXT,subject TEXT,userid INT)");

  db.run("INSERT INTO teacher (username,password,name, subject,userid) VALUES ('albert_ast','1234','Alberto Astuto','Física','1')");
  db.run("INSERT INTO teacher (username,password,name, subject,userid) VALUES ('jjtom','4567','João José Tomate','Química','2')");
  db.run("INSERT INTO teacher (username,password,name, subject,userid) VALUES ('rendesca','8910','Renan Descalço','Matemática','3')");
  

  //STUDENTS TABLE

  db.run("CREATE TABLE student (username TEXT, password TEXT,name TEXT,number TEXT, classroom TEXT, grade INT, userid INT, saldo INT)");

  db.run("INSERT INTO student (username,password, name, number,classroom, grade, userid,saldo) VALUES ('danielbueeno','1112','Daniel Bueno', '666','10', 20, 4, 1000)");
  db.run("INSERT INTO student (username,password, name, number,classroom, grade, userid,saldo) VALUES ('rafaelpereira','1314','Rafael Pereira', '777','11', 20, 5, 1000)");
  db.run("INSERT INTO student (username,password, name, number,classroom, grade, userid,saldo) VALUES ('denisyamunaque','1415','Denis Yamunaque', '888','12', 18, 6, 1000)");
 
})

db.close()