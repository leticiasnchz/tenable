<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Tenable - Nessus UI Assessment</title>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" media="screen" href="/css/layout.css" />
</head>
<body>
  <header>
    <a class="logo" href="/"><span>Tenable</span></a>
  </header>
  <div id="app">
    <div class="results-wrapper">
      <table class="responsive-card-table unstriped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Host Name</th>
            <th>Port</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <paginate name="hostitems" :list="hostdataitems" :per="5">
            <tr v-for="item in paginated('hostitems')">
              <td>{{item.name}}</td>
              <td>{{item.hostname}}</td>
              <td>{{item.port}}</td>
              <td>{{item.username}}</td>
            </tr>
          </paginate>
        </tbody>
      </table>

      <paginate-links for="hostitems"></paginate-links>
    </div>
  </div>
  
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="/js/main.min.js"></script>
</body>
</html>