<?php
//if (isset($_POST['sendMessage'])) { } else;// ��������� ���� �� ������ ������ ���������
// �������� ������ �� ����� � ������� �� � �������
// ����� �� ����� ���������� ��� ������ �� ������� ����� ������, ����������� �������� � ��� �����
$name=$_POST['name'];
$telephone =$_POST['telephone'];

// ��������� ��������� � ���� ������
$headers  = "Content-type: text/html; charset=windows-1251 \r\n";
$headers .= "From: sitename.com <noreply@sitename.com>\r\n";
$thm = "���� ������ \r\n";
$pname = iconv("utf-8", "cp1251", $name);
$ptelephone = iconv("utf-8", "cp1251", $telephone);

$msg="���: $pname<br />
�������: $ptelephone<br />";

$mail_to="coollife@i.ua.ua"; // ����� ���� ���������� ������
// ���������� �������� ���������
mail($mail_to, $thm, $msg);
$res = $pname.", ���� ��������� ������ ����������";
echo $res;

