<?php
//if (isset($_POST['sendMessage'])) { } else;// проверяем была ли нажата кнопка ОТПРАВИТЬ
// получаем данные из формы и заносим их в массивы
// здесь же нужно обработать все данные на предмет длины строки, запрещенных символов и так далее
$name=$_POST['name'];
$lastname =$_POST['lastname'];
$message=$_POST['message'];
// формируем заголовок и тело письма
$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: sitename.com <noreply@sitename.com>\r\n";
$thm = "Тема письма \r\n";
$pname = iconv("utf-8", "cp1251", $name);
$plastname = iconv("utf-8", "cp1251", $lastname);
$pmessage = iconv("utf-8", "cp1251", $message);
$msg="Имя: $pname<br />
Фамилия: $plastname<br />
Сообщение:<br />$pmessage";

$mail_to="coollife@i.ua"; // почта куда отправлять письмо
// Отправляем почтовое сообщение
mail($mail_to, $thm, $msg, $headers);
$res = $pname.", Ваше сообщение удачно отправлено";
echo $res;

