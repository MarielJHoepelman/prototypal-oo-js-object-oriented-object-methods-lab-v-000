function boardMember(name, homeState) {
  this.name = name;
  this.homeState = homeState;

  // veto — returns No, I must disagree

  this.veto = function(){
    return "No, I must disagree"
  }
}
