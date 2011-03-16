/********************
* JS of buttons in toolbar
* Editor: Qianlong
*********************/

$(document).ready(function()	{
    $('#editor').markItUp(mySettings);

/*********** creer article par un model  **************/
    $('#articleF').click(function() {
	$.markItUp( { openWith:'\\documentclass[french]{article}\n\\usepackage[utf8]{inputenc}\n\\usepackage[T1]{fontenc}\n\\usepackage{lmodern}\n\\usepackage[a4paper]{geometry}\n\\usepackage{babel}\n\\begin{document}\n', closeWith:'\n\\end{document}'});
	return false;
    });
    $('#article').click(function() {
	$.markItUp( { openWith:'\\documentclass[]{article}\n\n%opening\n\\title{}\n\\author{}\n\n\\begin{document}\n', closeWith:'\n\\maketitle\n\n\\begin{abstract}\n\n\\end{abstract}\n\n\\section{}\n\n\\end{document}'});
	return false;
    });
    $('#beamer').click(function() {
	$.markItUp( { openWith:'\\documentclass{beamer}\n\n\\usepackage{default}\n\n\\begin{document}\n', closeWith:'\n\\end{document}'});
	return false;
    });
    $('#book').click(function() {
	$.markItUp( { openWith:'\\documentclass[]{book}\n\\begin{document}\n', closeWith:'\n\\end{document}'});
	return false;
    });
    $('#haprosper').click(function() {
	$.markItUp( { openWith:'\\documentclass[pdf]{prosper}\n\n\usepackage[HA]{HA-prosper}\n\n\\begin{document}\n', closeWith:'\n\\end{document}'});
	return false;
    });
    $('#letter').click(function() {
	$.markItUp( { openWith:'\\documentclass[]{letter}\n\n\n\\begin{document}\n% If you want headings on subsequent pages,\n% remove the ``%\'\' on the next line:\n% \\pagestyle{headings}\n', closeWith:'\n\\begin{letter}{TO_ADDRESS}\n\\address{ADDRESS}\n\n\\opening{SALUTATION}\n\n\n\n\n\n\\signature{}\n\n\\closing{}\n\n%enclosure listing\n%\\encl{}\n\n\\end{letter}\n\\end{document}'});
	return false;
    });
    $('#prosper').click(function() {
	$.markItUp( { openWith:'\\documentclass[pdf]{prosper}\n\n\n\\begin{document}\n', closeWith:'\n\\end{document}'});
	return false;
    });
    $('#report').click(function() {
	$.markItUp( { openWith:'', closeWith:'\\documentclass[]{report}\n\n\n% Title Page\n\\title{}\n\\author{}\n\n\n\\begin{document}\n\\maketitle\n\n\\begin{abstract}\n\\end{abstract}\n\n\\end{document}'});
	return false;
    });
    $('#srcartcl').click(function() {
	$.markItUp( { openWith:'', closeWith:'\\documentclass[]{scrartcl}\n\n%opening\n\\title{}\n\\author{}\n\n\\begin{document}\n\n\\maketitle\n\n\\begin{abstract}\n\n\\end{abstract}\n\n\\section{}\n\n\\end{document}'});
	return false;
    });
    $('#srcbook').click(function() {
	$.markItUp( { openWith:'\\documentclass[]{scrbook}\n\n\\begin{document}', closeWith:'\n\\end{document}'});
	return false;
    });
    $('#srclttr2').click(function() {
	$.markItUp( { openWith:'', closeWith:'\\documentclass[]{scrlttr2}\n\n\\begin{document}\n% If you want headings on subsequent pages,\n% remove the ``%\'\' on the next line:\n% \\pagestyle{headings}\n\n\\begin{letter}{TO_ADDRESS}\n\\address{}\n\n\\opening{}\n\n\n\n\n\\signature{}\n\n\\closing{}\n\n%enclosure listing\n%\\encl{}\n\n\\end{letter}\n\\end{document}'});
	return false;
    });
    $('#scrreprt').click(function() {
	$.markItUp( { openWith:'', closeWith:'\\documentclass[]{scrreprt}\n\n\n% Title Page\n\\title{}\n\\author{}\n\n\n\\begin{document}\n\\maketitle\n\n\\begin{abstract}\n\\end{abstract}\n\n\\end{document}'});
	return false;
    });

/********************* Structure  ***********************/
    $('#part').click(function() {
 	$.markItUp( { openWith:'\\part{', closeWith:'}', placeHolder:'title'});
 	return false;
    });
    $('#chapter').click(function() {
 	$.markItUp( { openWith:'\\chapter{', closeWith:'}', placeHolder:'title'});
 	return false;
    });
    $('#section').click(function() {
 	$.markItUp( { openWith:'\\section{', closeWith:'}', placeHolder:'title'});
 	return false;
    });
    $('#subsection').click(function() {
 	$.markItUp( { openWith:'\\subsection{', closeWith:'}', placeHolder:'title'});
 	return false;
    });
    $('#subsubsection').click(function() {
 	$.markItUp( { openWith:'\\subsubsection{', closeWith:'}', placeHolder:'title'});
 	return false;
    });
    $('#paragraph').click(function() {
 	$.markItUp( { openWith:'\\paragraph{', closeWith:'}', placeHolder:'title'});
 	return false;
    });
    $('#subparagraph').click(function() {
 	$.markItUp( { openWith:'\\subparagraph{', closeWith:'}', placeHolder:'title'});
 	return false;
    });

/************** Reference ******************/ 
    $('#label').click(function() {
 	$.markItUp( { openWith:'\\label{', closeWith:'}'});
 	return false;
    });
    $('#ref').click(function() {
 	$.markItUp( { openWith:'\\ref{', closeWith:'}'});
 	return false;
    });
    $('#pageref').click(function() {
 	$.markItUp( { openWith:'\\pageref{', closeWith:'}'});
 	return false;
    });
    $('#index').click(function() {
 	$.markItUp( { openWith:'\\index{', closeWith:'}'});
 	return false;
    });
    $('#cite').click(function() {
 	$.markItUp( { openWith:'\\cite{', closeWith:'}'});
 	return false;
    });
    $('#footnote').click(function() {
 	$.markItUp( { openWith:'\\footnote{', closeWith:'}'});
 	return false;
    });


/*************** Size **********************/
    $('#tiny').click(function() {
 	$.markItUp( { openWith:'\\begin{tiny}\n', closeWith:'\n\\end{tiny}'});
 	return false;	
    });
    $('#scriptsize').click(function() {
 	$.markItUp( { openWith:'\\begin{scriptsize}\n', closeWith:'\n\\end{scriptsize}'});
 	return false;	
    });
    $('#footnotesize').click(function() {
 	$.markItUp( { openWith:'\\begin{footnotesize}\n', closeWith:'\n\\end{footnotesize}'});
 	return false;	
    });
    $('#small').click(function() {
 	$.markItUp( { openWith:'\\begin{small}\n', closeWith:'\n\\end{small}'});
 	return false;	
    });
    $('#normalsize').click(function() {
 	$.markItUp( { openWith:'\\begin{normalsize}\n', closeWith:'\n\\end{normalsize}'});
 	return false;	
    });
    $('#large').click(function() {
 	$.markItUp( { openWith:'\\begin{large}\n', closeWith:'\n\\end{large}'});
 	return false;	
    });
    $('#Large').click(function() {
 	$.markItUp( { openWith:'\\begin{Large}\n', closeWith:'\n\\end{Large}'});
 	return false;	
    });
    $('#LARGE').click(function() {
 	$.markItUp( { openWith:'\\begin{LARGE}\n', closeWith:'\n\\end{LARGE}'});
 	return false;	
    });
    $('#Huge').click(function() {
 	$.markItUp( { openWith:'\\begin{Huge}\n', closeWith:'\n\\end{Huge}'});
 	return false;	
    });
/*************** Compiler **************/  
    $('#pdflatex').click(function() {
	$.post("pdflatex.php",$("#form").serialize(),function(request) {
	    alert(request);
	});
	return false;
    });
/*************** autres boutons *****************/    
    $('#gras').click(function() {
 	$.markItUp( { openWith:'\\textbf{', closeWith:'}'});
 	return false;
    });
    $('#italic').click(function() {
 	$.markItUp( { openWith:'\\textit{', closeWith:'}'});
 	return false;
    });
    $('#souligner').click(function() {
 	$.markItUp( { openWith:'\\underline{', closeWith:'}'});
 	return false;	
    });
    $('#flushleft').click(function() {
 	$.markItUp( { openWith:'\\begin{flushleft}\n', closeWith:'\n\\end{flushleft}'});
 	return false;	
    });
    $('#center').click(function() {
 	$.markItUp( { openWith:'\\begin{center}\n', closeWith:'\n\\end{center}'});
 	return false;	
    });
    $('#flushright').click(function() {
 	$.markItUp( { openWith:'\\begin{flushright}\n', closeWith:'\n\\end{flushright}'});
 	return false;	
    });
    $('#nouvelle_ligne').click(function() {
 	$.markItUp( { openWith:'\\\\\n', closeWith:''});
 	return false;	
    });


    $('#fx').click(function() {
 	$.markItUp( { openWith:'$ ', closeWith:' $'});
 	return false;
    });
    $('#indice').click(function() {
 	$.markItUp( { openWith:'_{', closeWith:'}'});
 	return false;
    });
    $('#exposant').click(function() {
 	$.markItUp( { openWith:'^{', closeWith:'}'});
 	return false;
    });
    $('#frac').click(function() {
 	$.markItUp( { openWith:'\\frac{', closeWith:'}{}'});
 	return false;
    });
    $('#dfrac').click(function() {
 	$.markItUp( { openWith:'\\dfrac{', closeWith:'}{}'});
 	return false;
    });
    $('#sqrt').click(function() {
 	$.markItUp( { openWith:'\\sqrt{', closeWith:'}'});
 	return false;
    });
    
    
});