             //====="chapter 21-25"=====
             //====="STRING METHOD"=====
             //====="QUESTION NO 1"===== 

    // let firstName = prompt("Enter your first name")
    // let lastName = prompt("Enter your last name")
    // let fullName = firstName + lastName
    // console.log(" Good evening " + fullName);

                //====="question no 2"=====

//  let userFavorite = prompt("Enter you favourite mobile phone model")
//  let userLength = userFavorite.length;
//  document.write("My favourite phone is: "+ userFavorite +"<br>"+"Length of string: "+userLength);

              //====="Question no 3"=====

    // let string = "Pakistani";
    // document.write("String: Pakistani"+"<br>"+"Index of 'n':"+string.indexOf("n"))

            //====="Question no 4"=====

  // let string = "Hello World";
  // document.write("String: "+string+"<br>"+"Last index of 'l': "+ string.lastIndexOf("l"))

            // ====="Question no 5"=====

  //  let string = "Pakistani";
  //  document.write("String: pakistani "+"<br>"+"Character at index 3: "+string.charAt("3"))
 
           //====="question no 6"=====

            // let firstName = "Areesha";
            // let lastName ="Waheed";
      //  document.write("Areesha " + "Waheed");

            //======"question no 7"=====

//  let cityHyder = "Hyderabad";

//  let cityIslam = cityHyder.replace("Hyder", "Islam");

//  document.write("City: " + cityHyder + "<br>");
//  document.write("After replacement: " + cityIslam)

            //====="question no 8"=====

// let sentence = "Ali and Sami are best friends. They play cricket and  football together."
// document.write(sentence.replaceAll("and","&"))



            //====="question no 9"=====

     //  let string = "472";
     //  let number = Number("472");
    //  document.write("Value: 472"+"<br>")
    //  document.write("Type: string "+"<br>")
    //  document.write("Value: "+number+"<br>");
     //  document.write("Type: "+ typeof number);

         //====="question no 10"=====

    //  let userInp = prompt("Enter name which you like")
    //  let show = userInp.toUpperCase(); 
    //  document.write("User input: "+userInp +"<br>");
    // document.write("upper case: "+show)

//====="question no 11"=====

//  let userInp = "javascript";
//  let show = userInp[0].toUpperCase()
//  let show2 = show + userInp.slice(1)
//  document.write(show2)

//====="question no 12"=====

// let num = 35.36;
// let num2 = num.toString()
// document.write("Number: 35.36"+"<br>");
// document.write("Result: "+num2.replace("." , ""));

// ====="question no 13"=====

//  function validateUsername(username) {
//      var specialSymbols = ['@', '.', ',', '!'];
//      for (var i = 0; i < specialSymbols.length; i++) {
//       if (username.includes(specialSymbols[i])) {
//         return false;
//        }
//      }
//      return true;
//    }
//     var username = prompt("Enter your username:");
  
//   if (validateUsername(username)) {
//    alert("Username is valid:", username);
//    } else {
//      alert("Please enter a valid username without special symbols [@ . , !].");
//    }
  

//  ====="question no 14"=====

//  let myArray = ["cake", "apple pie", "cookie", "chips", "patties"];

//  let flag = "<b>not available</b>";
// let askUser = prompt("What do you want to order sir/ma'am?");
//  askUser.toLowerCase();


//  for (var i = 0; i < myArray.length; i++) {
//      if (askUser === myArray[i]) {
//         flag = "<b>available</b>";
//     }
//  };

//  if (flag === "<b>available</b>") {
//      document.write(askUser + " is " + flag + " at index " + myArray.indexOf(askUser) + " in our bakery.");
//  }

//  else {
//     document.write("We are sorry. " + askUser + " is <b>not available</b> in our bakery.");
//  }


//  ====="question no 15"=====

// function validatePassword(password) {
//     var IthasAlphabets = /[a-zA-Z]/.test(password);
//      var IthasNumbers = /[0-9]/.test(password);
  
//      var startsWithAlphabet = /^[a-zA-Z]/.test(password);
  
//      var minimumLength = password.length >= 6;
  
//      return IthasAlphabets && IthasNumbers && startsWithAlphabet && minimumLength;
//   }
  
//    var password = prompt("Enter your password:");
  
//    if (validatePassword(password)) {
//      console.log("Password is valid:", password);
//    } else {
//      console.log("Please enter a valid password that meets the specified requirements.");
//    }
  
//  ====="question no 16"=====

// var university = "University of Karachi";

// let stringedArray;
//  for (let i = 0; i < university.length; i++) {
//      stringedArray = university[i].split(" ");
//      stringedArray = stringedArray.toString();
//      if (stringedArray === ",") {
//         stringedArray = " ";
//    }
//      document.write(stringedArray + "<br>");
//  }

//  ====="question no 17"=====

//  var userInput = prompt("Enter a word which you like most:");
//  var lastCharacter = userInput.charAt(userInput.length - 1);

//   console.log("Last character of input: " + lastCharacter);


//  ====="question no 18"=====

//  var sentence = "The quick brown fox jumps over the lazy dog";
//  var wordToCount = "the";
//  var count = 0;
 
//  var lowercaseSentence = sentence.toLowerCase();
 
//  var words = lowercaseSentence.split(" ");
 
//  for (var i = 0; i < words.length; i++) {
//    if (words[i] === wordToCount) {
//      count++;
//    }
//  }
 
//  console.log("The word 'the' appears " + count + " times.");
 

                        // ====="completed"=====