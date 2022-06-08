function scuberGreetingForFeet(number){
if (number <= 400){
  return "This one is on me!";}

else if (number >= 2500){
    return "No can do.";
  }
else if (number >= 2000){
  return 'I will gladly take your thirty bucks.';
}

}
function ternaryCheckCity(city){
const cityMessage = city === "NYC"?"Ok, sounds good." : "No go.";
return cityMessage;}

function switchOnCharmFromTip(tip){
switch (tip) {
  case "generous":
    return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
      default:
      return "Bye.";
}
}