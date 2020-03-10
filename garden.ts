import { Assert } from '../Assert/assert.js';
import { SeedProperties } from './seedProperties.js';
import { ESunlight, PlantProperties } from './plantProperties.js';

abstract class Plant {

  private seedProperties : SeedProperties;

  private plantProperties : PlantProperties;

  constructor(seedProperties : SeedProperties, plantProperties : PlantProperties) {
    this.seedProperties = seedProperties;
    this.plantProperties = plantProperties;
    this.sproutDate = undefined;
  }

  sproutDate : Date | undefined;
}

class BrusselSprouts extends Plant {

  //   TODO: ensure something implemented only in inheriting classes? e.g. const with min and max range for days to sprout?

  constructor(plantingDate : Date = new Date()) {

    let seedProperties = new SeedProperties([7, 10], plantingDate);

    let plantProperties = { sunlight: ESunlight.partial };

    super(seedProperties, plantProperties);
  }
}

class Beans extends Plant {

  constructor(plantingDate : Date = new Date()) {

    let seedProperties = new SeedProperties([6,14], plantingDate);

    let plantProperties = { sunlight : ESunlight.full };

    super(seedProperties, plantProperties);
  }
}

class Tomato extends Plant {

  constructor(plantingDate : Date = new Date()) {

    let seedProperties = new SeedProperties([7,14], plantingDate);

    let plantProperties = { sunlight : ESunlight.full };

    super(seedProperties, plantProperties);
  }
}

class Lupin extends Plant {

	constructor(plantingDate : Date = new Date()) {

		let seedProperties = new SeedProperties([20, 30], plantingDate);

		let plantProperties = { sunlight : ESunlight.full };

		super(seedProperties, plantProperties);
	}
}

class Lettuce_Romaine extends Plant {

	constructor(plantingDate : Date = new Date()) {

		let seedProperties = new SeedProperties([7, 10], plantingDate);

		let plantProperties = { sunlight : ESunlight.partial };

		super(seedProperties, plantProperties);
	}
}

class Squash_Straightneck extends Plant {

	constructor(plantingDate : Date = new Date()) {

		let seedProperties = new SeedProperties([5, 12], plantingDate);

		let plantProperties = { sunlight : ESunlight.full };

		super(seedProperties, plantProperties);
	}
}



class Garden {

  private plants : Plant[];

  constructor(plants : Plant[] = []) {

    this.plants = plants;
  }

  addPlants(newPlants : Plant[])
  {
    this.plants = this.plants.concat(newPlants);
  }

  display()
  {
    console.log(this.plants);
  }
}

let corvusGarden = new Garden();

function febGardening() : Plant[]
{
  let date = new Date(2020, 2, 29);

  let plants = [];


  // We planted beans in four cells:

  let beanCount = 4;

  for (let i = 0; i < beanCount; i++){
    plants.push(new Beans(date))
  }


  // We planted tomatoes in four cells:

  let tomatoCount = 4;

  for (let i = 0; i < tomatoCount; i++){
    plants.push(new Tomato(date))
  }

  return plants;
}

corvusGarden.addPlants(febGardening())

corvusGarden.display();