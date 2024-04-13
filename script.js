

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen",age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
  // console.log all the employees which have the profession of developer using the map function.
  arr.filter(x => x.profession === "developer").map(x => console.log(x));
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.filter(x => x.profession === "developer").forEach(x => console.log(x));
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmp={id:4,name:"susan",age:"20",profession:"intern"} ;
    arr.push(newEmp);
    console.log(arr);
  }
  arr.pop();// removing the last added object;
  function removeAdmin() {
    //Write your code here, just console.log
    const filteredEmployees = arr.filter(x => x.profession !== "admin");
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let a2= [
    {id: 4, name: "Adarsh", age: "22", profession: "software engineer" },
    { id: 5, name: "piyush", age: "23", profession: "BPSC officer" },
    { id: 6, name: "stupid", age: "21", profession: "IAS" },
    ];
    let newarr= arr.concat(a2);
    console.log(newarr);
  }
  