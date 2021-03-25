let user

function sithCheck(){
    let theCheck = prompt('Peace is a lie, there is only _____')

    while(theCheck.toLowerCase() != 'passion'){
        theCheck = prompt('Peace is a lie, there is only _____ (hint:its passion)');
    }

}

function getSubHeader(){

    if(confirm("Do you follow the Sith?")){
        document.write('Peace is a lie, there is only passion');
    } else if(confirm("Revere the Bene-Gesserit?")){
        document.write('I must not fear, fear is the mindkiller');
    } else {
        alert("Oh you're no fun then");
    }

}

function confirmSithF(){

    let confirmSith = confirm("Do you wish to learn of the Sith?");

    if(confirmSith == true){
        document.write( '<img id=\"sithim" src="https://www.astarwarscomic.com/wp-content/uploads/2017/09/TDL_Hi-RES_Header.jpg"></img>');
        document.write( '<p> Sith: "Only a Sith deal in absolutes" said the Jedi with absolute conviction. The Sith religion has been greatly dismissed as a small cult of fanatics but this is untrue. The Sith choose to teach in small group settings without the bloat of bureacracy. Do not beleive everything a space wizard paladin tells you kids. </p>' );
    } 
}

function confirmBeneF(){
    let confirmBene = confirm("Do you wish to learn of the Bene Gessserit?");

    if (confirmBene == true){
        document.write('<img id="beneim" src="https://i0.wp.com/screenagewasteland.com/wp-content/uploads/2019/06/bennegeserit-header-3.jpg?resize=768%2C384&ssl=1"> ');
        document.write('<p> Bene Gesserit: The Bene Gesserit order is a group of like minded women who have all decided that really, humanity can not be trusted with long term planning for itself. And who really can blame them for that, they do live in a galaxy with a bureucratic mess. They have taken it upon themselves to be the power behind the throne pulling the strings. It all sounds a bit dubious until you realize that they are just doing it for the children, the perfectly bred children. </p>');
    }
}

function userValidation(){

}