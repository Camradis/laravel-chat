<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Chat room</title>
    <link rel="stylesheet" href="css/app.css">

</head>
<body>
    <div id="app">
        <h1>Chatroom</h1>
        <chat-message></chat-message>
        <chat-log></chat-log>
        <chat-composer></chat-composer>
    </div>
    <script src="js/app.js" charset="UTF-8"></script>
</body>
</html>
