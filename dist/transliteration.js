// TODO - authorize this

function transcript ()
{
    document.write ('<table width="100%"><tr><td width="46%">');
    document.write ('<p style="text-align:center;">');
    document.write ('	<i><small>Change the orthography of this column to:<br><br> Script:&nbsp;&nbsp;<script type="text/javascript"> orthChoiceLat (); </script> ');
    document.write ('	&nbsp;&nbsp; Flavour:&nbsp;&nbsp;<script type="text/javascript"> flavChoiceLat (); </script> </small></i></p>');
    document.write ('<input id="hidden_text1" type="hidden" value="empty">');
    document.write ('</td><td width="4%"></td><td width="50%">');
    document.write ('<p style="text-align:center;">');
    document.write ('	<i><small>Change the orthography of this column to:<br><br> Script:&nbsp;&nbsp;<script type="text/javascript"> orthChoiceCyr (); </script>');
    document.write ('	&nbsp;&nbsp; Flavour:<script type="text/javascript"> flavChoiceCyr (); </script> </small></i></p>');
    document.write ('</td></tr></table>');
}

function transcript1 ()
{
    document.write ('<table width="100%"><tr><td width="46%">');
    document.write ('<p style="text-align:center;">');
    document.write ('	<i><small>Change this text to:<br><br> Script:&nbsp;&nbsp;<script type="text/javascript"> orthChoiceLat (); </script> ');
    document.write ('	&nbsp;&nbsp; Flavour:&nbsp;&nbsp;<script type="text/javascript"> flavChoiceLat (); </script> </small></i></p>');
    document.write ('<input id="hidden_text1" type="hidden" value="empty">');
    document.write ('</td></tr></table>');
}

function transcript2 ()
{
    document.write ('<table width="100%"><tr><td width="46%">');
    document.write ('<p style="text-align:left;">');
    document.write ('	<i><small>Pravopis:&nbsp;&nbsp; <script type="text/javascript"> orthChoiceSimple (); </script> ');
    document.write ('<input id="hidden_text1" type="hidden" value="empty">');
    document.write ('</td></tr></table>');
}

function orthChoiceSimple (veld)
{
    document.write ('<select id="sorth" onchange="strans ()">');
    document.write ('  <option value="1" checked>Latinica</option>');
    document.write ('  <option value="5">Kirilica</option>');
    document.write ('  <option value="2">Etimologi??ny pravopis</option>');
    document.write ('</select>');
}

function orthChoiceLat (veld)
{
    document.write ('<select id="lorth" onchange="ltrans ()" style="width:100px;">');
    document.write ('  <option value="1" selected>Latin</option>');
    document.write ('  <option value="5">Cyrillic</option>');
    document.write ('  <option disabled>--------------------------</option>');
    document.write ('  <option value="6">Iotated Cyrillic</option>');
    document.write ('  <option value="7">Glagolitic</option>');
    document.write ('  <option value="2">ASCII</option>');
    document.write ('  <option value="10">IPA-transcription</option>');
    document.write ('  <option disabled>--------------------------</option>');
    document.write ('  <option value="12">Armenian</option>');
    document.write ('  <option value="18">Devanagari</option>');
    document.write ('  <option value="17">Ethiopian</option>');
    document.write ('  <option value="13">Georgian</option>');
    document.write ('  <option value="14">Greek</option>');
    document.write ('  <option value="22">Katakana</option>');
    document.write ('  <option value="21">Old Permic</option>');
    document.write ('</select>');
}

function flavChoiceLat (veld)
{
    document.write ('<select id="lflav" onchange="ltrans ()" style="margin:10px; width:100px;">');
    document.write ('  <option value="3" selected>Standard</option>');
    document.write ('  <option value="4">Simplified</option>');
    document.write ('  <option value="2">Etymological</option>');
    document.write ('  <option value="S">North Slavic</option>');
    document.write ('  <option value="J">South Slavic</option>');
    document.write ('</select>');
}

function orthChoiceCyr (veld)
{
    document.write ('<select id="corth" onchange="ctrans ()" style="width:100px;">');
    document.write ('  <option value="1">Latin</option>');
    document.write ('  <option value="5" selected>Cyrillic</option>');
    document.write ('  <option disabled>--------------------------</option>');
    document.write ('  <option value="6">Iotated Cyrillic</option>');
    document.write ('  <option value="7">Glagolitic</option>');
    document.write ('  <option value="2">ASCII</option>');
    document.write ('  <option value="10">IPA-transcription</option>');
    document.write ('  <option disabled>--------------------------</option>');
    document.write ('  <option value="12">Armenian</option>');
    document.write ('  <option value="18">Devanagari</option>');
    document.write ('  <option value="17">Ethiopian</option>');
    document.write ('  <option value="13">Georgian</option>');
    document.write ('  <option value="14">Greek</option>');
    document.write ('  <option value="22">Katakana</option>');
    document.write ('  <option value="21">Old Permic</option>');
    document.write ('</select>');
}

function flavChoiceCyr (veld)
{
    document.write ('<select id="cflav" onchange="ctrans ()" style="margin:10px; width:100px;">');
    document.write ('  <option value="3" checked>Standard</option>');
    document.write ('  <option value="4">Simplified</option>');
    document.write ('  <option value="2">Etymological</option>');
    document.write ('  <option value="S">North Slavic</option>');
    document.write ('  <option value="J">South Slavic</option>');
    document.write ('</select>');
}

function ltrans ()
{
    disabeltjes ("l");
    for (i=1; i<=14; i++)
    {
        veld = 'text' + i;
        var hidnaam = 'hidden_' + veld;
        if (document.getElementById(hidnaam).value != "") {
            if (document.getElementById(hidnaam).value == "empty") 	{ document.getElementById(hidnaam).value = document.getElementById(veld).innerHTML; }
            var iSource = document.getElementById(hidnaam).value;
            var type = document.getElementById('lorth').value; if (!type) type = 1;
            var flav = document.getElementById('lflav').value; if (!flav) flav = "3";
            result = transliterate (iSource, type, flav, 0, 2);
            veld = 'l' + veld;
            if (type == 21)				{ document.getElementById(veld).className = 'abur'; }
            else if ((type == 7) && (flav == "J"))	{ document.getElementById(veld).className = 'uglata'; }
            else if ((type == 7) && (flav != "J"))	{ document.getElementById(veld).className = 'glago'; }
            else if (type == 13)			{ document.getElementById(veld).className = 'georg'; }
            else if (type == 22)			{ document.getElementById(veld).className = 'katakana'; }
            else					{ document.getElementById(veld).className = ''; }
            document.getElementById(veld).innerHTML = result;
        } else {i=13;};
    }
}

function ctrans ()
{
    disabeltjes ("c");
    for (i=1; i<=4; i++)
    {
        veld = 'text' + i;
        var hidnaam = 'hidden_' + veld;
        if (document.getElementById(hidnaam).value == "empty") 	{ document.getElementById(hidnaam).value = document.getElementById(veld).innerHTML; }
        var iSource = document.getElementById(hidnaam).value;
        var type = document.getElementById('corth').value; if (!type) type = 1;
        var flav = document.getElementById('cflav').value; if (!flav) flav = "3";
        result = transliterate (iSource, type, flav, 0, 2);
        veld = 'c' + veld;
        if (type == 21)				{ document.getElementById(veld).className = 'abur'; }
        else if ((type == 7) && (flav == "J"))	{ document.getElementById(veld).className = 'uglata'; }
        else if ((type == 7) && (flav != "J"))	{ document.getElementById(veld).className = 'glago'; }
        else if (type == 13)			{ document.getElementById(veld).className = 'georg'; }
        else if (type == 22)			{ document.getElementById(veld).className = 'katakana'; }
        else					{ document.getElementById(veld).className = ''; }
        document.getElementById(veld).innerHTML = result;
    }
}


function strans ()
{
    for (i=1; i<=14; i++)
    {
        veld = 'text' + i;
        var hidnaam = 'hidden_' + veld;
        if (document.getElementById(hidnaam).value != "") {
            if (document.getElementById(hidnaam).value == "empty") 	{ document.getElementById(hidnaam).value = document.getElementById(veld).innerHTML; }
            var iSource = document.getElementById(hidnaam).value;
            var type = document.getElementById('sorth').value; if (!type) type = 1;
            var flav = "3";
            if (type == 2) { type = 1; flav = "2"; }
            result = transliterate (iSource, type, flav, 0, 2);
            veld = 'l' + veld;
            document.getElementById(veld).innerHTML = result;
        } else {i=13;};
    }
}

function disabeltjes (letter)
{
    var ortho = letter + "orth"; var flavo = letter + "flav"; var selexo = document.getElementById(ortho).selectedIndex; var selexf = document.getElementById(flavo).selectedIndex
    enable (flavo,1); enable (flavo,2); enable (flavo,3); enable (flavo,4);
    if (selexo == "1")
    { disable (flavo,2); disable (flavo,3); if ((selexf == 2) || (selexf == 3)) { document.getElementById(flavo).selectedIndex = "0"; } }
    else if (selexo == "3")
    { disable (flavo,1); disable (flavo,4); if ((selexf == 1) || (selexf == 4)) { document.getElementById(flavo).selectedIndex = "0"; } }
    else if (selexo == "4")
    { disable (flavo,1); disable (flavo,3); enable (flavo,4); if ((selexf == 1) || (selexf == 3)) { document.getElementById(flavo).selectedIndex = "0"; } }
    else if (selexo == "5")
    { disable (flavo,2); disable (flavo,3); disable (flavo,4); if ((selexf != 0) && (selexf != 1)) { document.getElementById(flavo).selectedIndex = "1"; } }
    else if (selexo > "7")
    { disable (flavo,1); disable (flavo,3); disable (flavo,4); if ((selexf == 1) && (selexf == 3)) { document.getElementById(flavo).selectedIndex = "0"; } }
}

function disable (id, option)
{
    document.getElementById(id).options[option].disabled = true; document.getElementById(id).options[option].style.display = "none";
}

function enable (id, option)
{
    document.getElementById(id).options[option].disabled = false; document.getElementById(id).options[option].style.display = "inline";
}

