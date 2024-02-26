$(document).ready(function (){
    $("#nav-toggle").click(function (){
        $("#nav-menu").slideToggle("slow")
        $("#nav-menu").toggleClass("menu-active")
    })

    $("#dropdown-toggle").click(function (){
        $("#dropdown").slideToggle("slow")
        $("#dropdown").toggleClass("dropdown-menu")
        $("#dropdown-toggle").toggleClass('dropdown-background')
    })
})