function init() {
    var canvasDemo = document.getElementById('canvasDemo')
    var logoBody = canvasDemo.getContext('2d');
    var headingText = canvasDemo.getContext('2d');
    var logoText = canvasDemo.getContext('2d');

    /*HEADING TEXT (I LOVE JAVA SCRIPT)*/
    headingText.font = "26px monospace";
    headingText.fillText('I Love JavaScript', 28, 30);

    /*RECTANGLE (LOGO BODY)*/
    logoBody.fillStyle = '#f7dd50';
    logoBody.fillRect(60, 44, 180, 80);

    /*LOGO TEXT (JS*/
    logoText.font = "64px Franklin Gothic";
    logoText.fillStyle = '#323533';
    logoText.fillText('JS', 162, 114);
}