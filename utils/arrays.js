var allLanguages = [];
var languages = ["JavaScript", "Ruby", "Phython", "CSS"]
var moreLanguages = {
  html: "HTML",
  php: "php"
}

function mapper(){
  return Object.keys(moreLanguages).map(function(key){
    var items = moreLanguages[key];
    console.log("mapper: ", items);
    return items;
  });
}

function concatArrays(){
 var newArray = languages.concat(mapper())
 console.log(newArray);
}

export { mapper, concatArrays }