function transliterate (iSource, type, flav, caps, nms)
{
    var text = iSource;
    var result = "";

    if (!flav)						{ flav = "2"; }
    if (caps == 0)						{  }
    else if (caps == 1)					{ iSource = iSource.toUpperCase(); }
    else if (caps == 2)					{ iSource = iSource.toLowerCase(); }

    if (nms != "2")						{ nms = 1; }

    if ((type == 2) && (flav == "2"))			{ flav = "3"; }
    else if ((type == 5) && (flav == "2"))			{ flav = "3"; }
    else if ((type == 6) && (flav == "2"))			{ flav = "1"; }
    else if ((type == 22) && (flav == "2"))			{ flav = "3"; }


    iSource = iSource.replace (/{/g,"<{");
    iSource = iSource.replace (/}/g,"}>");

    iSource = iSource.replace (/'''/g,"???");
    iSource = iSource.replace (/''/g,"???");
    iSource = iSource.replace (/'?????????/g,"???");
    iSource = iSource.replace (/\t/g,"???");
    iSource = iSource.replace (/\n/g,"???");

    var teken = new Array();
    teken[0] = '!'; teken[1] = '"'; teken[2] = '&'; teken[3] = '('; teken[4] = ')'; teken[5] = ','; teken[6] = '-'; teken[7] = '.'; teken[8] = '/';
    teken[9] = ':'; teken[10] = ';'; teken[11] = '??'; teken[12] = '??'; teken[13] = '?'; teken[14] = '['; teken[15] = ']'; teken[16] = '{';
    teken[17] = '}'; teken[18] = '|'; teken[19] = '??'; teken[20] = '??'; teken[21] = '???'; teken[22] = '???'; teken[23] = '???'; teken[24] = '%';
    teken[25] = '???'; teken[26] = '???'; teken[27] = '???'; teken[28] = '???'; teken[29] = '|'; teken[30] = '='; teken[31] = '???'; teken[32] = '???'; teken[33] = '???'; teken[34] = '???';

    while (iSource != "")
    {
        var nextW = "";
        var nextSpace = iSource.indexOf (" ");
        var nextHook  = iSource.indexOf ("<");

        var x;
        for (x in teken)
        {
            if ((iSource.indexOf (teken[x]) < nextSpace) && (iSource.indexOf (teken[x]) > -1))
            {
                nextSpace = iSource.indexOf (teken[x]);
            }
            else if ((nextSpace == -1) && (iSource.indexOf (teken[x]) > -1))
            {
                nextSpace = iSource.indexOf (teken[x]);
            }
        }


        if ((nextHook != -1) && ((nextSpace == -1) || (nextHook < nextSpace)))
        {
            nextW = iSource.substring (0, nextHook);
            iSource = iSource.substring (nextHook + 1, iSource.length);
            result += transliterateW (nextW, type, flav, nms);
            result += "<";

            var nextRHook = iSource.indexOf (">");
            if (nextRHook != -1)
            {
                nextW = iSource.substring (0, nextRHook);
                iSource = iSource.substring (nextRHook + 1, iSource.length);

                if ((type > 4) && (nextW.indexOf ("|") != -1))
                {	nextW = nextW.substring (nextW.indexOf ("|") + 1, nextW.length);
                    result = result.substring (0, result.length - 1) + transliterateW (nextW, type, flav, nms);
                    result += ">";
                }
                else if ((type < 5) && (nextW.indexOf ("|") != -1))
                {	nextW = nextW.substring (0, nextW.indexOf ("|"));
                    result += nextW;
                }
                else
                {	result += nextW;
                    result += ">";
                }
            }
        }
        else if (nextSpace == -1)
        {
            nextW = iSource;
            iSource = "";
            result += transliterateW (nextW, type, flav, nms);
        }
        else if (nextSpace == 0)
        {
            result += iSource.charAt (nextSpace);
            iSource = iSource.substring (1, iSource.length);
        }
        else
        {
            nextW = iSource.substring (0, nextSpace);
            result += transliterateW (nextW, type, flav, nms);

            var leesteken = iSource.charAt (nextSpace);
            if (type == 17)
            {
                if      (leesteken == ".")	{ leesteken =  "???"; }
                else if (leesteken == ",")	{ leesteken =  "???"; }
                else if (leesteken == ";")	{ leesteken =  "???"; }
                else if (leesteken == ":")	{ leesteken =  "???"; }
            }
            else if (type == 18)
            {
                if      (leesteken == ".")	{ leesteken =  "???"; }
            }
            result += leesteken;
            iSource = iSource.substring (nextSpace + 1, iSource.length);
        }

    }
    result = result.replace (/<{/g,"");
    result = result.replace (/}>/g,"");
    result = result.replace (/???/g,'\t');
    result = result.replace (/???/g,'\n');
    result = result.replace (/???/g,"'''");
    result = result.replace (/???/g,"''");

    if ((type == 7) && (flav != "J"))
    {
        result = result.replace (/ - /g," ??? ");
        i = 0; endresult = ""; while (i < result.length)
    {	nextChar = result.charAt (i);
        if (nextChar == ".") { resultChar = " ??? "; }
        else if (nextChar == "!") { resultChar = " ??? "; }
        else if (nextChar == ",") { resultChar = " ?? "; }
        else if (nextChar == ";") { resultChar = " ??? "; }
        else if (nextChar == ":") { resultChar = " ?? "; }
        else if (nextChar == "?") { resultChar = " ; "; }
        else if (nextChar == "??") { resultChar = " ??? "; }
        else if (nextChar == "??") { resultChar = " ??? "; }
        else if (nextChar == "(") { resultChar = " ??? "; }
        else if (nextChar == ")") { resultChar = " ??? "; }
        else if (nextChar == "'") { resultChar = " ??? "; }
        else if (nextChar == '"') { resultChar = " ??? "; }
        else if (nextChar == "-") { resultChar = " ?? "; }
        else if (nextChar == "???") { resultChar = " ??? "; }
        else if (nextChar == "???") { resultChar = " ??? "; }
        else			  { resultChar = nextChar; }
        i++;
        endresult += resultChar;
    }
        result = endresult;
    }
    else if (type == 21)
    {
        var i = 0; var endresult = ""; var nextChar = ""; var resultChar = "";
        while (i < result.length)
        {	nextChar = result.charAt (i);
            resultChar = nextChar;
            switch (nextChar)
            {	case String.fromCharCode(46):	{	resultChar = "???"; break;	} /* . */
                case String.fromCharCode(44):	{	resultChar = "???"; break;	} /* , */
                case String.fromCharCode(59):	{	resultChar = "???"; break;	} /* ; */
                case String.fromCharCode(58):	{	resultChar = "???"; break;	} /* : */
                case String.fromCharCode(63):	{	resultChar = "???"; break;	} /* ? */
                case String.fromCharCode(33):	{	resultChar = "???"; break;	} /* ! */
                case String.fromCharCode(91):	{	resultChar = "???"; break;	} /* [ */
                case String.fromCharCode(93):	{	resultChar = "???"; break;	} /* ] */
                case String.fromCharCode(40):	{	resultChar = "???"; break;	} /* ( */
                case String.fromCharCode(41):	{	resultChar = "???"; break;	} /* ) */
                case String.fromCharCode(45):	{	resultChar = "???"; break;	} /* - */
                case String.fromCharCode(8211):	{	resultChar = "???"; break;	} /* - */
                case String.fromCharCode(8212):	{	resultChar = "???"; break;	} /* - */
            }
            i++;
            endresult += resultChar;
        }
        result = endresult;
    }
    else if (type == 22)
    {
        var i = 0; var endresult = ""; var nextChar = ""; var resultChar = "";
        while (i < result.length)
        {	nextChar = result.charAt (i);
            if (nextChar == ".") { resultChar = "???"; }
            else if (nextChar == ",") { resultChar = "???"; }
            else if (nextChar == "?") { resultChar = "???"; }
            else if (nextChar == "!") { resultChar = "???"; }
            else if (nextChar == "??") { resultChar = "???"; }
            else if (nextChar == "??") { resultChar = "???"; }
            else if (nextChar == "???") { resultChar = "???"; }
            else if (nextChar == "???") { resultChar = "???"; }
            else if (nextChar == "???") { resultChar = "???"; }
            else if (nextChar == " ") { resultChar = "???"; }
            else			  { resultChar = nextChar; }
            i++;
            endresult += resultChar;
        }
        result = endresult;
        result = result.replace (/([????????????])???/g,"$1 "); result = result.replace (/([?????????])???/g,"$1"); result = result.replace (/???([?????????])/g,"$1");
        result = result.replace (/???([0123456789])/g,"$1"); result = result.replace (/([0123456789])???/g,"$1");
    }

    return result;
}

function transliterateW (iW, type, flav, nms)
{ 	iW = "%" + iW + "%";
    OrigW = iW;
    iW = iW.toLowerCase();
    if (nms == 1) { iW = nmsify (iW); }

    iW = iW.replace (/??/g,"??");
    var aPos = iW.indexOf ("??"); var vowel = /[aeiouy????????????????????]/;
    if  ((aPos > 1) && (iW.charAt (aPos - 1) != "%") && (vowel.test (iW.charAt (aPos - 1)) == false) && (vowel.test (iW.charAt (aPos + 1)) == false))
    { iW = iW.substring (0, aPos) + "??" + iW.substring (aPos + 1, iW.length); }

    iW = iW.replace (/rj/g, "Rj"); iW = iW.replace (/jr/g, "jR");
    var rPos = iW.indexOf ("r"); var vowel = /[aeiouy????????????????????]/;
    if  ((rPos > 1) && (iW.charAt (rPos - 1) != "%") && (vowel.test (iW.charAt (rPos - 1)) == false) && (vowel.test (iW.charAt (rPos + 1)) == false))
    { iW = iW.substring (0, rPos) + "???" + iW.substring (rPos + 1, iW.length); /* iW = iW.replace (/??????/, "???"); iW = iW.replace (/j???/, "??"); */
        iW = iW.replace (/([??????c])???/g,"$1??");
    }
    iW = iW.replace (/R/g, "r");
    iW = iW.replace (/x/g,"ks");

    iW = iW.replace (/([??????????????])j/g,"$1??j");
    iW = iW.replace (/([dsz])j/g,"$1#j"); iW = iW.replace (/%obj/g,"ob#j"); iW = iW.replace (/%neobj/g,"neob#j"); iW = iW.replace (/%vj/g,"v#j");


    /* FLAVORIZACIJE */

    if ((flav == "2") || (flav == "3") || (flav == "4"))
    { iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??%/g,"o%");
        iW = iW.replace (/??/g,"v");
        iW = iW.replace (/[??????]/g,"");
        iW = iW.replace (/[???`]/g,"#%");
        iW = iW.replace (/([??????j])??/g,"$1e");
    }

    if ((flav == "3") || (flav == "4"))
    { iW = iW.replace (/[????]/g,"e");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/??/g,"o");
        iW = iW.replace (/??/g,"u");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"d??");
        iW = iW.replace (/??/g,"r");
        iW = iW.replace (/??/g,"l");
        iW = iW.replace (/??/g,"n");
        iW = iW.replace (/??/g,"t");
        iW = iW.replace (/??/g,"d");
        iW = iW.replace (/??/g,"s");
        iW = iW.replace (/??/g,"z");
    }

    if (flav == "4")
    { iW = iW.replace (/??/g,"e");
        iW = iW.replace (/y/g,"i");
    }

    else if (flav == "S")
    { iW = iW.replace (/??/g,"??"); iW = iW.replace (/??/g,"d??");
        iW = iW.replace (/???/g,"t"); iW = iW.replace (/???/g,"d");
        iW = iW.replace (/[????]/g,"e");
        iW = iW.replace (/[????]/g,"o");
        iW = iW.replace (/??/g,"u"); iW = iW.replace (/??/g,"v");
        iW = iW.replace (/([??????cj])??/g,"$1a"); iW = iW.replace (/??/g,"ja");
        iW = iW.replace (/([??????cj])??/g,"$1e");
        iW = iW.replace (/([?????])%/g,"r%"); iW = iW.replace (/???/g,"or"); iW = iW.replace (/??/g,"er");
        iW = iW.replace (/([kgh])y/g,"$1i");
        iW = iW.replace (/[`???]/g,"#%");
    }

    else if (flav == "J")
    { iW = iW.replace (/??/g,"u"); iW = iW.replace (/??/g,"v");
        iW = iW.replace (/??/g,"l"); iW = iW.replace (/??/g,"r"); iW = iW.replace (/??/g,"n");
        iW = iW.replace (/??/g,"t"); iW = iW.replace (/??/g,"d"); iW = iW.replace (/??/g,"s"); iW = iW.replace (/??/g,"z");
        iW = iW.replace (/????/g,"??t");
        iW = iW.replace (/[??????]/g,"");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/[????]/g,"e"); iW = iW.replace (/??/g,"??");
        iW = iW.replace (/y/g,"i");
        iW = iW.replace (/??%/g,"o%");
        iW = iW.replace (/([??????cj])??/g,"$1e");
        iW = iW.replace (/[`???]/g,"#%");
        iW = iW.replace (/??/g,"");
    }

    /* PISMA I PRAVOPISY */

    /* Latinica */

    if (type == 1)
    {	if (flav == "2")
    { iW = iW.replace (/???/g,"r");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"t??");
        iW = iW.replace (/??/g,"d??");
        iW = iW.replace (/([??????j])??/g,"$1r");
    }
    else if ((flav == "3") || (flav == "4") || (flav == "J"))
    { iW = iW.replace (/[?????]/g,"r");
        iW = iW.replace (/??/g,"??");
    }
    else if (flav == "S")
    { iW = iW.replace (/??/g,"??e");
        iW = jgedoe (iW, type);
        iW = iW.replace (/??????/g,"i");
        iW = iW.replace (/([??????j])??/g,"$1i");
        iW = iW.replace (/??/g,"i");
        /* iW = iW.replace (/li/g,"lii");
        iW = iW.replace (/l/g,"??"); iW = iW.replace (/??e/g,"le"); iW = iW.replace (/??i/g,"l"); iW = iW.replace (/ii/g,"i");
        iW = iW.replace (/??i/g,"l"); iW = iW.replace (/????/g,"l"); */
        iW = iW.replace (/h/g,"ch");
        iW = iW.replace (/l??/g,"??");
        iW = iW.replace (/n??/g,"??");
        iW = iW.replace (/r??/g,"??");
        iW = iW.replace (/t??/g,"??");
        iW = iW.replace (/d??/g,"??");
        iW = iW.replace (/s??/g,"??");
        iW = iW.replace (/z??/g,"??");
        iW = iW.replace (/??/g,"j");
    }
    }

    /* ASCII */

    else if (type == 2)
    {	iW = iW.replace (/[?????]/g,"r");
        iW = iW.replace (/??/g,"sz");
        iW = iW.replace (/[????]/g,"cz");
        iW = iW.replace (/??/g,"zs");
        iW = iW.replace (/??/g,"dzs");
        iW = iW.replace (/??/g,"je");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/[????]/g,"e");
        iW = iW.replace (/??/g,"o");
        iW = iW.replace (/??/g,"u");
    }

    /* Poljsky */

    else if (type == 3)
    { iW = jgedoe (iW, type);
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/??/g,"e");
        iW = iW.replace (/??/g,"??e");
        iW = iW.replace (/??/g,"o");
        iW = iW.replace (/???/g,"or");
        iW = iW.replace (/??/g,"er");
        iW = iW.replace (/??/g,"u");
        iW = iW.replace (/[?????????]/g,"");

        iW = iW.replace (/l??/g,"??"); iW = iW.replace (/l??/g,"??"); iW = iW.replace (/li/g,"??i"); iW = iW.replace (/rz??/g,"rz");
        iW = iW.replace (/??/g,"i");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/????/g,"????");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"sz");
        iW = iW.replace (/??/g,"cz");
        iW = iW.replace (/r??/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/v/g,"w");
        iW = iW.replace (/h/g,"ch");
        iW = iW.replace (/l/g,"??"); iW = iW.replace (/??/g,"l");
        iW = iW.replace (/t??/g,"??"); iW = iW.replace (/ti/g,"ti");
        iW = iW.replace (/d??/g,"??"); iW = iW.replace (/di/g,"di");
        iW = iW.replace (/c??/g,"??"); iW = iW.replace (/ci/g,"ci");
        iW = iW.replace (/dz??/g,"d??"); iW = iW.replace (/dzi/g,"dzi");
        iW = iW.replace (/s??/g,"??");
        iW = iW.replace (/z??/g,"??");
        iW = iW.replace (/l??/g,"??");
        iW = iW.replace (/n??/g,"??");
        iW = iW.replace (/??/g,"j");

        iW = iW.replace (/ii/g,"i"); iW = iW.replace (/ji/g,"i");
        iW = iW.replace (/iy/g,"i"); iW = iW.replace (/jy/g,"i");
        iW = iW.replace (/([kg])y/g,"$1i"); iW = iW.replace (/([kg])e/g,"$1ie");
        iW = iW.replace (/jn/g,"#jn"); iW = iW.replace (/js/g,"#js");
        iW = iW.replace (/cyj/g,"cj"); iW = iW.replace (/cyi/g,"cji"); iW = iW.replace (/lij/g,"li");
        iW = iW.replace (/ya/g,"ja"); iW = iW.replace (/y??/g,"j??");
        iW = iW.replace (/yu/g,"ju"); iW = iW.replace (/yo/g,"jo");
        iW = iW.replace (/rzj/g,"rj");
        iW = iW.replace (/#/g,"");
    }

    /* Kirilica */

    if ((type == 5) || (type == 6))
    {
        iW = iW.replace (/lj/g,"??");
        iW = iW.replace (/nj/g,"??");
        iW = iW.replace (/a/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/b/g,"??");
        iW = iW.replace (/c/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/[d???]/g,"??");
        iW = iW.replace (/??/g,"????");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/e/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/f/g,"??");
        iW = iW.replace (/g/g,"??");
        iW = iW.replace (/h/g,"??");
        iW = iW.replace (/i/g,"??");
        iW = iW.replace (/j/g,"??");
        iW = iW.replace (/k/g,"??");
        iW = iW.replace (/l/g,"??");
        iW = iW.replace (/??/g,"????");
        iW = iW.replace (/m/g,"??");
        iW = iW.replace (/n/g,"??");
        iW = iW.replace (/??/g,"????");
        iW = iW.replace (/o/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/p/g,"??");
        iW = iW.replace (/r/g,"??");
        iW = iW.replace (/??/g,"????");
        iW = iW.replace (/s/g,"??");
        iW = iW.replace (/??/g,"????");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/[t???]/g,"??");
        iW = iW.replace (/??/g,"????");
        iW = iW.replace (/u/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/v/g,"??");
        iW = iW.replace (/y/g,"??");
        iW = iW.replace (/z/g,"??");
        iW = iW.replace (/??/g,"????");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/???/g,"??");
        iW = iW.replace (/`/g,"???");

        if (flav == "1")	{	iW = iW.replace (/???/g,"????"); iW = iW.replace (/??/g,"????");
            iW = iW.replace (/??/g,"??");
            iW = iW.replace (/[??????]/g,"");
        }
        else			{	iW = iW.replace (/[?????]/g,"??");
            iW = iW.replace (/??/g,"??");
            if (flav == "J")
            { 	iW = iW.replace (/??/g,"??");
                iW = iW.replace (/??#??/g,"??");
                iW = iW.replace (/??#??/g,"??");
            }
        }

        if (type == 6)
        {
            iW = iW.replace (/??/g,"????");
            iW = iW.replace (/??/g,"????");
            iW = iW.replace (/[????]/g,"??");
            iW = iW.replace (/[????]??/g,"??");
            iW = iW.replace (/[????]??/g,"???");
            iW = iW.replace (/[????]??/g,"??");
            iW = iW.replace (/[????]??/g,"??");
            iW = iW.replace (/[????]??/g,"??");
            iW = iW.replace (/??/g,"??");
            iW = iW.replace (/??/g,"??");
            iW = iW.replace (/??/g,"??");
            iW = iW.replace (/???/g,"????");
            iW = iW.replace (/??/g,"????");
            iW = iW.replace (/????/g,"??");
            if (flav == "1")	{ iW = iW.replace (/[????]??/g,"??");
                iW = iW.replace (/[????]??/g,"??");
                iW = iW.replace (/??[????]/g,"??");
            }
            else			{ iW = iW.replace (/([#%??????????????])??/g,"$1??");
                iW = iW.replace (/([#%])??([????])/g,"$1$2");
                iW = iW.replace (/([??????????????])??([????])/g,"$1$2");
                iW = iW.replace (/??([????])/g,"??$1");
                iW = iW.replace (/??/g,"??");
                iW = iW.replace (/??????/g,"??");
            }
            iW = iW.replace (/#/g,"???");
        }
    }

    /* Glagolica */

    else if (type == 7)
    {	if (flav == "J") { iW = iW.replace (/[?????]/g,"r"); iW = iW.replace (/??/g,"o"); iW = iW.replace (/??/g,"e"); } else {

        iW = iW.replace(/??/g,"");

        iW = jgedoe (iW);

        iW = iW.replace(/??j/g,"???");
        iW = iW.replace(/??([ei])/g,"???j$1");
        iW = iW.replace(/je/g,"e");
        iW = iW.replace(/ji/g,"i");
        iW = iW.replace(/[j??]a/g,"??");
        iW = iW.replace(/[j??]??/g,"???");
        iW = iW.replace(/[j??]o/g,"???");
        iW = iW.replace(/[j??]??/g,"???");
        iW = iW.replace(/[j??]u/g,"???");
        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/dz/g,"???");

        iW = iW.replace(/[a??]/g,"???");
        iW = iW.replace(/b/g,"???");
        iW = iW.replace(/c/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/d/g,"???");
        iW = iW.replace(/e/g,"???");
        iW = iW.replace(/[??????]/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/f/g,"???");
        iW = iW.replace(/g/g,"???");
        iW = iW.replace(/h/g,"???");
        iW = iW.replace(/[ij]/g,"???"); /* ???: INITIAL IZHE */
        iW = iW.replace(/k/g,"???");
        iW = iW.replace(/l/g,"???");
        iW = iW.replace(/m/g,"???");
        iW = iW.replace(/n/g,"???");
        iW = iW.replace(/o/g,"???");
        iW = iW.replace(/[??#]/g,"???");
        iW = iW.replace(/p/g,"???");
        iW = iW.replace(/r/g,"???");
        iW = iW.replace(/???/g,"??????");
        iW = iW.replace(/??/g,"??????");
        iW = iW.replace(/s/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/t/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/u/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/v/g,"???");
        iW = iW.replace(/y/g,"??????");
        iW = iW.replace(/z/g,"???");
        iW = iW.replace(/??/g,"???");
    }
    }

    /* Angular glagolica */

    else if (type == 8)
    {


    }

    /* IPA */

    else if (type == 10)
    {	  iW = iW.replace (/nads([e??])/g,"nac$1");
        iW = iW.replace (/([??????????????])??j/g,"$1i??");
        iW = iW.replace (/e/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"????"); iW = iW.replace (/??/g,"????"); iW = iW.replace (/??/g,"????r");
        iW = iW.replace (/([??????j])??/g,"$1");
        iW = iW.replace (/y/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/o/g,"??");
        iW = iW.replace (/[?????]/g,"??r");
        iW = iW.replace (/[?????]/g,"??");
        iW = iW.replace (/??/g,"??");

        iW = iW.replace (/c/g,"t??s"); iW = iW.replace (/??/g,"t????");
        iW = iW.replace (/????/g,"??t????"); iW = iW.replace (/??/g,"t????");
        iW = iW.replace (/dz/g,"d??z"); iW = iW.replace (/d??/g,"d????");
        iW = iW.replace (/????/g,"??d????"); iW = iW.replace (/??/g,"d????");
        iW = iW.replace (/x/g,"ks");
        iW = iW.replace (/h/g,"x");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/s??/g,"s??t??");
        iW = iW.replace (/z??/g,"z??d??");
        iW = iW.replace (/??/g,"t??"); iW = iW.replace (/t??/g,"t??");
        iW = iW.replace (/??/g,"d??"); iW = iW.replace (/d??/g,"d??");
        iW = iW.replace (/??/g,"s??"); iW = iW.replace (/s??/g,"s??");
        iW = iW.replace (/??/g,"z??"); iW = iW.replace (/z??/g,"z??");
        iW = iW.replace (/??/g,"r??"); iW = iW.replace (/r[??j]/g,"r??");
        iW = iW.replace (/??/g,"??"); iW = iW.replace (/n[??j]/g,"??");
        iW = iW.replace (/??/g,"??"); iW = iW.replace (/l[??j]/g,"??");
        iW = iW.replace (/??/g,"j");
        iW = iW.replace (/l/g,"??"); iW = iW.replace (/??([ii??e])/g,"l$1");
        iW = iW.replace (/t??sj/g,"t??s??"); iW = iW.replace (/d??zj/g,"d??z??");
    }

    /* Albansky */

    else if (type == 11)
    { iW = iW.replace (/[?????]/g,"??r");
        iW = iW.replace (/[????]/g,"??l");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/??/g,"je");
        iW = iW.replace (/[???????]/g,"??");
        iW = iW.replace (/??/g,"u"); iW = iW.replace (/??/g,"je");
        iW = iW.replace (/??/g,"q"); iW = iW.replace (/??/g,"xh");
        iW = iW.replace (/??j/g,"??"); iW = iW.replace (/??j/g,"??"); iW = iW.replace (/??j/g,"??");
        iW = iW.replace (/jj/g,"j");

        iW = jgedoe (iW, type);

        iW = iW.replace (/r??/g,"R");
        iW = iW.replace (/r??/g,"Rj");
        iW = iW.replace (/rj/g,"Rj");
        iW = iW.replace (/ri/g,"Ri");
        iW = iW.replace (/%r/g,"%rr");
        iW = iW.replace (/R/g,"r");

        iW = iW.replace (/[????]/g,"j");

        iW = iW.replace (/d??/g,"xh");
        iW = iW.replace (/dz/g,"x");
        iW = iW.replace (/????/g,"shq");
        iW = iW.replace (/??/g,"sh");
        iW = iW.replace (/??/g,"zh");
        iW = iW.replace (/[????]/g,"??");
        iW = iW.replace (/tj/g,"q");
        iW = iW.replace (/dj/g,"gj");
        iW = iW.replace (/sj/g,"s");
        iW = iW.replace (/zj/g,"z");
        iW = iW.replace (/le/g,"??e"); iW = iW.replace (/li/g,"??i"); iW = iW.replace (/lj/g,"??");
        iW = iW.replace (/l/g,"ll"); iW = iW.replace (/??/g,"l");
        iW = iW.replace (/y/g,"i");
    }

    /* Armensky */

    else if (type == 12)
    { iW = jgedoe (iW, type);
        iW = iW.replace (/????/g,"i");
        iW = iW.replace (/[????]/g,"je");
        iW = iW.replace (/[?????]/g,"??r");
        iW = iW.replace (/d??/g,"d??");
        iW = iW.replace (/??j/g,"??"); iW = iW.replace (/??j/g,"??");
        iW = iW.replace (/??j/g,"??"); iW = iW.replace (/jj/g,"j");
        iW = iW.replace (/dz/g,"??");
        iW = iW.replace (/d??/g,"??");
        iW = iW.replace (/a/g,"??");
        iW = iW.replace (/b/g,"??");
        iW = iW.replace (/g/g,"??");
        iW = iW.replace (/d/g,"??");
        iW = iW.replace (/%e/g,"??");
        iW = iW.replace (/e/g,"??");
        iW = iW.replace (/z/g,"??");
        iW = iW.replace (/[?????????]/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/[iy]/g,"??");
        iW = iW.replace (/l/g,"??");
        iW = iW.replace (/h/g,"??");
        iW = iW.replace (/c/g,"??");
        iW = iW.replace (/k/g,"??");
        iW = iW.replace (/m/g,"??");
        iW = iW.replace (/[j??]/g,"??");
        iW = iW.replace (/??/g,"");
        iW = iW.replace (/n/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/%o/g,"%??");
        iW = iW.replace (/o/g,"??");
        iW = iW.replace (/[????]/g,"??");
        iW = iW.replace (/p/g,"??");
        iW = iW.replace (/%r/g,"%??");
        iW = iW.replace (/r/g,"??");
        iW = iW.replace (/s/g,"??");
        iW = iW.replace (/v/g,"??");
        iW = iW.replace (/t/g,"??");
        iW = iW.replace (/[u??]/g,"????");
        iW = iW.replace (/f/g,"??");
        iW = iW.replace (/,/g,",");
        iW = iW.replace (String.fromCharCode(46),":");
        iW = iW.replace (String.fromCharCode(63),"??");
        iW = iW.replace (/;/g,"??");
        iW = iW.replace (/!/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"??");
    }

    /* Gruzinsky */

    else if (type == 13)
    { iW = jgedoe (iW, type);
        iW = iW.replace (/????/g,"i");
        iW = iW.replace (/??/g,"??"); iW = iW.replace (/d??/g,"d??");
        iW = iW.replace (/???/g,"or"); iW = iW.replace (/??/g,"or");
        iW = iW.replace (/[????]/g,"je");
        iW = iW.replace (/ij/g,"i"); iW = iW.replace (/ji/g,"i"); iW = iW.replace (/??/g,"");
        iW = iW.replace (/[iyj??]/g,"???"); iW = iW.replace (/??????/g,"???");
        iW = iW.replace (/d??/g,"???");
        iW = iW.replace (/[a??]/g,"???");
        iW = iW.replace (/b/g,"???");
        iW = iW.replace (/g/g,"???");
        iW = iW.replace (/d/g,"???");
        iW = iW.replace (/[e??]/g,"???");
        iW = iW.replace (/v/g,"???");
        iW = iW.replace (/z/g,"???");
        iW = iW.replace (/k/g,"???");
        iW = iW.replace (/l/g,"???");
        iW = iW.replace (/m/g,"???");
        iW = iW.replace (/n/g,"???");
        iW = iW.replace (/[o?????]/g,"???");
        iW = iW.replace (/p/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/r/g,"???");
        iW = iW.replace (/s/g,"???");
        iW = iW.replace (/t/g,"???");
        iW = iW.replace (/[u??]/g,"???");
        iW = iW.replace (/f/g,"???");
        iW = iW.replace (/h/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/[????]/g,"???");
        iW = iW.replace (/c/g,"???");
    }

    /* Gre??sky */

    else if (type == 14)
    { iW = iW.replace (/??t/g,"tzj"); iW = iW.replace (/??/g,"??"); iW = iW.replace (/????/g,"stzj");
        iW = iW.replace (/d??/g,"dzj");
        iW = iW.replace (/???/g,"or"); iW = iW.replace (/??/g,"er");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/p??/g,"pje"); iW = iW.replace (/b??/g,"bje"); iW = iW.replace (/v??/g,"vje"); iW = iW.replace (/m??/g,"mje");
        iW = iW.replace (/t??/g,"tje"); iW = iW.replace (/d??/g,"dje"); iW = iW.replace (/n??/g,"nje");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/??/g,"e");
        iW = iW.replace (/??/g,"o");
        iW = iW.replace (/??/g,"u");
        iW = iW.replace (/??/g,"sj"); iW = iW.replace (/??/g,"zj"); iW = iW.replace (/??/g,"tzj");
        iW = iW.replace (/jj/g,"j");
        iW = iW.replace (/??j/g,"??");

        iW = jgedoe (iW, type);

        iW = iW.replace (/ogo%/g,"og??%"); iW = iW.replace (/ego%/g,"eg??%"); iW = iW.replace (/%od/g,"%??t");
        iW = iW.replace (/%v`/g,"%vo"); iW = iW.replace (/%s`/g,"%so");
        iW = iW.replace (/??/g,""); iW = iW.replace (/j??/g,"??");
        iW = iW.replace (/ija/g,"??a"); iW = iW.replace (/ije/g,"??e"); iW = iW.replace (/iji/g,"??i");
        iW = iW.replace (/ijo/g,"??o"); iW = iW.replace (/iju/g,"??u");
        iW = iW.replace (/tj/g,"t");
        iW = iW.replace (/dj/g,"d");
        iW = iW.replace (/sj/g,"s");
        iW = iW.replace (/zj/g,"z");
        iW = iW.replace (/rj/g,"r");

        iW = iW.replace (/ks/g,"??");
        iW = iW.replace (/ps/g,"??");
        iW = iW.replace (/a/g,"V??V");
        iW = iW.replace (/v/g,"??");
        iW = iW.replace (/b/g,"????");
        iW = iW.replace (/g/g,"??");
        iW = iW.replace (/d/g,"??");
        iW = iW.replace (/e/g,"V??V");
        iW = iW.replace (/z/g,"??");
        iW = iW.replace (/i/g,"V??V");
        iW = iW.replace (/j/g,"??");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/k/g,"??");
        iW = iW.replace (/l/g,"??");
        iW = iW.replace (/m/g,"??");
        iW = iW.replace (/n/g,"??");
        iW = iW.replace (/o/g,"V??V");
        iW = iW.replace (/p/g,"??");
        iW = iW.replace (/r/g,"??");
        iW = iW.replace (/s%/g,"??%");
        iW = iW.replace (/s/g,"??");
        iW = iW.replace (/t/g,"??");
        iW = iW.replace (/y/g,"V??V");
        iW = iW.replace (/u/g,"V????V");
        iW = iW.replace (/f/g,"??");
        iW = iW.replace (/h/g,"??");
        iW = iW.replace (/c/g,"????");

        iW = iW.replace (/%??/g,"%??");
        iW = iW.replace (/V??V/g,"V??V");
        iW = iW.replace (/V/g,"");

        iW = iW.replace (/;/g,"??");
        iW = iW.replace (String.fromCharCode(63),";");
    }

    /* Vugorsky */

    else if (type == 15)
    { iW = iW.replace (/??/g,"??"); iW = iW.replace (/??/g,"??");
        iW = jgedoe (iW, type);
        iW = iW.replace (/a/g,"??"); iW = iW.replace (/??/g,"a");
        iW = iW.replace (/[????]/g,"je"); iW = iW.replace (/??/g,"e");
        iW = iW.replace (/[?????]/g,"??r");
        iW = iW.replace (/y/g,"??");
        iW = iW.replace (/[?????]/g,"??"); iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"??"); iW = iW.replace (/d??/g,"d??");
        iW = iW.replace (/??j/g,"??"); iW = iW.replace (/??j/g,"??");
        iW = iW.replace (/??j/g,"??"); iW = iW.replace (/jj/g,"j");

        iW = iW.replace (/s??/g,"s"); iW = iW.replace (/z??/g,"z"); iW = iW.replace (/r??/g,"r");
        iW = iW.replace (/[????]/g,"j");
        iW = iW.replace (/tj/g,"ty");
        iW = iW.replace (/dj/g,"gy");
        iW = iW.replace (/lj/g,"ly");
        iW = iW.replace (/nj/g,"ny");
        iW = iW.replace (/yj/g,"y");
        iW = iW.replace (/s/g,"sz");
        iW = iW.replace (/??/g,"s");
        iW = iW.replace (/??/g,"zs");
        iW = iW.replace (/??/g,"cs");
    }

    /* Latvijsky */

    else if (type == 16)
    { iW = iW.replace (/??/g,"??"); iW = iW.replace (/??/g,"d??");
        iW = jgedoe (iW, type);
        iW = iW.replace (/???/g,"or"); iW = iW.replace (/??/g,"er");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/[?????]/g,"o");
        iW = iW.replace (/[????]/g,"????"); iW = iW.replace (/??/g,"e");
        iW = iW.replace (/i/g,"??i"); iW = iW.replace (/y/g,"i");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??j/g,"??"); iW = iW.replace (/??j/g,"??");
        iW = iW.replace (/??j/g,"??"); iW = iW.replace (/jj/g,"j");

        iW = iW.replace (/t??/g,"??");
        iW = iW.replace (/d??/g,"??");
        iW = iW.replace (/r??/g,"??");
        iW = iW.replace (/l??/g,"??");
        iW = iW.replace (/n??/g,"??");
        iW = iW.replace (/??/g,"");
        iW = iW.replace (/t??/g,"??");
        iW = iW.replace (/d??/g,"??");
        iW = iW.replace (/r??/g,"??");
        iW = iW.replace (/l??/g,"??");
        iW = iW.replace (/n??/g,"??");
        iW = iW.replace (/j??/g,"j");
        iW = iW.replace (/????/g,"??");
        iW = iW.replace (/??i/g,"i");
        iW = iW.replace (/??/g,"i");
    }

    /* Rumunsky */

    else if (type == 19)
    { iW = jgedoe (iW, type);
        iW = iW.replace (/??/g,"j");
        iW = iW.replace (/[?????]/g,"??r");
        iW = iW.replace (/[????]/g,"e"); iW = iW.replace (/??/g,"u");
        iW = iW.replace (/??/g,"je");
        iW = iW.replace (/([??????j])j/g,"$1");
        iW = iW.replace (/??t/g,"??t");
        iW = iW.replace (/??/g,"??"); iW = iW.replace (/d??/g,"??");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/[?????]/g,"??");
        iW = iW.replace (/y/g,"??");
        iW = iW.replace (/c/g,"??");
        iW = iW.replace (/k([a??ou%])/g,"c$1"); iW = iW.replace (/k([ei??])/g,"ch$1"); iW = iW.replace (/k/g,"c");
        iW = iW.replace (/cs/g,"x");
        iW = iW.replace (/g([ei??])/g,"gh$1");
        iW = iW.replace (/??a/g,"cea"); iW = iW.replace (/??([??ou%])/g,"ci$1"); iW = iW.replace (/??([ei??])/g,"c$1"); iW = iW.replace (/??/g,"ci");
        iW = iW.replace (/??a/g,"gea"); iW = iW.replace (/??([??ou%])/g,"gi$1"); iW = iW.replace (/??([ei??])/g,"g$1");
        iW = iW.replace (/[ij]/g,"i");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/??/g,"j");
        iW = iW.replace (/??/g,"");
        iW = iW.replace (/??a/g,"ea");
        iW = iW.replace (/??i/g,"ii");
        iW = iW.replace (/??/g,"i");
        iW = iW.replace (/ii/g,"i");
    }

    else if (type == 20) /* Welsh */
    { iW = jgedoe (iW, type);
        iW = iW.replace (/??/g,"j");
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/[??????]/g,"e");
        iW = iW.replace (/[u??]/g,"w");
        iW = iW.replace (/y/g,"u");
        iW = iW.replace (/[?????]/g,"yr");
        iW = iW.replace (/[?????]/g,"y");
        iW = iW.replace (/([??????j])j/g,"$1");
        iW = iW.replace (/??/g,"??"); iW = iW.replace (/??t/g,"??");
        iW = iW.replace (/d[????]/g,"??");
        iW = iW.replace (/c/g,"ts");
        iW = iW.replace (/k/g,"c");
        iW = iW.replace (/??([aeow])/g,"ti$1"); iW = iW.replace (/??/g,"ts");
        iW = iW.replace (/??([aeow])/g,"di$1"); iW = iW.replace (/??/g,"dz");
        iW = iW.replace (/??([aeow])/g,"si$1"); iW = iW.replace (/??/g,"s");
        iW = iW.replace (/??([aeow])/g,"zi$1"); iW = iW.replace (/??/g,"z");
        iW = iW.replace (/f/g,"ff");
        iW = iW.replace (/vv/g,"vyv");
        iW = iW.replace (/v/g,"f");
        iW = iW.replace (/l([????ei])/g,"L$1"); iW = iW.replace (/l/g,"ll");  iW = iW.replace (/L/g,"l");
        iW = iW.replace (/??i/g,"i");
        iW = iW.replace (/[??j]/g,"i");
        iW = iW.replace (/??/g,"");
        iW = iW.replace (/ii/g,"i");
    }

    else if (type == 17) /* Etiopsky */
    {
        iW = iW.replace (/??/g,"a");
        iW = iW.replace (/([j??????????])e/g,"$1E"); iW = iW.replace (/[e??]/g,"??"); iW = iW.replace (/E/g,"e");
        iW = iW.replace (/[????]/g,"j??"); iW = iW.replace (/jj/g,"j");
        iW = iW.replace (/[y]/g,"i");
        iW = iW.replace (/??/g,"o");
        iW = iW.replace (/??/g,"u");
        iW = iW.replace (/??/g,"w");
        iW = iW.replace (/[?????]/g,"r");
        iW = iW.replace (/[????]/g,"l");
        iW = iW.replace (/??/g,"??");
        iW = iW.replace (/d??/g,"??"); iW = iW.replace (/??/g,"??");
        iW = iW.replace (/[?????]/g,"");
        iW = iW.replace (/nj/g,"??"); iW = iW.replace (/??/g,"??"); iW = iW.replace (/n#j/g,"??");

        iW = jgedoe (iW, type);

        iW = iW.replace(/??/g,"");
        iW = iW.replace(/??/g,"j");

        iW = iW.replace(/b??/g,"???");
        iW = iW.replace(/bu/g,"???");
        iW = iW.replace(/bi/g,"???");
        iW = iW.replace(/ba/g,"???");
        iW = iW.replace(/be/g,"???");
        iW = iW.replace(/b??/g,"???");
        iW = iW.replace(/bo/g,"???");
        iW = iW.replace(/b/g,"???");

        iW = iW.replace(/c??/g,"???");
        iW = iW.replace(/cu/g,"???");
        iW = iW.replace(/ci/g,"???");
        iW = iW.replace(/ca/g,"???");
        iW = iW.replace(/ce/g,"???");
        iW = iW.replace(/c??/g,"???");
        iW = iW.replace(/co/g,"???");
        iW = iW.replace(/c/g,"???");

        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??u/g,"???");
        iW = iW.replace(/??i/g,"???");
        iW = iW.replace(/??a/g,"???");
        iW = iW.replace(/??e/g,"???");
        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??o/g,"???");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/d??/g,"???");
        iW = iW.replace(/du/g,"???");
        iW = iW.replace(/di/g,"???");
        iW = iW.replace(/da/g,"???");
        iW = iW.replace(/de/g,"???");
        iW = iW.replace(/d??/g,"???");
        iW = iW.replace(/do/g,"???");
        iW = iW.replace(/d/g,"???");

        iW = iW.replace(/f??/g,"???");
        iW = iW.replace(/fu/g,"???");
        iW = iW.replace(/fi/g,"???");
        iW = iW.replace(/fa/g,"???");
        iW = iW.replace(/fe/g,"???");
        iW = iW.replace(/f??/g,"???");
        iW = iW.replace(/fo/g,"???");
        iW = iW.replace(/f/g,"???");

        iW = iW.replace(/g??/g,"???");
        iW = iW.replace(/gu/g,"???");
        iW = iW.replace(/gi/g,"???");
        iW = iW.replace(/ga/g,"???");
        iW = iW.replace(/ge/g,"???");
        iW = iW.replace(/g??/g,"???");
        iW = iW.replace(/go/g,"???");
        iW = iW.replace(/g/g,"???");

        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??u/g,"???");
        iW = iW.replace(/??i/g,"???");
        iW = iW.replace(/??a/g,"???");
        iW = iW.replace(/??e/g,"???");
        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??o/g,"???");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/h??/g,"???");
        iW = iW.replace(/hu/g,"???");
        iW = iW.replace(/hi/g,"???");
        iW = iW.replace(/ha/g,"???");
        iW = iW.replace(/he/g,"???");
        iW = iW.replace(/h??/g,"???");
        iW = iW.replace(/ho/g,"???");
        iW = iW.replace(/h/g,"???");

        iW = iW.replace(/j??/g,"???");
        iW = iW.replace(/ju/g,"???");
        iW = iW.replace(/ji/g,"???");
        iW = iW.replace(/ja/g,"???");
        iW = iW.replace(/je/g,"???");
        iW = iW.replace(/j??/g,"???");
        iW = iW.replace(/jo/g,"???");
        iW = iW.replace(/j/g,"???");

        iW = iW.replace(/k??/g,"???");
        iW = iW.replace(/ku/g,"???");
        iW = iW.replace(/ki/g,"???");
        iW = iW.replace(/ka/g,"???");
        iW = iW.replace(/ke/g,"???");
        iW = iW.replace(/k??/g,"???");
        iW = iW.replace(/ko/g,"???");
        iW = iW.replace(/k/g,"???");

        iW = iW.replace(/l??/g,"???");
        iW = iW.replace(/lu/g,"???");
        iW = iW.replace(/li/g,"???");
        iW = iW.replace(/la/g,"???");
        iW = iW.replace(/le/g,"???");
        iW = iW.replace(/l??/g,"???");
        iW = iW.replace(/lo/g,"???");
        iW = iW.replace(/l/g,"???");

        iW = iW.replace(/m??/g,"???");
        iW = iW.replace(/mu/g,"???");
        iW = iW.replace(/mi/g,"???");
        iW = iW.replace(/ma/g,"???");
        iW = iW.replace(/me/g,"???");
        iW = iW.replace(/m??/g,"???");
        iW = iW.replace(/mo/g,"???");
        iW = iW.replace(/m/g,"???");

        iW = iW.replace(/n??/g,"???");
        iW = iW.replace(/nu/g,"???");
        iW = iW.replace(/ni/g,"???");
        iW = iW.replace(/na/g,"???");
        iW = iW.replace(/ne/g,"???");
        iW = iW.replace(/n??/g,"???");
        iW = iW.replace(/no/g,"???");
        iW = iW.replace(/n/g,"???");

        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??u/g,"???");
        iW = iW.replace(/??i/g,"???");
        iW = iW.replace(/??a/g,"???");
        iW = iW.replace(/??e/g,"???");
        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??o/g,"???");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/p??/g,"???");
        iW = iW.replace(/pu/g,"???");
        iW = iW.replace(/pi/g,"???");
        iW = iW.replace(/pa/g,"???");
        iW = iW.replace(/pe/g,"???");
        iW = iW.replace(/p??/g,"???");
        iW = iW.replace(/po/g,"???");
        iW = iW.replace(/p/g,"???");

        iW = iW.replace(/r??/g,"???");
        iW = iW.replace(/ru/g,"???");
        iW = iW.replace(/ri/g,"???");
        iW = iW.replace(/ra/g,"???");
        iW = iW.replace(/re/g,"???");
        iW = iW.replace(/r??/g,"???");
        iW = iW.replace(/ro/g,"???");
        iW = iW.replace(/r/g,"???");

        iW = iW.replace(/s??/g,"???");
        iW = iW.replace(/su/g,"???");
        iW = iW.replace(/si/g,"???");
        iW = iW.replace(/sa/g,"???");
        iW = iW.replace(/se/g,"???");
        iW = iW.replace(/s??/g,"???");
        iW = iW.replace(/so/g,"???");
        iW = iW.replace(/s/g,"???");

        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??u/g,"???");
        iW = iW.replace(/??i/g,"???");
        iW = iW.replace(/??a/g,"???");
        iW = iW.replace(/??e/g,"???");
        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??o/g,"???");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/t??/g,"???");
        iW = iW.replace(/tu/g,"???");
        iW = iW.replace(/ti/g,"???");
        iW = iW.replace(/ta/g,"???");
        iW = iW.replace(/te/g,"???");
        iW = iW.replace(/t??/g,"???");
        iW = iW.replace(/to/g,"???");
        iW = iW.replace(/t/g,"???");

        iW = iW.replace(/v??/g,"???");
        iW = iW.replace(/vu/g,"???");
        iW = iW.replace(/vi/g,"???");
        iW = iW.replace(/va/g,"???");
        iW = iW.replace(/ve/g,"???");
        iW = iW.replace(/v??/g,"???");
        iW = iW.replace(/vo/g,"???");
        iW = iW.replace(/v/g,"???");

        iW = iW.replace(/w/g,"???");

        iW = iW.replace(/z??/g,"???");
        iW = iW.replace(/zu/g,"???");
        iW = iW.replace(/zi/g,"???");
        iW = iW.replace(/za/g,"???");
        iW = iW.replace(/ze/g,"???");
        iW = iW.replace(/z??/g,"???");
        iW = iW.replace(/zo/g,"???");
        iW = iW.replace(/z/g,"???");

        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??u/g,"???");
        iW = iW.replace(/??i/g,"???");
        iW = iW.replace(/??a/g,"???");
        iW = iW.replace(/??e/g,"???");
        iW = iW.replace(/????/g,"???");
        iW = iW.replace(/??o/g,"???");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/u/g,"???");
        iW = iW.replace(/i/g,"???");
        iW = iW.replace(/a/g,"???");
        iW = iW.replace(/e/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/o/g,"???");
    }

    /* Devanagari */

    else if (type == 18)
    { 	iW = iW.replace (/??/g,"i"); iW = iW.replace (/#/g,"");
        iW = jgedoe (iW, type);

        iW = iW.replace(/t??/g,"??"); iW = iW.replace(/t??/g,"??j");
        iW = iW.replace(/d??/g,"??"); iW = iW.replace(/d??/g,"??j");
        iW = iW.replace(/r??/g,"r"); iW = iW.replace(/r??/g,"rj");
        iW = iW.replace(/l??/g,"lj"); iW = iW.replace(/l??/g,"lj");
        iW = iW.replace(/n??/g,"??"); iW = iW.replace(/n??/g,"??");
        iW = iW.replace(/s??/g,"s"); iW = iW.replace(/s??/g,"sj");
        iW = iW.replace(/z??/g,"z"); iW = iW.replace(/z??/g,"zj");
        iW = iW.replace(/??/g,""); iW = iW.replace(/??/g,"j");

        iW = iW.replace(/[a??]/g,"??");
        iW = iW.replace(/j[????]/g,"j??"); iW = iW.replace(/[????]/g,"j??");
        iW = iW.replace(/??/g,"ai");
        iW = iW.replace(/e/g,"??");
        iW = iW.replace(/??/g,"?????");
        iW = iW.replace(/i/g,"??");
        iW = iW.replace(/[y??]/g,"i");
        iW = iW.replace(/o/g,"??");
        iW = iW.replace(/??/g,"a");
        iW = iW.replace(/??/g,"?????");
        iW = iW.replace(/[?????]/g,"ar");
        iW = iW.replace(/c/g,"ts");
        iW = iW.replace(/[????]/g,"c");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/j/g,"y");
        iW = iW.replace(/d??/g,"j");
        iW = iW.replace(/d??/g,"j");
        iW = iW.replace(/h/g,"k???h??");
        iW = iW.replace(/??/g,"ly");
        iW = iW.replace(/??/g,"??");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/??/g,"??");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/??/g,"z");
        iW = iW.replace(/??/g,"zh");

        iW = iW.replace(/zh/g,"??????#");
        iW = iW.replace(/k???h??/g,"??????#");
        iW = iW.replace(/b/g,"???#");
        iW = iW.replace(/c/g,"???#");
        iW = iW.replace(/d/g,"???#");
        iW = iW.replace(/???/g,"???#");
        iW = iW.replace(/f/g,"??????#");
        iW = iW.replace(/g/g,"???#");
        iW = iW.replace(/h/g,"???#");
        iW = iW.replace(/j/g,"???#");
        iW = iW.replace(/k/g,"???#");
        iW = iW.replace(/l/g,"???#");
        iW = iW.replace(/m/g,"???#");
        iW = iW.replace(/n/g,"???#");
        iW = iW.replace(/??/g,"???#");
        iW = iW.replace(/p/g,"???#");
        iW = iW.replace(/r/g,"???#");
        iW = iW.replace(/???/g,"??????#");
        iW = iW.replace(/t/g,"???#");
        iW = iW.replace(/???/g,"???#");
        iW = iW.replace(/s/g,"???#");
        iW = iW.replace(/???/g,"???#");
        iW = iW.replace(/??/g,"???#");
        iW = iW.replace(/v/g,"???#");
        iW = iW.replace(/y/g,"???#");
        iW = iW.replace(/z/g,"??????#");

        iW = iW.replace(/#ai/g,"???");
        iW = iW.replace(/#a/g,"");
        iW = iW.replace(/#??/g,"???");
        iW = iW.replace(/#i/g,"???");
        iW = iW.replace(/#??/g,"???");
        iW = iW.replace(/#u/g,"???");
        iW = iW.replace(/#?????/g,"??????");
        iW = iW.replace(/#?????/g,"??????");
        iW = iW.replace(/#??/g,"???");
        iW = iW.replace(/#??/g,"???");
        iW = iW.replace(/#%/g,"%");
        iW = iW.replace(/#/g,"???");

        iW = iW.replace(/ai/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/i/g,"???");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/u/g,"???");
        iW = iW.replace(/?????/g,"??????");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/?????/g,"??????");
        iW = iW.replace(/??/g,"???");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/0/g,"???");
        iW = iW.replace(/1/g,"???");
        iW = iW.replace(/2/g,"???");
        iW = iW.replace(/3/g,"???");
        iW = iW.replace(/4/g,"???");
        iW = iW.replace(/5/g,"???");
        iW = iW.replace(/6/g,"???");
        iW = iW.replace(/7/g,"???");
        iW = iW.replace(/8/g,"???");
        iW = iW.replace(/9/g,"???");
    }

    /* Abur */

    else if (type == 21)
    {
        iW = iW.replace (/???/g,"??r");
        iW = iW.replace (/??/g,"??r");
        iW = iW.replace (/????/g,"????");

        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/??/g,"???");

        iW = jgedoe (iW);
        iW = iW.replace (/[j??]a/g,"???");
        iW = iW.replace (/[j??]u/g,"???");

        iW = iW.replace (/dz/g,"???");
        iW = iW.replace (/d??/g,"???");
        iW = iW.replace (/????/g,"???");
        iW = iW.replace (/l[????]/g,"???");
        iW = iW.replace (/n[????]/g,"???");
        iW = iW.replace (/r[????]/g,"???");
        iW = iW.replace (/t[????]/g,"???");
        iW = iW.replace (/d[????]/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/??/g,"???");

        iW = iW.replace (/a/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/b/g,"???");
        iW = iW.replace (/c/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/d/g,"???");
        iW = iW.replace (/e/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/f/g,"???");
        iW = iW.replace (/g/g,"???");
        iW = iW.replace (/h/g,"???");
        iW = iW.replace (/i/g,"???");
        iW = iW.replace (/[j??]/g,"???");
        iW = iW.replace (/k/g,"???");
        iW = iW.replace (/l/g,"???");
        iW = iW.replace (/m/g,"???");
        iW = iW.replace (/n/g,"???");
        iW = iW.replace (/o/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/p/g,"???");
        iW = iW.replace (/r/g,"???");
        iW = iW.replace (/s/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/t/g,"???");
        iW = iW.replace (/u/g,"???");
        iW = iW.replace (/??/g,"???");
        iW = iW.replace (/v/g,"???");
        iW = iW.replace (/y/g,"???");
        iW = iW.replace (/z/g,"???");
        iW = iW.replace (/??/g,"???");
    }

    /* Japanese (katakana) */

    else if (type == 22)
    {
        iW = iW.replace(/y/g,"i");
        iW = iW.replace(/[?????]/g,"r");
        iW = iW.replace(/ll/g,"???l");
        iW = iW.replace(/nn/g,"???n");
        iW = iW.replace(/rr/g,"???r");
        iW = iW.replace(/tt/g,"???t");
        iW = iW.replace(/dd/g,"???d");
        iW = iW.replace(/ss/g,"???s");
        iW = iW.replace(/zz/g,"???z");
        iW = iW.replace(/vv/g,"???v");


        iW = iW.replace(/d??a/g,"??????");
        iW = iW.replace(/d??e/g,"??????");
        iW = iW.replace(/d??i/g,"??????");
        iW = iW.replace(/d??o/g,"??????");
        iW = iW.replace(/d??u/g,"??????");
        iW = iW.replace(/d??/g,"???");

        iW = iW.replace(/sa/g,"???");
        iW = iW.replace(/se/g,"???");
        iW = iW.replace(/si/g,"??????");
        iW = iW.replace(/so/g,"???");
        iW = iW.replace(/su/g,"??????");
        iW = iW.replace(/s??/g,"?????????");
        iW = iW.replace(/s/g,"???");

        iW = iW.replace(/za/g,"???");
        iW = iW.replace(/ze/g,"???");
        iW = iW.replace(/zi/g,"??????");
        iW = iW.replace(/zo/g,"???");
        iW = iW.replace(/zu/g,"??????");
        iW = iW.replace(/z??/g,"?????????");
        iW = iW.replace(/z/g,"???");

        iW = iW.replace(/??a/g,"??????");
        iW = iW.replace(/??e/g,"??????");
        iW = iW.replace(/??i/g,"??????");
        iW = iW.replace(/??o/g,"??????");
        iW = iW.replace(/??u/g,"??????");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/??a/g,"??????");
        iW = iW.replace(/??e/g,"??????");
        iW = iW.replace(/??i/g,"??????");
        iW = iW.replace(/??o/g,"??????");
        iW = iW.replace(/??u/g,"??????");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/ta/g,"???");
        iW = iW.replace(/te/g,"???");
        iW = iW.replace(/ti/g,"??????");
        iW = iW.replace(/to/g,"??????");
        iW = iW.replace(/tu/g,"??????");
        iW = iW.replace(/t??/g,"?????????");
        iW = iW.replace(/t/g,"???");

        iW = iW.replace(/da/g,"???");
        iW = iW.replace(/de/g,"???");
        iW = iW.replace(/di/g,"??????");
        iW = iW.replace(/do/g,"??????");
        iW = iW.replace(/du/g,"??????");
        iW = iW.replace(/d??/g,"?????????");
        iW = iW.replace(/d/g,"???");

        iW = iW.replace(/??a/g,"??????");
        iW = iW.replace(/??e/g,"??????");
        iW = iW.replace(/??i/g,"??????");
        iW = iW.replace(/??o/g,"??????");
        iW = iW.replace(/??u/g,"??????");
        iW = iW.replace(/??/g,"???");

        iW = iW.replace(/ca/g,"??????");
        iW = iW.replace(/ce/g,"??????");
        iW = iW.replace(/ci/g,"??????");
        iW = iW.replace(/co/g,"??????");
        iW = iW.replace(/cu/g,"??????");
        iW = iW.replace(/c??/g,"?????????");
        iW = iW.replace(/c/g,"???");

        iW = iW.replace(/ka/g,"???");
        iW = iW.replace(/ke/g,"???");
        iW = iW.replace(/ki/g,"???");
        iW = iW.replace(/ko/g,"???");
        iW = iW.replace(/ku/g,"??????");
        iW = iW.replace(/k??/g,"??????");
        iW = iW.replace(/k/g,"???");

        iW = iW.replace(/ga/g,"???");
        iW = iW.replace(/ge/g,"???");
        iW = iW.replace(/gi/g,"???");
        iW = iW.replace(/go/g,"???");
        iW = iW.replace(/gu/g,"??????");
        iW = iW.replace(/g??/g,"??????");
        iW = iW.replace(/g/g,"???");

        iW = iW.replace(/ha/g,"???");
        iW = iW.replace(/he/g,"???");
        iW = iW.replace(/hi/g,"???");
        iW = iW.replace(/ho/g,"???");
        iW = iW.replace(/hu/g,"??????");
        iW = iW.replace(/h??/g,"??????");
        iW = iW.replace(/h/g,"???");

        iW = iW.replace(/pa/g,"???");
        iW = iW.replace(/pe/g,"???");
        iW = iW.replace(/pi/g,"???");
        iW = iW.replace(/po/g,"???");
        iW = iW.replace(/pu/g,"??????");
        iW = iW.replace(/p??/g,"??????");
        iW = iW.replace(/pja/g,"??????");
        iW = iW.replace(/pje/g,"??????");
        iW = iW.replace(/pjo/g,"??????");
        iW = iW.replace(/pju/g,"??????");
        iW = iW.replace(/p/g,"???");

        iW = iW.replace(/ba/g,"???");
        iW = iW.replace(/be/g,"???");
        iW = iW.replace(/bi/g,"???");
        iW = iW.replace(/bo/g,"???");
        iW = iW.replace(/bu/g,"??????");
        iW = iW.replace(/b??/g,"??????");
        iW = iW.replace(/bja/g,"??????");
        iW = iW.replace(/bje/g,"??????");
        iW = iW.replace(/bjo/g,"??????");
        iW = iW.replace(/bju/g,"??????");
        iW = iW.replace(/b/g,"???");

        iW = iW.replace(/ma/g,"???");
        iW = iW.replace(/me/g,"???");
        iW = iW.replace(/mi/g,"???");
        iW = iW.replace(/mo/g,"???");
        iW = iW.replace(/mu/g,"??????");
        iW = iW.replace(/m??/g,"??????");
        iW = iW.replace(/mja/g,"??????");
        iW = iW.replace(/mje/g,"??????");
        iW = iW.replace(/mjo/g,"??????");
        iW = iW.replace(/mju/g,"??????");
        iW = iW.replace(/m/g,"???");

        iW = iW.replace(/na/g,"???");
        iW = iW.replace(/ne/g,"???");
        iW = iW.replace(/ni/g,"???");
        iW = iW.replace(/no/g,"???");
        iW = iW.replace(/nu/g,"???");
        iW = iW.replace(/n??/g,"??????");
        iW = iW.replace(/nja/g,"??????");
        iW = iW.replace(/nje/g,"??????");
        iW = iW.replace(/njo/g,"??????");
        iW = iW.replace(/nju/g,"??????");
        iW = iW.replace(/n/g,"???");

        iW = iW.replace(/ra/g,"???");
        iW = iW.replace(/re/g,"???");
        iW = iW.replace(/ri/g,"???");
        iW = iW.replace(/ro/g,"???");
        iW = iW.replace(/ru/g,"??????");
        iW = iW.replace(/r??/g,"??????");
        iW = iW.replace(/rja/g,"??????");
        iW = iW.replace(/rje/g,"??????");
        iW = iW.replace(/rjo/g,"??????");
        iW = iW.replace(/rju/g,"??????");
        iW = iW.replace(/r/g,"???");

        iW = iW.replace(/la/g,"??????");
        iW = iW.replace(/le/g,"??????");
        iW = iW.replace(/li/g,"??????");
        iW = iW.replace(/lo/g,"??????");
        iW = iW.replace(/lu/g,"?????????");
        iW = iW.replace(/l??/g,"?????????");
        iW = iW.replace(/lja/g,"?????????");
        iW = iW.replace(/lje/g,"?????????");
        iW = iW.replace(/ljo/g,"?????????");
        iW = iW.replace(/lju/g,"?????????");
        iW = iW.replace(/l/g,"??????");

        iW = iW.replace(/fa/g,"??????");
        iW = iW.replace(/fe/g,"??????");
        iW = iW.replace(/fi/g,"??????");
        iW = iW.replace(/fo/g,"??????");
        iW = iW.replace(/fu/g,"??????");
        iW = iW.replace(/f??/g,"?????????");
        iW = iW.replace(/fja/g,"??????");
        iW = iW.replace(/fje/g,"?????????");
        iW = iW.replace(/fjo/g,"??????");
        iW = iW.replace(/fju/g,"??????");
        iW = iW.replace(/f/g,"???");

        iW = iW.replace(/va/g,"??????");
        iW = iW.replace(/ve/g,"??????");
        iW = iW.replace(/vi/g,"??????");
        iW = iW.replace(/vo/g,"??????");
        iW = iW.replace(/vu/g,"???");
        iW = iW.replace(/v??/g,"?????????");
        iW = iW.replace(/vja/g,"??????");
        iW = iW.replace(/vje/g,"?????????");
        iW = iW.replace(/vjo/g,"??????");
        iW = iW.replace(/vju/g,"??????");
        iW = iW.replace(/v/g,"???");

        iW = iW.replace(/ja/g,"???");
        iW = iW.replace(/je/g,"??????");
        iW = iW.replace(/ji/g,"??????");
        iW = iW.replace(/jo/g,"???");
        iW = iW.replace(/ju/g,"???");
        iW = iW.replace(/j/g,"???");

        iW = iW.replace(/a/g,"???");
        iW = iW.replace(/e/g,"???");
        iW = iW.replace(/i/g,"???");
        iW = iW.replace(/o/g,"???");
        iW = iW.replace(/u/g,"???");
    }


    iW = iW.replace (/jj/g,"j");
    iW = iW.replace (/[#??%]/g,""); OrigW = OrigW.replace (/%/g,"");

    /** Hoofdletters maken **/

    iW_first = iW.charAt (0); iW_rest = iW.substring (1);

    if (type == 10 || (OrigW.charAt (0) == OrigW.charAt (0).toLowerCase()))
    {
        iW = iW.toLowerCase();
    }
    else if ((OrigW.length > 1) && (OrigW.charAt (1) == OrigW.charAt (1).toLowerCase()))
    {
        if (type == 21)
        {	iW = abur_upper (iW_first) + iW_rest.toLowerCase();	}
        else
        {	iW = iW_first.toUpperCase() + iW_rest.toLowerCase();	}
    }
    else
    {
        if (type == 21)
        {	iW = abur_upper (iW);	}
        else
        {	iW = iW.toUpperCase();	}
    }

    iW = iW.replace (/???/g,"%");

    var grs = iW.lastIndexOf ("??");
    if ((grs == "0") && (OrigW.indexOf ("s") == -1))					{ iW = iW.replace (/??/g,"??"); }
    else if (iW.charAt (grs - 1) != iW.charAt (grs - 1).toLowerCase())		{ iW = iW.replace (/??/g,"??"); }

    return iW;
}

function abur_upper (iW)
{
    i = 0; endresult = ""; while (i < iW.length)
{
    nextChar = iW.charAt (i);
    if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else if (nextChar == "???") { resultChar = "???"; }
    else			  { resultChar = nextChar; }

    i++;
    endresult += resultChar;
}
    return endresult;
}

function nmsify (iW)
{
    iW = iW.replace (/[?????]/g,"#a"); iW = iW.replace (/????/g,"#a");
    iW = iW.replace (/??/g,"#e"); iW = iW.replace (/????/g,"#e");
    iW = iW.replace (/??/g,"#i"); iW = iW.replace (/????/g,"#i");
    iW = iW.replace (/??/g,"#o"); iW = iW.replace (/????/g,"#o");
    iW = iW.replace (/??/g,"#u"); iW = iW.replace (/????/g,"#u");
    iW = iW.replace (/??/g,"#??"); iW = iW.replace (/????/g,"#??");
    iW = iW.replace (/??/g,"#??"); iW = iW.replace (/????/g,"#??");
    iW = iW.replace (/????/g,"??"); iW = iW.replace (/??#/g,"nj"); iW = iW.replace (/??/g,"nj");
    iW = iW.replace (/????/g,"??"); iW = iW.replace (/??#/g,"lj"); iW = iW.replace (/??/g,"lj");
    iW = iW.replace (/????/g,"??"); iW = iW.replace (/??#/g,"??");
    iW = iW.replace (/????/g,"??"); iW = iW.replace (/??#/g,"??");
    iW = iW.replace (/????/g,"??"); iW = iW.replace (/??#/g,"??");
    iW = iW.replace (/????/g,"??"); iW = iW.replace (/??#/g,"??");
    iW = iW.replace (/????/g,"??"); iW = iW.replace (/??#/g,"??");
    iW = iW.replace (/??%/g,"%");

    iW = iW.replace (/[????]/g,"??");
    iW = iW.replace (/[????]/g,"??");
    iW = iW.replace (/??/g,"dz");
    iW = iW.replace (/??/g,"d??");
    iW = iW.replace (/??/g,"a");
    iW = iW.replace (/??/g,"b");
    iW = iW.replace (/??/g,"v");
    iW = iW.replace (/[????]/g,"g");
    iW = iW.replace (/??/g,"d");
    iW = iW.replace (/[????]/g,"e");
    iW = iW.replace (/[????]/g,"??");
    iW = iW.replace (/??/g,"??");
    iW = iW.replace (/[????????]/g,"z");
    iW = iW.replace (/[????????]/g,"i");
    iW = iW.replace (/[??????#]/g,"j");
    iW = iW.replace (/??/g,"k");
    iW = iW.replace (/??/g,"l");
    iW = iW.replace (/??/g,"m");
    iW = iW.replace (/??/g,"n");
    iW = iW.replace (/[????]/g,"o");
    iW = iW.replace (/??/g,"p");
    iW = iW.replace (/??/g,"r");
    iW = iW.replace (/??/g,"s");
    iW = iW.replace (/[????]/g,"t");
    iW = iW.replace (/[??????]/g,"u");
    iW = iW.replace (/??/g,"f");
    iW = iW.replace (/??/g,"h");
    iW = iW.replace (/??/g,"c");
    iW = iW.replace (/??/g,"??");
    iW = iW.replace (/??/g,"??");
    iW = iW.replace (/??/g,"????");
    iW = iW.replace (/[?????]/g,"y");
    iW = iW.replace (/??/g,"q");
    iW = iW.replace (/??/g,"??");
    iW = iW.replace (/??/g,"??");
    iW = iW.replace (/??/g,"??");
    iW = iW.replace (/??/g,"ps");
    iW = iW.replace (/??/g,"ks");
    iW = iW.replace (/???/g,".");

    iW = iW.replace (/zsk/g,"z#sk"); iW = iW.replace (/zst/g,"z#st");
    iW = iW.replace (/%izs/g,"%iz#s"); iW = iW.replace (/%bezs/g,"%bez#s"); iW = iW.replace (/%razs/g,"%raz#s"); iW = iW.replace (/%r??zs/g,"%r??z#s");
    iW = iW.replace (/konjug/g,"kon#jug"); iW = iW.replace (/konjun/g,"kon#jun"); iW = iW.replace (/injek/g,"in#jek");

    iW = iW.replace (/s[xz]/g,"??"); iW = iW.replace (/c[xz]/g,"??"); iW = iW.replace (/z[xs]/g,"??"); iW = iW.replace (/??/g,"??"); iW = iW.replace (/ye/g,"??");

    iW = iW.replace (/qu/g,"kv"); iW = iW.replace (/??/g,"??l"); iW = iW.replace (/[??q`]/g,"???");
    iW = iW.replace (/ch/g,"h"); iW = iW.replace (/w/g,"v"); iW = iW.replace (/x/g,"ks");

    iW = iW.replace (/[????????]/g,"a"); iW = iW.replace (/[????????????]/g,"i"); iW = iW.replace (/[????????]/g,"u"); iW = iW.replace (/[??????]/g,"??"); iW = iW.replace (/??/g,"??");
    iW = iW.replace (/[????]/g,"e"); iW = iW.replace (/[??????]/g,"??");
    iW = iW.replace (/??????/g,"o"); iW = iW.replace (/[??????]/g,"??"); iW = iW.replace (/??/g,"y");
    iW = iW.replace (/??/g,"l"); iW = iW.replace (/??/g,"c"); iW = iW.replace (/??/g,"z"); iW = iW.replace (/??/g,"j");
    iW = iW.replace (/[??????]/g,"??"); iW = iW.replace (/[????????]/g,"??"); iW = iW.replace (/??/g,"??"); iW = iW.replace (/t??/g,"??"); iW = iW.replace (/d??/g,"??");

    iW = iW.replace (/([j??????????])y/g,"$1i"); iW = iW.replace (/jj/g,"j");

    return iW;
}

function jgedoe (iW, type)
{

    /* (V)j(V)	= j */
    /* Cj(C)  	= ?? */
    /* CjV		= ?? */

    iW = iW.replace (/??/g,"cj");
    iW = iW.replace (/??/g,"dzj");
    iW = iW.replace (/??/g,"lj");
    iW = iW.replace (/??/g,"nj");
    iW = iW.replace (/??/g,"rj");
    iW = iW.replace (/??/g,"dj");
    iW = iW.replace (/??/g,"tj");
    iW = iW.replace (/??/g,"sj");
    iW = iW.replace (/??/g,"zj");

    var i = 0;
    var wLength = iW.length;
    var nextChar = "";
    var resC = "";
    var result = "";

    while (i < wLength)
    {
        nextChar = iW.charAt (i);
        resC = nextChar;
        var vowel = /[a????e??????io??u??y??]/

        switch (nextChar)
        {
            case "j":	if  (iW.charAt (i - 1) == "%")							{ resC = "j"; break; }
            else if  (iW.charAt (i - 1) == "#")						{ resC = "j"; break; }
            else if (iW.charAt (i - 1) == "j")						{ resC = "j"; break; }
            else if ((vowel.test (iW.charAt (i - 1)) == false)
                && (vowel.test (iW.charAt (i + 1)) == true))				{ resC = "??"; break; }
            else if ((vowel.test (iW.charAt (i - 1)) == false)
                && (vowel.test (iW.charAt (i + 1)) == false))				{ resC = "??"; break; }
            else										{ resC = "j"; break; }
        }
        i++;
        result += resC;
    }
    return result;
}
