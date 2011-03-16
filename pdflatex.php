<?php
echo $_POST["editor"];
echo "\n";
echo lstat();	
$tex=fopen("/home/qianlong/LaTeX_online/tmp/editor.tex", "w");
fwrite($tex, $_POST["editor"]);
fclose($tex);
$result=shell_exec("pdflatex $tex");
echo $result;
?>