class Team {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
    };

    battle(damage) {
        for (let i = 0; i < this.avengers.length; i++) {
            this.avengers[i].hp -= damage.damage;

            if (this.avengers[i].hp <= 0) {
                this.avengers.splice(i, 1);
                i = i - 1;
            }
        }
    }

    calculateLosses(clonedTeam) {
        if (this.avengers.length >= clonedTeam.length) {
            console.log("We haven't lost anyone in this battle!");
        } else {
            let difference = clonedTeam.length - this.avengers.length;
            console.log(`In this battle we lost ${difference} Avengers.`);
        }
    }

    clone() {
        return this.avengers.slice();
    }
}

module.exports.Team = Team;
