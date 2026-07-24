<?php
include ('db.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="1px">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
        </tr>

        <?php
        $sql = "SELECT * FROM feedback_";
        $result = mysqli_query($conn, $sql);

        while($row = mysqli_fetch_assoc($result)) {
        ?>
        <tr>
            <td><?php echo $row['Id']; ?></td>
            <td><?php echo $row['Name']; ?></td>
            <td><?php echo $row['Email']; ?></td>
            <td><?php echo $row['Message']; ?></td>
        </tr>
        <?php
        }
        ?>
    </table>

    <a href="index.php">Back</a>
</body>
</html> 