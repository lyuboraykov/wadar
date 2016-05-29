import {Technologies} from './technologies';

export class Analyzer {
  constructor(text) {
    this.text = text;
  }

  get technologies() {
    return this.extractTechnologies();
  }

  extractTechnologies() {
    let technologies = {};
    Object.keys(Technologies).forEach(key => {
      let technologyType = key,
          technologyList = Technologies[key];
      technologies[key] = {};
      technologyList.forEach(technology => {
        let re = new RegExp(' ' + technology + '[ \.,]', "g"),
            technologyOccurences = (this.text.match(re) || []).length;
        technologies[key][technology] = technologyOccurences;
      });
    });
    return technologies;
  }
}
