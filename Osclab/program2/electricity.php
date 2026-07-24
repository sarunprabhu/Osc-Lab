<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electricity Bill</title>
</head>
<body>

<form method="post">
    Enter Units Consumed:
    <input type="text" name="units">
    <input type="submit" name="submit" value="Submit">
</form>

<?php
if(isset($_POST['submit'])){

    $units = $_POST['units'];
    $bill = 0;

    if($units <= 100){
        $bill = $units * 5;
    }
    elseif($units <= 200){
        $bill = (100 * 5) + (($units - 100) * 7);
    }
    elseif($units <= 300){
        $bill = (100 * 5) + (100 * 7) + (($units - 200) * 10);
    }
    else{
        $bill = (100 * 5) + (100 * 7) + (100 * 10) + (($units - 300) * 15);
    }

    echo "<h3>Total Bill: ₹$bill</h3>";
}
?>

</body>
</html>