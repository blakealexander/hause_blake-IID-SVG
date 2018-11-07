<?php
$host = "localhost";
$user = "root";
$pw = "root";
$db = "db_svg-infographic";

$conn = mysqli_connect($host, $user, $pw, $db);

if (!$conn) {
    echo "No Connection!";
    die;
}

//echo "connected";

if (isset($_GET["label"])) {
    $theLabel = $_GET["label"];
    $myQuery = "SELECT * FROM tbl_svgs WHERE label='$theLabel'";

    $result = mysqli_query($conn, $myQuery);

    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
}
?> 