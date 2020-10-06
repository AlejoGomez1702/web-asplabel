function initService()
{
    console.log('jejejej suuu');
    var linebreak = document.createElement('br');
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');
    var s3 = document.getElementById('s3');
    var s4 = document.getElementById('s4');
    var s5 = document.getElementById('s5');
    var s6 = document.getElementById('s6');
    var s7 = document.getElementById('s7');
    var s8 = document.getElementById('s8');
    var s9 = document.getElementById('s9');

    // s1.after(linebreak);
    s1.parentNode.insertBefore(linebreak, s1.nextSibling);
    s2.parentNode.insertBefore(linebreak, s2.nextSibling);
    s3.parentNode.insertBefore(linebreak, s3.nextSibling);  
    s4.parentNode.insertBefore(linebreak, s4.nextSibling);
    s5.parentNode.insertBefore(linebreak, s5.nextSibling);
    s6.parentNode.insertBefore(linebreak, s6.nextSibling);
    s7.parentNode.insertBefore(linebreak, s7.nextSibling);
    s8.parentNode.insertBefore(linebreak, s8.nextSibling);
    s9.parentNode.insertBefore(linebreak, s9.nextSibling);

    // s1.after(linebreak);
    // s2.after(linebreak);
    // s3.after(linebreak);
    // s4.after(linebreak);
    // s5.after(linebreak);
    // s6.after(linebreak);
    // s7.after(linebreak);
    // s8.after(linebreak);
    // s9.after(linebreak);
}