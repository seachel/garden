import { Assert } from '../Assert/assert.js'

export class SeedProperties {

	private _daysToSprout : [number, number];
	get daysToSprout()
	{
	  return this._daysToSprout;
	}
	set daysToSprout(dayRange : [number, number])
	{
	  Assert.isSorted(dayRange);
	  Assert.isPositive(dayRange[0]);
	  Assert.isInteger(dayRange[0]);
	  Assert.isPositive(dayRange[1]);
	  Assert.isInteger(dayRange[1]);

	  this._daysToSprout = dayRange;
	}

	datePlanted : Date;

	dateSprouted : Date;

  //   TODO: more seed properties

	constructor(daysToSprout : [number, number], datePlanted : Date) {
	  this.daysToSprout = daysToSprout;
	  this.datePlanted = datePlanted;
	}
  }
