export class Radar {
  static draw(technologies) {
    let popular = new tr.models.Cycle('Популярни', 0),
        trial = new tr.models.Cycle('Тестови', 1),
        hold = new tr.models.Cycle('Издържали', 2),

        radar = new tr.models.Radar(),
        quadrantTechnologies = this.getQuadrantCategories(technologies);

    let quadrants = [];
    Object.keys(quadrantTechnologies).forEach(category => {
      let quadrant = new tr.models.Quadrant(category);
      Object.keys(quadrantTechnologies[category]).forEach(technology => {
        let type = trial;
        if (quadrantTechnologies[category][technology] > 4) {
          type = hold;
        } else if (quadrantTechnologies[category][technology] > 2) {
          type = popular;
        } else if (quadrantTechnologies[category][technology] > 0) {
          quadrant.add([
            new tr.models.Blip(technology, type, true)
          ]);
        }
      });
      quadrants.push(quadrant);
    });

    radar.setFirstQuadrant(quadrants[0]);
    radar.setSecondQuadrant(quadrants[1]);
    radar.setThirdQuadrant(quadrants[2]);
    radar.setFourthQuadrant(quadrants[3]);

    let radarGraph = new tr.graphing.Radar(500, radar);
    radarGraph.init('#radar').plot();
    let refTable = new tr.graphing.RefTable(radar);
    refTable.init('#ref-table').render();
  }

  static getQuadrantCategories(technologies) {
    let compareCategories = (c1, c2) => {
      return c2.count - c1.count;
    };
    let categoryQueue = new PriorityQueue({ comparator: compareCategories });

    Object.keys(technologies).forEach(category => {
      let currentCount = 0;
      Object.keys(technologies[category]).forEach(technology => {
        currentCount += technologies[category][technology];
      });
      categoryQueue.queue({
        name: category,
        count: currentCount
      });
    });
    let quadrantCategories = {};
    for (var i = 0; i < 4; i++) {
      let currentCatName = categoryQueue.dequeue().name;
      quadrantCategories[currentCatName] = technologies[currentCatName];
    }
    return quadrantCategories;
  }
}
