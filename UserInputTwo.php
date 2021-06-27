<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php ?>
    <form action = "index.php" method = "get">
      Name: <input type = "text" name = "name">
      <input type = "submit">
      <br>
      Age: <input type = "number" name = "age">
      <input type = "submit">
    </form> 
    <br>
    The name you entered is: <?php echo $_GET["name"] ?>
    <br>
    The age you entered is: <?php echo $_GET["age"] ?>
  </body>
</html>
