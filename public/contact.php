<?php
// Enable error reporting for development (disable in production)
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

// Set content type to JSON
header('Content-Type: application/json');

// Allow CORS if needed (adjust origin as needed)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Método não permitido'
    ]);
    exit();
}

// Input validation function
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Validate email
function validate_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Get and sanitize POST data
$name = isset($_POST['name']) ? sanitize_input($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize_input($_POST['email']) : '';
$message = isset($_POST['message']) ? sanitize_input($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name) || strlen($name) < 2) {
    $errors[] = 'Nome inválido';
}

if (empty($email) || !validate_email($email)) {
    $errors[] = 'Email inválido';
}

if (empty($message) || strlen($message) < 10) {
    $errors[] = 'Mensagem muito curta';
}

// Check for validation errors
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Dados inválidos',
        'errors' => $errors
    ]);
    exit();
}

// Here you can add your logic to:
// 1. Send email
// 2. Save to database
// 3. Send to CRM
// etc.

// Example: Send email
$to = 'contato@oheor.com'; // Change to your email
$subject = 'Novo contato do site - ' . $name;
$email_message = "Nome: $name\n";
$email_message .= "Email: $email\n\n";
$email_message .= "Mensagem:\n$message";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Uncomment to actually send email
// $mail_sent = mail($to, $subject, $email_message, $headers);

// For demonstration, we'll just return success
$mail_sent = true;

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Mensagem enviada com sucesso!'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erro ao enviar mensagem. Tente novamente.'
    ]);
}

// Optional: Save to database
/*
try {
    $pdo = new PDO('mysql:host=localhost;dbname=oheor', 'username', 'password');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $message]);
    
} catch(PDOException $e) {
    error_log('Database error: ' . $e->getMessage());
}
*/
?>
