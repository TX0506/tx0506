function formValidation()
{
var stdname = document.registration.studentname;
var stdid = document.registration.studentid;
var stdgender = document.registration.studentgender;
var stdic = document.registration.studentic;
var stdrace = document.registration.studentrace;
var stdphone = document.registration.mobilephone;
var stdaddress= document.registration.address;
var stdemail = document.registration.email;
var stddepart = document.registration.department;
var stdcer = document.registration.certificate;
var stdlan = document.registration.language;if(allLetter(stdname))
{
if(stdid_validation(stdid,7,12))
{
if(validgender(stdmgender,stdfgender))
{
if(allnumeric(stdic))
{ 
if(validrace(stdc,stdm,stdi))
{
if(mobilephone.value.match(stdphone))
{
if(alphanumeric(stdadd))
{
if(ValidateEmail(stdemail))
{
if(allLetter(stddepartment))
{
if(certificateselect(stdcertificate))
}
}
} 
}
} 
}
}
}
}
return false;
}function allLetter(stdname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}function stdid_validation(stdid,mx,my)
{
var stdid_len = stdid.value.length;
if (stdid_len == 0 || stdid_len >= my || stdid_len < mx)
{
alert("Student Id should not be empty / length be between "+mx+" to "+my);
stdid.focus();
return false;
}
return true;
} function validgender(stdmgender,stdfgender)
{
x=0;

if(stdmgender.checked) 
{
x++;
} if(stdfgender.checked)
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
stdmgender.focus();
return false;
}
}function allnumeric(stdic)
{ 
var numbers = /^[0-9]+$/;
if(stdic.value.match(numbers))
{
return true;
}
else
{
alert('Student IC.No must have ic.no characters only');
stdic.focus();
return false;
}
} function validrace(stdc,stdm,stdi)
{
x=0;

if(stdc.checked) 
{
x++;
} if(stdm.checked)
{
x++; 
}if(stdi.checked)
{
x++;
}
if(x==0)
{
alert('Select Chinese/Malay/Indian');
stdrace.focus();
return false;
}
}function mobilephone(stdphone)
{
  var stdphone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((mobilephone.value.match(stdphone))
        {
      return true;
        }
      else
        {
        alert("message");
        return false;
        }
}function alphanumeric(stdadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(stdadd.value.match(letters))
{
return true;
}
else
{
alert('Student address must have alphanumeric characters only');
stdadd.focus();
return false;
}
}function ValidateEmail(stdemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(stdemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
stdemail.focus();
return false;
}
}function allLetter(stddepartment)
{ 
var letters = /^[A-Za-z]+$/;
if(stddepartment.value.match(letters))
{
return true;
}
else
{
alert('Department must be fill in');
stddepartment.focus();
return false;
}else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}
