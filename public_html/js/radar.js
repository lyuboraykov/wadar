export class Radar {
  static init() {
    let adopt = new tr.models.Cycle('Adopt', 0);
    let assess = new tr.models.Cycle('Assess', 1);
    let trial = new tr.models.Cycle('Trial', 2);
    let hold = new tr.models.Cycle('Hold', 3);

    let radar = new tr.models.Radar();
    let toolsQuadrant = new tr.models.Quadrant('Tools');
    let techniquesQuadrant = new tr.models.Quadrant('Techniques');
    let platformsQuadrant = new tr.models.Quadrant('Platforms');
    let languageFramework = new tr.models.Quadrant('Languages & Frameworks');

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
      new tr.models.Blip('SnapCI', trial, true),
      new tr.models.Blip('Snowplow Analytics & Piwik', trial),
      new tr.models.Blip('Cloud-init', assess, true),
      new tr.models.Blip('Docker', assess, true),
      new tr.models.Blip('Octopus', assess),
      new tr.models.Blip('Sensu', assess, true),
      new tr.models.Blip('Travis for OSX/iOS', assess, true),
      new tr.models.Blip('Visual regression testing tools', assess, true),
      new tr.models.Blip('Xamarin', assess, true),
      new tr.models.Blip('Ant', hold, true),
      new tr.models.Blip('Heavyweight test tools', hold),
      new tr.models.Blip('TFS', hold)
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
      new tr.models.Blip('Bridging physical and digital worlds with simple hardware', assess, true),
      new tr.models.Blip('Collaborative analytics and data science', assess),
      new tr.models.Blip('Datensparsamkeit', assess, true),
      new tr.models.Blip('Development environments in the cloud', assess),
      new tr.models.Blip('Focus on mean time to recovery', assess),
      new tr.models.Blip('Machine image as a build artifact', assess),
      new tr.models.Blip('Tangible interaction', assess, true),
      new tr.models.Blip('Cloud lift and shift', hold, true),
      new tr.models.Blip('Ignoring OWASP Top 10', hold, true),
      new tr.models.Blip('Siloed metrics', hold, true),
      new tr.models.Blip('Velocity as productivity', hold, true)
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
      new tr.models.Blip('Vumi', trial),
      new tr.models.Blip('Akka', assess, true),
      new tr.models.Blip('Backend as a service', assess, true),
      new tr.models.Blip('Low-cost robotics', assess, true),
      new tr.models.Blip('PhoneGap/Apache Cordova', assess),
      new tr.models.Blip('Private Clouds', assess),
      new tr.models.Blip('SPDY', assess, true),
      new tr.models.Blip('Storm', assess, true),
      new tr.models.Blip('Web Components standard', assess, true),
      new tr.models.Blip('Big enterprise solutions', hold),
      new tr.models.Blip('CMS as a platform', hold, true),
      new tr.models.Blip('Enterprise Data Warehouse', hold, true)
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
      new tr.models.Blip('Web API', trial, true),
      new tr.models.Blip('Elixir', assess, true),
      new tr.models.Blip('Julia', assess, true),
      new tr.models.Blip('Nancy', assess),
      new tr.models.Blip('OWIN', assess),
      new tr.models.Blip('Pester', assess, true),
      new tr.models.Blip('Pointer Events', assess, true),
      new tr.models.Blip('Python 3', assess, true),
      new tr.models.Blip('TypeScript', assess, true),
      new tr.models.Blip('Yeoman', assess, true),
      new tr.models.Blip('Handwritten CSS', hold),
      new tr.models.Blip('JSF', hold, true)
    ]);

    radar.setFirstQuadrant(toolsQuadrant);
    radar.setSecondQuadrant(techniquesQuadrant);
    radar.setThirdQuadrant(platformsQuadrant);
    radar.setFourthQuadrant(languageFramework);

    let radarGraph = new tr.graphing.Radar(1080, radar);
    radarGraph.init('#radar').plot();
    let refTable = new tr.graphing.RefTable(radar);
    refTable.init('#ref-table').render();
  }
}
