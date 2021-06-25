function cleanCaps(text) {
    text.replace(/\b\w/g, function(l){ return l.toUpperCase() })
    return text
}

export {
    cleanCaps
};