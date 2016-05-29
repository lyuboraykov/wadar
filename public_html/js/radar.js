export class Radar {
  static init() {
    let adopt = new tr.models.Cycle('Популярни', 0);
    let assess = new tr.models.Cycle('Assess', 1);
    let trial = new tr.models.Cycle('Тестови', 2);
    let hold = new tr.models.Cycle('Издържали', 3);

    let radar = new tr.models.Radar();
    let toolsQuadrant = new tr.models.Quadrant('Инструменти');
    let techniquesQuadrant = new tr.models.Quadrant('Похвати');
    let platformsQuadrant = new tr.models.Quadrant('Платформи');
    let languageFramework = new tr.models.Quadrant('Езици');

    toolsQuadrant.add([
      new tr.models.Blip('D3', adopt),
      new tr.models.Blip('Dependency Management for JavaScript', adopt, true),
      new tr.models.Blip('Ansible', trial, true),
      new tr.models.Blip('Calabash', trial, true),
      new tr.models.Blip('Chaos Monkey', trial, true),
      new tr.models.Blip('Gatling', trial),
      new tr.models.Blip('Grunt.js', trial, true),
      new tr.models.Blip('Hystrix', trial),
      new tr.models.Blip('Icon fonts', trial),
      new tr.models.Blip('Librarian-puppet and Librarian-Chef', trial),
      new tr.models.Blip('Logstash & Graylog2', trial),
      new tr.models.Blip('Moco', trial, true),
      new tr.models.Blip('PhantomJS', trial),
      new tr.models.Blip('Prototype On Paper', trial, true),
    ]);
    techniquesQuadrant.add([
      new tr.models.Blip('Capturing client-side JavaScript errors', adopt),
      new tr.models.Blip('Continuous delivery for mobile devices', adopt),
      new tr.models.Blip('Mobile testing on mobile networks', adopt),
      new tr.models.Blip('Segregated DOM plus node for JS Testing', adopt, true),
      new tr.models.Blip('Windows infrastructure automation', adopt),
      new tr.models.Blip('Capture domain events explicitily', trial, true),
      new tr.models.Blip('Client and server rendering with same code', trial, true),
      new tr.models.Blip('HTML5 storage instead of cookies', trial),
      new tr.models.Blip('Instrument all the things', trial, true),
      new tr.models.Blip('Masterless Chef/Puppet', trial, true),
      new tr.models.Blip('Micro-services', trial),
      new tr.models.Blip('Perimeterless enterprise', trial),
      new tr.models.Blip('Provisioning testing', trial, true),
      new tr.models.Blip('Structured logging', trial, true),
    ]);
    platformsQuadrant.add([
      new tr.models.Blip('Elastic Search', adopt),
      new tr.models.Blip('MongoDB', adopt),
      new tr.models.Blip('Neo4J', adopt),
      new tr.models.Blip('Node.js', adopt),
      new tr.models.Blip('Redis', adopt),
      new tr.models.Blip('SMS and USSD as UI', adopt),
      new tr.models.Blip('Hadoop 2.0', trial),
      new tr.models.Blip('Hadoop as a service', trial, true),
      new tr.models.Blip('Open Stack', trial),
      new tr.models.Blip('PostgreSQL for NoSql', trial),
    ]);
    languageFramework.add([
      new tr.models.Blip('Clojure', adopt, true),
      new tr.models.Blip('Dropwizard', adopt),
      new tr.models.Blip('Scala, the good parts', adopt),
      new tr.models.Blip('Sinatra', adopt),
      new tr.models.Blip('CoffeeScript', trial),
      new tr.models.Blip('Go language', trial, true),
      new tr.models.Blip('Hive', trial, true),
      new tr.models.Blip('Play Framework 2', trial),
      new tr.models.Blip('Reactive Extensions across languages', trial, true),
    ]);

    radar.setFirstQuadrant(toolsQuadrant);
    radar.setSecondQuadrant(techniquesQuadrant);
    radar.setThirdQuadrant(platformsQuadrant);
    radar.setFourthQuadrant(languageFramework);

    let radarGraph = new tr.graphing.Radar(500, radar);
    radarGraph.init('#radar').plot();
    let refTable = new tr.graphing.RefTable(radar);
    refTable.init('#ref-table').render();
  }
}
