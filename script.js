var tablinks=document.getElementsByClassName("tab-link");
var tabContents=document.getElementsByClassName("tab-contents")

function openTab(tabname)
{

    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");

    }

   for(tabContent of tabContents)
    {
        tabContent.classList.remove("active-tab");

    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");


}