<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include("DbConnect.php");
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

$response = ['status' => 0, 'message' => 'Unknown error'];

switch ($method) {
    case 'POST':
        $raw_data = file_get_contents('php://input');
        $user = json_decode($raw_data);

        if ($user) {
            $sql = "SELECT * FROM formdata WHERE email = :email AND pin = :pin";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':pin', $user->pin);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result) {
                session_start();
                $_SESSION['user'] = $result;

                $status = $result['status'];
                $route = $result['route'];

                if ($status === 'approved') {
                    $response = [
                        'status' => 1,
                        'message' => 'User logged in successfully',
                        'route' => $route,
                        'userDetails' => [
                            'firstName' => $result['firstName'],
                            'lastName' => $result['lastName'],
                            'mobileNo' => $result['mobileNo'],
                            'institute' => $result['institute'],
                            'email' => $result['email'],
                            'address' => $result['address'],
                            'city' => $result['city'],
                            'userCategory' => $result['userCategory'],
                            'companyName' => $result['companyName'],
                            'status' => $result['status']
                        ]
                    ];
                } elseif ($status === 'pending') {
                    $response = [
                        'status' => 2,
                        'message' => 'Your request is still pending',
                        'route' => $route
                    ];
                } else {
                    $response = ['status' => 0, 'message' => 'Unknown status', 'route' => $route];
                }
            } else {
                $response = ['status' => 0, 'message' => 'Invalid email or pin', 'route' => null];
            }
        } else {
            $response = ['status' => 0, 'message' => 'Invalid JSON data', 'route' => null];
        }
        break;
}

// Set the Content-Type header to indicate JSON response
header('Content-Type: application/json');

// Send the response as JSON
echo json_encode($response);
