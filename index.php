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
  <div class="wrapper">
    <form class="request" method="GET" action="results.php">
      <div class="field row">
        <label>Select number of hosts:</label>
        <select class="host" name="host">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
      <input type="submit" class="button" />
    </form>
  </div>
  
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="/js/special.js"></script>
</body>
</html>