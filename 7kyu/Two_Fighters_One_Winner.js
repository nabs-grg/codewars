function declareWinner(fighter1, fighter2, firstAttacker) {

if(firstAttacker == fighter1){

  fighter2.health -= fighter1.damagePerAttack;

  while(fighter1.health > 0 && fighter2.health > 0){
    fighter1.health -= fighter2.damagePerAttack;
    fighter2.health -= fighter1.damagePerAttack;
  }
  
    if(fighter1.health <= 0){
      return fighter2.name;
    }else{
      return fighter1.name;
    }

} else if(firstAttacker == fighter2){
  
  fighter1.health -= fighter2.damagePerAttack;
  
    while(fighter1.health > 0 && fighter2.health > 0){
    fighter2.health -= fighter1.damagePerAttack;
    fighter1.health -= fighter2.damagePerAttack;
    
    }
    
    if(fighter2.health <= 0){
      return fighter1.name;
    }else{
      return fighter2.name;
    }
    
  }
}