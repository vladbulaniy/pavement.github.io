<?php
//if (isset($_POST['sendMessage'])) { } else;// проверяем была ли нажата кнопка ОТПРАВИТЬ
// получаем данные из формы и заносим их в массивы
// здесь же нужно обработать все данные на предмет длины строки, запрещенных символов и так далее
$name=$_POST['name'];
$telephone =$_POST['telephone'];

// формируем заголовок и тело письма
$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: sitename.com <noreply@sitename.com>\r\n";
$thm = "Тема письма \r\n";
$pname = iconv("utf-8", "cp1251", $name);
$ptelephone = iconv("utf-8", "cp1251", $telephone);

$msg="Имя: $pname<br />
Телефон: $ptelephone<br />";

$mail_to="coollife@i.ua.ua"; // почта куда отправлять письмо
// Отправляем почтовое сообщение
mail($mail_to, $thm, $msg);
$res = $pname.", Ваше сообщение удачно отправлено";
echo $res;

