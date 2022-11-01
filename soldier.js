const soldier = {
    name: 'Халк',
    health: 10,
    weapon: {
      model: 'ПП',
      bullets: 30,
    },
    supplies: 3,
  
    shoot() {
        let text;
        if(this.weapon.bullets >= 1){
            this.weapon.bullets -= 1; 
            text = 'Бах-бах';
        }else if(this.weapon.bullets < 1){
            text = 'Обойма пуста. Перезарядитесь';
        } 
        return text

    },
    recharge() {
        let text;
        if(this.weapon.supplies >= 1){
            this.weapon.supplies -=1;
            this.weapon.bullet ==30;
            text = 'Перезарядка...'; 
        }else{
            text = 'Не осталось припасов';
        }
        return text;
    },
    hurt() {
        let text = 'Ты проиграл!';
        if(this.health >= 1){
            this.health -= 1;
        }else{
            text = 'Ты проиграл!';

        }
        return text;
    }
} 
/*console.log(soldier.shoot(), soldier.recharge(), soldier.hurt());*/