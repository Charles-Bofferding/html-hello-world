//Alright, so these commands work in the console but not here. Going to bring this up tomorrow at lecture because it baffles me.

if(!confirm("Do you wish to learn of the Sith?")){
    document.querySelector("#sithsect").hidden = true;
} 

if (!confirm("Do you wish to learn of the Bene Gesserit?")){
    document.querySelector("#benesect").hidden = true;
}
