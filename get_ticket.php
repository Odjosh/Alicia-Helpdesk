<?php
if (isset($_GET['id'])) {
    $id = $_GET['id'];

    // DB connection
    $conn = new mysqli('localhost', 'root', '', 'alicia_helpdesk');
    if ($conn->connect_error) {
        echo json_encode(['error' => 'DB connection failed']);
        exit;
    }

    $stmt = $conn->prepare("SELECT id, subject, status, description FROM tickets WHERE id = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $result = $stmt->get_result()->fetch_assoc();

    echo json_encode($result);
    $stmt->close();
    $conn->close();
}
?>