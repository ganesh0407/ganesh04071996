function nofocus()
{
document.convert.InUnit.focus()
}
var gValue = 1
var kgValue = 1000
var ounceValue = 28.3495
var lbValue = 453.592
var tValue = 907184
function toCM()
{
var i = document.convert.unit.selectedIndex
var thisUnit = document.convert.unit.options[i].value
if (thisUnit == "G")
        {
document.convert.g.value = document.convert.InUnit.value
        }
else if(thisUnit == "KG")
        {
document.convert.g.value = document.convert.InUnit.value * kgValue
        }
else if(thisUnit == "OUNCE" )
        {
document.convert.g.value = document.convert.InUnit.value * ounceValue
        }
else if(thisUnit == "LB" )
        {
document.convert.g.value = document.convert.InUnit.value * lbValue
        }
else if(thisUnit == "T" )
        {
document.convert.g.value = document.convert.InUnit.value * tValue
        }
toAll()
}
function toAll()
{
var m = document.convert.g.value
document.convert.kg.value = m / kgValue
document.convert.ounce.value = m / ounceValue
document.convert.lb.value = m / lbValue
document.convert.t.value = m / tValue
}
//-->
</script>
<center><h1>Free Weight Converter Script</h1></center>

<div align="center"><form name="convert">
<table border=1>
<tr><th>Unit</th><th>Number</th></tr>
        <tr>
                <td>
<select name="unit">
<option value = "G">Gram
<option value = "KG">Kilogram
<option value = "OUNCE">Ounce
<option value = "LB">Pound
<option value = "T">U.S. Ton
</select>
                </td>
                <td>
<input type="text" name="InUnit" size="20" maxlength="20" value="0">
                </td>
        </tr>
        <tr>
                <td>
Gram:                   </td>
                <td>
<input type="text" name="g" size="20" maxlength="20" value="0" onFocus="nofocus()">
                </td>
        </tr>
        <tr>
                <td>
Kilogram:
                </td>
                <td>
<input type="text" name="kg" size="20" maxlength="20" value="0" onFocus="nofocus()">
                </td>
        </tr>
        <tr>
                <td>
Ounce:          </td>
                <td>
<input type="text" name="ounce" size="20" maxlength="20" value="0" onFocus="nofocus()">
                </td>
        </tr>
         <tr>
              <td>
Pound:          </td>
                <td>
<input type="text" name="lb" size="20" maxlength="20" value="0" onFocus="nofocus()">
                </td>
        </tr>
        <tr>
               <td>
U.S. Ton:               </td>
                <td>
<input type="text" name="t" size="20" maxlength="20" value="0" onFocus="nofocus()"></td>
        </tr>
        <tr>
                <td>
<input type="Reset" value="Start Over" width=100>
                </td>
                <td>
<input type="button" value="Convert" onClick="toCM()" width=150>
                </td>
        </tr>
</table>
</form>
</font>
</td></tr>
</table></div>