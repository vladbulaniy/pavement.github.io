<?php
//if (isset($_POST['sendMessage'])) { } else;// ��������� ���� �� ������ ������ ���������
// �������� ������ �� ����� � ������� �� � �������
// ����� �� ����� ���������� ��� ������ �� ������� ����� ������, ����������� �������� � ��� �����
$name=$_POST['name'];
$lastname =$_POST['lastname'];
$message=$_POST['message'];
// ��������� ��������� � ���� ������
$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: sitename.com <noreply@sitename.com>\r\n";
$thm = "���� ������ \r\n";
$pname = iconv("utf-8", "cp1251", $name);
$plastname = iconv("utf-8", "cp1251", $lastname);
$pmessage = iconv("utf-8", "cp1251", $message);
$msg="���: $pname<br />
�������: $plastname<br />
���������:<br />$pmessage";

$mail_to="coollife@i.ua"; // ����� ���� ���������� ������
// ���������� �������� ���������
mail($mail_to, $thm, $msg, $headers);
$res = $pname.", ���� ��������� ������ ����������";
echo $res;

