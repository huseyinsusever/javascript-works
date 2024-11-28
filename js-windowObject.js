let newWindow;
function openWindow() {
    newWindow = window.open('https://www.google.com.tr','newWindow',
        'width=500,height=600, resizable=yes');
}
function resizeWindow(){
    if(newWindow) newWindow.resizeTo(800, 600);
    }
function moveWindow(){
    if(newWindow) newWindow.moveTo(100, 100);
}
function closeWindow(){
    if(newWindow) newWindow.close();
}         