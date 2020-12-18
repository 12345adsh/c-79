 name_of_the_students_array=[];
function submit(){
    var student_1 = document.getElementById("stuent_name_1").value;
    var student_2 = document.getElementById("stuent_name_2").value;
    var student_3 = document.getElementById("stuent_name_3").value;
    var student_4 = document.getElementById("stuent_name_4").value;

    name_of_the_students_array.push(student_1);
    name_of_the_students_array.push(student_2);
    name_of_the_students_array.push(student_3);
    name_of_the_students_array.push(student_4);

    console.log(name_of_the_students_array);

    document.getElementById("displayname").innerHTML = name_of_the_students_array ;
    document.getElementById("submitbutton").style.display = "none";
    document.getElementById("sortbutton").style.display = "inlineblock";
}
function sort(){
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);
    document.getElementById("displayname").innerHTML = name_of_the_students_array;
}