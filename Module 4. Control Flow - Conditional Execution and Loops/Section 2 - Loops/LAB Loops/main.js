/*We can improve our contact list program a bit by using loops. You can now try to display not only the first or last contact, 
but all contacts in the list, regardless of their number.

Additionally, try to enclose the whole program in a loop so that the user is repeatedly asked what they want to do. The user can
choose to:

display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
After executing the selected action, the program will give the opportunity to choose again. The program should end the actions only
after the user gives a specified command, for example quit.*/

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let isOver=false;

while(!isOver){
    let option = prompt("display the first contact (first)\ndisplay the last contact (last)\ndisplay all contacts (all)\nadd a new contact (add)\nexit the program (quit)\n")
    switch(option){
        case "first":
            alert(`firts contact is \nname ${contacts[0].name}\nphone ${contacts[0].phone}\nemail ${contacts[0].email}`);
            break;

        case "last":
            let last = contacts.length - 1 ;
            alert(`firts contact is \nname ${contacts[last].name}\nphone ${contacts[last].phone}\nemail ${contacts[last].email}`);
            break;

        case "all":
            for(contact in contacts){
                alert(`name ${contacts[contact].name}\nphone ${contacts[contact].phone}\nemail ${contacts[contact].email}`);
            }
            break;

        case "add":
            let name=prompt("enter name");
            let phone=prompt("enter phone");
            let email=prompt("enter email");

            if(name === null || phone === null || email === null){
                alert("invalid inputs");
            }

            else {
                contacts.push({
                    name:name,
                    phone:phone,
                    email:email,
                });
            }
            break;

        case "quit":
            isOver=true;
            break;

        default:
            alert("invalid command");
            break;
    }
}