function boardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;

  // veto — returns No, I must disagree

  this.veto = function(){
    return "No, I must disagree"
  }
}
