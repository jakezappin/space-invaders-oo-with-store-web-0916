
function CrewMember(obj){
  this.id = obj.id;
  this.position = obj.position;
  this.ship_id;
  this.currentShip = "Looking for a Rig";

  Store.data.crewMembers.push(this);
}

CrewMember.prototype.engageWarpDrive = function() {

  if(this.position === "Pilot" && this.ship_id !== undefined){
    this.currentShip.warpDrive = "engaged!"
  } else {
    return "had no effect"
  }

}

CrewMember.prototype.setsInvisibility = function() {

  if(this.position === "Defender" && this.ship_id !== undefined){
    this.currentShip.cloaked = true
  } else {
    return "had no effect"
  }
}

CrewMember.prototype.chargePhasers = function() {
  if(this.position === "Gunner" && this.ship_id !== undefined){
    this.currentShip.phasersCharge = "charged!"
  } else {
    return "had no effect"
  }

}

CrewMember.prototype.assignShip = function(spaceship) {
  this.ship_id = spaceship.id;
  this.currentShip = spaceship;
  this.currentShip.docked = false;
}
