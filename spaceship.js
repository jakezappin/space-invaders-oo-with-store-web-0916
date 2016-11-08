class Spaceship {
  constructor(obj){
    this.id = obj.id;
    this.name = obj.name;
    this.phasers = obj.phasers;
    this.shields = obj.shields;
    this.cloaked = false;
    this.warpDrive = "disengaged"
    this.docked = true;
    this.phasersCharge = "uncharged"
    this.hasCrew = false;

    Store.data.spaceships.push(this);
  }



}
