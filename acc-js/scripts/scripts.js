function autotab(current, to) {
    document.getElementById(to).focus();
}
function autotab_by_length(current, len, to) {
    if (document.getElementById(current).value.length == len) {
        document.getElementById(to).focus();
    }
}
function autoblur_by_length(current, len) {
    if (document.getElementById(current).value.length == len) {
    document.getElementById(current).blur();
    }
}
function autoblur_select(current) {
    document.getElementById(current).blur();
}